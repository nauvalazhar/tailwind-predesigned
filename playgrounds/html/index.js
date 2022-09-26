const server = require('./scripts/server');
const build = require('./scripts/build');
const log = require('./scripts/log');
const www = require('./scripts/www');
const push = require('./scripts/push');
const path = require('path');
const cliSelect = require('cli-select');
const clc = require('cli-color');
const fs = require('fs');
const fse = require('fs-extra');
const prompt = require('prompt');

console.clear();

function dirPaths(root) {
  const designsDir = path.join(root, 'designs');
  const coreDir = path.join(root, 'core');
  const outDir = path.join(root, 'out');
  const distDir = path.join(root, 'dist');
  const feDir = path.join(root, '../../frontend');
  const feDesignsDir = path.join(feDir, 'public/designs/html');
  const feDataDir = path.join(feDir, 'data/');

  return { designsDir, coreDir, outDir, distDir, feDir, feDesignsDir, feDataDir };
}

function designDirPaths(root, designName) {
  const designSrc = path.join(root, 'designs', designName);
  const designDist = path.join(root, 'dist', designName);
  const designOut = path.join(root, 'out', designName);

  return {
    designSrc,
    designDist,
    designOut,
  };
}

async function pushDesign(root, designName) {
  const { feDesignsDir, feDir, outDir, feDataDir } = dirPaths(root);

  if(!designName) {
    console.log('You will push all designs inside the out/ directory.');
    console.log('Are you sure you want to push all designs? (y/n)');

    prompt.start();
    const { answer } = await prompt.get({
      properties: {
        answer: {
          description: '',
          required: true,
          type: 'string',
        },
      },
    });

    if(answer !== 'y') {
      return;
    }

    log('info', 'Cleaning frontend/public/designs/html directory');
    await fse.remove(feDesignsDir);

    const designs = fs.readdirSync(outDir);

    // push each design
    for(let design of designs) {
      await pushDesign(root, design);
    }

    return;
  }
  
  const { designOut } = designDirPaths(root, designName);

  const options = { feDataDir, feDesignsDir, feDir, designOut, designName };
  return await push(options);
}

async function buildDesign(root, designName) {
  const { designsDir, coreDir, outDir, distDir } = dirPaths(root);

  if(!designName) {
    console.log('Are you sure you want to build all designs? (y/n)');

    prompt.start();
    const { answer } = await prompt.get({
      properties: {
        answer: {
          description: '',
          required: true,
          type: 'string',
        },
      },
    });

    if(answer !== 'y') {
      return;
    }

    const start = Date.now();

    // clean out directory
    log('info', 'Cleaning out/ directory');
    await fse.remove(outDir);

    const excludeDesigns = ['example-block'];
    const allDesigns = fs.readdirSync(designsDir);
    const designs = allDesigns.filter(d => !excludeDesigns.includes(d));

    // build each design
    for(let design of designs) {
      await buildDesign(root, design);
    }

    const end = Date.now();
    log('info', `Built ${designs.length} design(s) in ${(end - start) / 1000} seconds`);

    return;
  }

  const { designSrc, designDist, designOut } = designDirPaths(root, designName);
  const baseurl = '/';

  const options = { outDir, designOut, designSrc, designName, designsDir, coreDir, baseurl };
  return build(options);
}

async function devServer(root, designName) {
  const { designsDir, coreDir, outDir, distDir } = dirPaths(root);

  // if no design name is provided, prompt for one
  if(!designName) {
    console.log('Please select a design:');

    // get all design names
    let designs = fs.readdirSync(designsDir);
    designs = [
      'create new design',
      ...designs.filter(design => design !== 'example-block'),
    ];

    // show design names selector
    const inputDesign = await cliSelect({
      values: designs,
      valueRenderer: (value, selected) => {
        if (selected) {
          return clc.underline(value);
        }

        return clc.blue(value);
      },
    })

    designName = inputDesign.value;

    // if select 'create new design', prompt for name
    if (inputDesign.id === 0) {
      console.log(`> ${designName}\n`);

      // ask for design name
      prompt.start();
      const { name } = await prompt.get({
        properties: {
          name: {
            description: 'Name of the design',
            required: true,
            pattern: /^[a-z0-9-]+$/,
            message: 'Name must be lowercase alphanumeric with dashes',
          },
        },
      });

      // copy example-block to new design
      const exampleBlock = path.join(designsDir, 'example-block');
      const newDesign = path.join(designsDir, name);
      await fse.copy(exampleBlock, newDesign);

      designName = name;
    }
  }

  console.clear();

  // get paths for the design
  const { designSrc, designDist, designOut } = designDirPaths(root, designName);

  const baseurl = '/';
  const options = { root, designName, designSrc, designDist, designOut, designsDir, coreDir, outDir, distDir, baseurl };

  log('info', `Working on ${designName}`);

  return server(options);
}

async function wwwServer(root, designName) {
  const { designOut } = designDirPaths(root, designName);
  const options = { designOut };

  return www(options);
}

async function main() {
  const command = process.argv[2];
  let designName = process.argv[3];

  const root = __dirname;

  if(command === 'build') {
    return buildDesign(root, designName);
  }else if(command === 'dev') {
    return devServer(root, designName);
  }else if(command === 'www') {
    return wwwServer(root, designName);
  }else if(command === 'push') {
    return pushDesign(root, designName);
  }
}

main();
