const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

export default async function handler(req, res) {
  const {
    query: { designName },
  } = req;
  const designDir = `/designs/html/${designName}`;
  const filepath = path.join(process.cwd(), 'public', designDir, 'design.json');

  if (!fs.existsSync(filepath)) {
    return res.status(404).end();
  }

  const data = await fse.readJson(filepath);

  const preview = `${designDir}/index.html`;
  return res.status(200).json({ data: { ...data, preview } });
}
