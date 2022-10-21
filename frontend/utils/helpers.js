import path from 'path';
import fs from 'fs';

export function compose(...fns) {
  return (x) => fns.reduce((res, fn) => fn(res), x);
}

export function titleCase(str) {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
}

export function dashToSpace(str) {
  return str.replace(/-/g, ' ');
}

export function rmExtension(str) {
  return str.replace(/(\..*)$/g, '');
}

export function titlable(name) {
  return compose(rmExtension, dashToSpace, titleCase)(name);
}

/**
 * Convert file size to human readable format
 *
 * @param {number} bytes
 * @returns {string}
 * @example formatBytes(1024) === '1 KB'
 *
 * @see https://stackoverflow.com/a/14919494/1048340
 */
export function humanFileSize(bytes, si) {
  const thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }
  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

  let u = -1;
  let bytesSize = bytes;
  do {
    bytesSize /= thresh;
    u += 1;
  } while (Math.abs(bytesSize) >= thresh && u < units.length - 1);
  return `${bytesSize.toFixed(1)} ${units[u]}`;
}

export function determineLanguage(filename) {
  const mapping = {
    js: 'javascript',
  };

  const extract = filename.match(/.*\.(.*)$/);
  const extension = extract[1];

  return extension in mapping ? mapping[extension] : extension;
}

export function mapFiles(options) {
  const { files, root, basepath = '' } = options;
  const groups = {};

  files.forEach((file) => {
    const filePath = path.join(basepath, file);
    const fileStat = fs.statSync(filePath);
    const isDir = fileStat.isDirectory();
    const fileParse = path.parse(file);
    const filePathSafe = filePath.replace(`${root}/`, '');
    const { name } = fileParse;
    const designJson = isDir ? {} : JSON.parse(fs.readFileSync(filePath));
    const itemName = isDir ? `${filePathSafe}/` : filePathSafe;
    const displayName = isDir ? titlable(fileParse.base) : designJson.name;

    const fileWithData = {
      displayName,
      name,
      path: filePathSafe,
      dir: isDir,
    };

    const dirWithData = {
      ...fileWithData,
      dir: true,
    };

    groups[itemName] = isDir
      ? {
          ...dirWithData,
          nodes: {
            ...mapFiles({
              files: fs.readdirSync(filePath),
              root,
              basepath: filePath,
            }),
          },
        }
      : { ...fileWithData };
  });

  return groups;
}

export function orderFiles(files) {
  return Object.keys(files)
    .sort((a, b) => {
      if (files[a].dir && !files[b].dir) {
        return -1;
      }
      if (!files[a].dir && files[b].dir) {
        return 1;
      }
      return 0;
    })
    .reduce((acc, key) => {
      const currentFiles = files[key];
      acc[key] = currentFiles.dir
        ? {
            ...currentFiles,
            nodes: orderFiles(currentFiles.nodes),
          }
        : currentFiles;

      return acc;
    }, {});
}

export function recursive({ files, root, base, publicpath }) {
  const tree = {};

  files.forEach((file) => {
    const filepath = `${root}/${file}`;
    const fileStat = fs.statSync(filepath);
    const isDir = fileStat.isDirectory();

    tree[file] = {
      displayName: file,
      path: filepath.split(base)[1].replace(/^\//g, ''),
      public: path.join(publicpath, file),
      dir: isDir,
      language: !isDir ? determineLanguage(file) : null,
      nodes: isDir
        ? recursive({
            files: fs.readdirSync(filepath),
            root: filepath,
            base,
            publicpath,
          })
        : [],
    };
  });

  return orderFiles(tree);
}

/**
 *
 * Serialize file path:
 * - remove leading slash
 *   - remove trailing slash
 *   - remove double slashes
 *   - remove leading dot
 *   - remove trailing dot
 *   - remove double dots
 */
export function serializeFilePath(filePath) {
  return filePath
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .replace(/\/\//g, '/')
    .replace(/^\./, '')
    .replace(/\.$/, '')
    .replace(/\.\./g, '');
}

export function getRandomInt(a, b) {
  const min = Math.ceil(a);
  const max = Math.floor(b);

  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function arrayByInt(n) {
  return [...Array(n).keys()];
}

export function extractAuthor(str) {
  const [, name, url] = /(.*)\((.*)\)/g.exec(str);

  return [name, url];
}

export function npmjsCom(name, version) {
  const ver = version.replace(/^[^0-9]/g, '');

  return `https://npmjs.com/package/${name}/v/${ver}`;
}

export function getQuote() {
  const quotes = [
    'There are only two hard things in Computer Science: cache invalidation and naming things. - Phil Karlton',
    'Make illegal states unrepresentable. - Yaron Minsky',
    'First make the change easy (warning: this might be hard), then make the easy change. - Kent Beck',
    'Simple things should be simple, complex things should be possible. - Alan Kay',
    'Before software can be reusable it first has to be usable. - Ralph Johnson',
    'Simplicity is prerequisite for reliability. - Edsger W. Dijkstra',
    'Premature optimization is the root of all evil. - Donald Knuth',
    'Any problem in computer science can be solved with another level of indirection. - David Wheeler',
    'The best performance improvement is the transition from the nonworking state to the working state. - J. Osterhout',
    'I can’t be as confident about computer science as I can about biology. Biology easily has 500 years of exciting problems to work on. It’s at that level. - Donald Knuth',
    'A computer lets you make more mistakes faster than any other invention with the possible exceptions of handguns and Tequila. - Mitch Ratcliffe',
  ];

  return quotes[getRandomInt(0, quotes.length - 1)];
}
