const { mapFiles } = require('@helpers');
const path = require('path');
const { promises: fs } = require('fs');

export default async function handler(req, res) {
  const jsonDir = path.join(process.cwd(), 'json');
  const designsJsons = await fs.readdir(jsonDir);
  const data = mapFiles({
    files: designsJsons,
    basepath: jsonDir,
    root: jsonDir,
  });

  return res.status(200).json({ data });
}
