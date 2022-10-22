import { recursive, publicDesignPath, designPath } from '@helpers';
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';

export default async function handler(req, res) {
  const {
    query: { designName },
  } = req;
  const pathtofile = path.join(process.cwd(), publicDesignPath(designName));
  const filepath = path.join(pathtofile, 'design.json');

  if (!fs.existsSync(filepath)) {
    return res.status(404).end();
  }

  const designTree = await fs.promises.readdir(pathtofile);
  const tree = recursive({
    files: designTree,
    root: pathtofile,
    base: pathtofile,
    publicPath: designPath(designName),
  });

  const json = await fse.readJson(filepath);
  const packageJson = await fse.readJson(path.join(pathtofile, 'package.json'));
  const data = { ...json, packageJson, tree };

  const preview = designPath(designName, 'index.html');
  return res.status(200).json({ data: { ...data, preview } });
}
