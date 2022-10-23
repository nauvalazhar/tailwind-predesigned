import { publicDesignPath, fileExt, isCodes } from '@helpers';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const {
    query: { designName, file = 'index.html' },
  } = req;
  const filepath = path.join(process.cwd(), publicDesignPath(designName, file));

  if (!fs.existsSync(filepath) || !file) {
    return res.status(404).json({ message: 'No source found' });
  }

  // only codes are allowed
  if (!isCodes(fileExt(file))) {
    return res
      .status(200)
      .json({ message: 'Source found but no content given' });
  }

  const data = await fs.promises.readFile(filepath, 'utf8');

  return res.status(200).json({ data, message: 'Source code content' });
}
