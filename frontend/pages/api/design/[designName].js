const fse = require('fs-extra');
const path = require('path');

export default async function handler(req, res) {
  const {
    query: { designName },
  } = req;
  const designDir = `/designs/html/${designName}`;
  const filepath = path.join('public', designDir, 'design.json');
  const pathExists = await fse.pathExists(filepath);

  if (!pathExists) {
    return res.status(404).end();
  }

  const data = await fse.readJson(filepath);

  const preview = `${designDir}/index.html`;
  return res.status(200).json({ data: { ...data, preview } });
}
