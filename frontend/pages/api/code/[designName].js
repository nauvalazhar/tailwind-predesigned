import { determineLanguage } from '@helpers';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const {
    query: { designName, file = 'index.html' },
  } = req;

  const filepath = path.join(
    process.cwd(),
    `public/designs/html/${designName}/${file}`
  );

  if (!fs.existsSync(filepath) || !file) {
    return res.status(404).end();
  }

  const code = await fs.promises.readFile(filepath, 'utf8');
  const language = determineLanguage(file);

  return res.status(200).json({ code, language });
}
