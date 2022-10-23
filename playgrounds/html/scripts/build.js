const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const compiler = require('./compile');
const glob = require('glob');
const log = require('./log');

/**
 * 
 * Builder
 *
 * @param {Object} options
 * @param {String} options.designsDir - path to the designs/ directory
 * @param {String} options.coreDir - path to the core/ directory
 * @param {String} options.designOut - path to the out/{designName} directory
 * @param {String} options.designSrc - path to the designs/{designName} directory
 * @param {String} options.designName - name of the design directory to compile
 * @param {String} options.baseurl - base url of the application
 * @return {Void}
 *
 */
module.exports = async function(options) {
  const { designsDir, coreDir, designOut, designSrc, designName, baseurl } = options;

  // display time taken to compile
  const start = Date.now();

  log('build', `Building design: ${designName}`);

  // regenerate the out/{designName} directory
  log('build', `Cleaning ${designOut}`);
  await fse.remove(designOut);
  await fse.ensureDir(designOut);

  // copy images, js directories if not empty
  log('build', `Copying images, js directories`);
  const images = glob.sync(path.join(designSrc, 'images', '**/*'));
  const js = glob.sync(path.join(designSrc, 'js', '**/*'));
  if (images.length) {
    await fse.copy(path.join(designSrc, 'images'), path.join(designOut, 'images'));
  }

  if (js.length) {
    await fse.copy(path.join(designSrc, 'js'), path.join(designOut, 'js'));
  }

  // read package.json and push the details to the designs.json
  const package = await fs.promises.readFile(path.join(designSrc, 'package.json'), 'utf8');
  const packageJson = JSON.parse(package);
  const { tailwind_predesigned, ...newPackageJson } = packageJson;

  const designPath = `${tailwind_predesigned.type}/${tailwind_predesigned.category}/${packageJson.name}`;
  const designJson = {
    name: packageJson.name,
    description: packageJson.description,
    path: designPath,
    filepath: `${designPath}.json`,
    ...tailwind_predesigned,
  }

  const jsonOptions = { spaces: 2 }
  await fse.writeJson(path.join(designOut, 'package.json'), newPackageJson, jsonOptions);
  await fse.writeJson(path.join(designOut, 'design.json'), designJson, jsonOptions);

  // init the compiler
  const compile = compiler({ designSrc, coreDir, designName, vars: { baseurl } });

  // get all the edge files
  log('build', `Compiling edge files`);
  const views = glob.sync(path.join(designSrc, '**/*.edge'), {
    ignore: [
      path.join(designSrc, 'components/*.edge'),
    ]
  });

  // compile each view
  for (const view of views) {
    // get the correct view path
    // remove absolute path
    // start compiling
    const viewpath = view.replace(`${designSrc}/`, '');
    const result = await compile(viewpath);

    // replace the .edge extension with .html
    // write the view to the out directory
    const outpath = path.join(designOut, viewpath.replace(/\.edge$/, '.html'));
    log('build', `Writing ${outpath}`);
    await fse.outputFile(outpath, result);
  }

  // display time taken to compile
  const end = Date.now();
  log('build', `Compiled ${views.length} views in ${(end - start) / 1000} seconds`);
}
