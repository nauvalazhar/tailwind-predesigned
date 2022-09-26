const { glob, mapFiles } = require('../../utils/helpers');

export default async function handler(req, res) {
  const designsJsons = await glob('data/*');
  const data = mapFiles({
    files: designsJsons,
    root: 'data',
  });

  return res.status(200).json({ data });
}
