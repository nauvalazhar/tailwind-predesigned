const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const log = require('./log');

module.exports = async function(options) {
  const { feDataDir, feDesignsDir, designOut, designName } = options;

  // check if designOut exists
  // if not, throw error
  if (!fs.existsSync(designOut)) {
    log('push', `${designOut} not found`, 'error');
    log('info', 'Make sure you have run the build command first.');

    return;
  }
 
  // ensure feDesignsDir exists
  log('push', `Ensure ${feDesignsDir} exists`);
  await fse.ensureDir(feDesignsDir);

  // read design.json
  const designJson = await fse.readJson(path.join(designOut, 'design.json'));

  // ensure feDataDir/[type]/[category] exists
  const feDesignData = path.join(feDataDir, designJson.type, designJson.category);
  await fse.ensureDir(feDesignData);

  const feDesignsOut = path.join(feDesignsDir, designName);

  // clean feDesignsOut
  log('push', `Clean ${feDesignsOut}`);
  await fse.remove(feDesignsOut);

  // copy metadata to data directory
  log('push', `Pushed design.json to ${feDataDir}/${designName}.json`);
  await fse.copy(path.join(designOut, 'design.json'), path.join(feDesignData, `${designName}.json`));

  // copy designOut to feDesignsDir
  await fse.copy(designOut, feDesignsOut);

  log('push', `Pushed ${options.designName} to ${feDesignsDir}`);
}
