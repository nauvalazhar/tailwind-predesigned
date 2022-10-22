import { recursive } from '@helpers';
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';

export default async function handler(req, res) {
  const {
    query: { designName },
  } = req;
  // cannot use publicDesignPath and designPath helper on vercel and idk why
  const designPath = path.join('designs/html', designName);
  const publicDesignPath = path.join('public', designPath);
  const rootDesignPath = path.join(process.cwd(), publicDesignPath);
  const filepath = path.join(rootDesignPath, 'design.json');

  if (!fs.existsSync(filepath)) {
    return res.status(404).end();
  }

  const designTree = await fs.promises.readdir(rootDesignPath);
  const tree = recursive({
    files: designTree,
    root: rootDesignPath,
    base: rootDesignPath,
    staticPath: path.join('/', designPath),
  });

  const json = await fse.readJson(filepath);
  const packageJson = await fse.readJson(
    path.join(rootDesignPath, 'package.json')
  );
  const data = { ...json, packageJson, tree };

  const preview = path.join('/', designPath);
  return res.status(200).json({ data: { ...data, preview } });
}
