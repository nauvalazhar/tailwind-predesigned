const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

export default async function handler(req, res) {
  const {
    query: { designName },
  } = req;
  const designDir = `/designs/html/${designName}`;
  const pathtofile = path.join(process.cwd(), 'public', designDir);
  const filepath = path.join(pathtofile, 'design.json');

  if (!fs.existsSync(filepath)) {
    return res.status(404).end();
  }

  const json = await fse.readJson(filepath);
  const packageJson = await fse.readJson(path.join(pathtofile, 'package.json'));
  const data = { ...json, packageJson };

  const preview = `${designDir}/index.html`;
  return res.status(200).json({ data: { ...data, preview } });
}
