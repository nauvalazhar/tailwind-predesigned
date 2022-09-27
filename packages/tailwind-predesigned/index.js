#! /usr/bin/env node
const degit = require('degit');
const yargs = require('yargs');
const fs = require('fs');

const base = `nauvalazhar/tailwind-predesigned/frontend/public/designs/html`;

console.log('\ntailwind-predesigned CLI v0.0.1 \n');

const options = yargs
  .usage('Usage: -d <design-name>')
  .option('d', { 
    alias: 'download', 
    describe: 'Download a design', 
    type: 'string', 
    demandOption: true 
  })
  .argv;

const designName = options.d;

console.log(`Downloading \x1b[4m${designName}\x1b[0m design using \x1b[4mDegit\x1b[0m\n`);

if(fs.existsSync(designName)) {
  console.log('\x1b[31mDirectory is not empty.');
  process.exit();
}

const emitter = degit(`${base}/${designName}`, {
  cache: true,
  force: true,
  verbose: false,
});

emitter.on('info', info => {
  return console.log('\x1b[36m[verbose]', info.message);
});

emitter.clone(designName).then(() => {
  fs.unlink(`${designName}/design.json`, (err) => {
    if(err) throw new err;

    console.log('');
    console.log('\x1b[32mDesign successfully downloaded! 🥳');
  });
});

