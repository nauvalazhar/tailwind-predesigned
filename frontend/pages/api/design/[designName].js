const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const { recursive } = require('@helpers');

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

  const designTree = await fs.promises.readdir(pathtofile);
  const tree = recursive({
    files: designTree,
    root: pathtofile,
    base: pathtofile,
    publicpath: path.join('public', designDir),
  });

  const json = await fse.readJson(filepath);
  const packageJson = await fse.readJson(path.join(pathtofile, 'package.json'));
  const data = { ...json, packageJson, tree };

  const preview = `${designDir}/index.html`;
  return res.status(200).json({ data: { ...data, preview } });
}
