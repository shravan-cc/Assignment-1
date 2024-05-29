import fs from "fs";

/**
 * Synchronously calculates the size of a file or directory at the given path.
 * If the path is a directory, it recursively calculates the total size of all files within the directory.
 *
 * @param {string} path - The path of the file or directory.
 * @returns {number|undefined} - The size in bytes if it's a file or directory, undefined otherwise.
 */
export function sizeOfFileAtPathSync(path) {
  const stats = fs.statSync(path);
  if (stats.isFile()) return stats.size;
  if (stats.isDirectory()) {
    const fileNames = fs.readdirSync(path);
    const size = fileNames.reduce(
      (acc, fileName) => acc + sizeOfFileAtPathSync(`${path}/${fileName}`),
      0
    );
    return size;
  }
  return undefined;
}

/**
 * Asynchronously calculates the size of a file or directory at the given path.
 * If the path is a directory, it recursively calculates the total size of all files within the directory.
 *
 * @param {string} path - The path of the file or directory.
 * @param {function} callback - The callback function that receives the size and any error.
 */
export function sizeOfFileAtPathASync(path, callback) {
  fs.stat(path, (err, stats) => {
    if (err) {
      callback(0, err);
      return;
    }
    if (stats.isFile()) {
      callback(stats.size);
    } else if (stats.isDirectory()) {
      fs.readdir(path, (readDirErr, files) => {
        if (readDirErr) {
          callback(0, readDirErr);
        } else {
          let size = 0;
          let fileCount = 0;

          const handleFileSize = (sizeIn, fileErr) => {
            fileCount += 1;
            if (fileErr) {
              callback(0, fileErr);
            } else {
              size += sizeIn;
            }
            if (fileCount === files.length) {
              callback(size);
            }
          };

          files.forEach((file) => {
            const pathOfFile = `${path}/${file}`;
            sizeOfFileAtPathASync(pathOfFile, handleFileSize);
          });
        }
      });
    }
  });
}

/**
 * Synchronously retrieves all file paths within a directory, including subdirectories.
 *
 * @param {string} path - The path of the directory.
 * @returns {string[]|undefined} - An array of file paths if the path is a directory, undefined otherwise.
 */
export function getAllFilesSync(path) {
  const stats = fs.statSync(path);
  if (stats.isFile()) return [path];
  if (stats.isDirectory()) {
    const fileNames = fs.readdirSync(path);
    return fileNames.reduce(
      (acc, fileName) => acc.concat(getAllFilesSync(`${path}/${fileName}`)),
      []
    );
  }
  return undefined;
}

/**
 * Asynchronously retrieves all file paths within a directory, including subdirectories.
 *
 * @param {string} path - The path of the directory.
 * @param {function} callback - The callback function that receives the array of file paths and any error.
 */
export function getAllFilesASync(path, callback) {
  fs.stat(path, (err, stats) => {
    if (err) {
      callback(0, err);
      return;
    }
    if (stats.isFile()) callback([path], 0);
    else if (stats.isDirectory()) {
      fs.readdir(path, (readDirErr, files) => {
        if (readDirErr) {
          callback(0, readDirErr);
        } else {
          const fileArray = [];
          let pending = files.length;
          if (pending === 0) {
            callback(null, []);
            return;
          }
          const handleFile = (filesArray, fileErr) => {
            if (fileErr) {
              callback(0, fileErr);
            }
            fileArray.push(...filesArray);
            pending -= 1;
            if (pending === 0) {
              callback(fileArray);
            }
          };
          files.forEach((file) => {
            const pathOfFile = `${path}/${file}`;
            getAllFilesASync(pathOfFile, handleFile);
          });
        }
      });
    }
  });
}
