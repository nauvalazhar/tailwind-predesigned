import { publicDesignPath } from '@helpers';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const {
    query: { designName, file = 'index.html' },
  } = req;

  const filepath = path.join(process.cwd(), publicDesignPath(designName, file));

  if (!fs.existsSync(filepath) || !file) {
    return res.status(404).end();
  }

  const code = await fs.promises.readFile(filepath, 'utf8');

  return res.status(200).json({ code });
}
