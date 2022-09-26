const fs = require('fs');
const fse = require('fs-extra');
const { serializeFilePath } = require('@helpers');

export default async function handler(req, res) {
  const {
    query: { designName, file='index.html' },
  } = req;
  const filepath = serializeFilePath(`public/designs/html/${designName}/${file}`);
  const fileExists = await fse.pathExists(filepath);

  if(!fileExists || !file) {
    return res.status(404).end();
  }

  const code = await fs.promises.readFile(
    filepath,
    'utf8'
  );

  return res.status(200).json({ code });
}

