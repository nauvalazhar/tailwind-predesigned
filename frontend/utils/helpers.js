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
  const extension = filename.match(/.*\.(.*)$/);

  return extension[1];
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
    const itemName = isDir ? `${filePathSafe}/` : filePathSafe;
    const displayName = titlable(fileParse.base);
    const { name } = fileParse;
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
