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
/**
 * Asynchronously retrieves the stats of a file or directory.
 *
 * @param {string} path - The path to the file or directory.
 * @returns {Promise<fs.Stats>} A promise that resolves with the stats of the file or directory.
 */
export function promisifiedStat(path) {
  return new Promise((resolved, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolved(stats);
      }
    });
  });
}
/**
 * Asynchronously reads the contents of a directory.
 *
 * @param {string} path - The path to the directory.
 * @returns {Promise<string[]>} A promise that resolves with an array of filenames in the directory.
 */
export function promisifiedReaddir(path) {
  return new Promise((resolved, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolved(files);
      }
    });
  });
}
/**
 * Asynchronously retrieves the size of a file or directory using promises.
 * If the path is a directory, it calculates the total size of all files recursively.
 *
 * @param {string} path - The path to the file or directory.
 * @returns {Promise<number>} A promise that resolves with the size of the file or directory.
 * @throws {Error} If an error occurs during file operations.
 */
export function sizeOfFileAtPathASyncUsingPromise(path) {
  return promisifiedStat(path)
    .then((stat) => {
      if (stat.isFile()) return stat.size;
      if (stat.isDirectory()) {
        return promisifiedReaddir(path).then((files) => {
          const promiseSizes = files.map((file) =>
            sizeOfFileAtPathASyncUsingPromise(`${path}/${file}`)
          );
          return Promise.all(promiseSizes).then((sizes) =>
            sizes.reduce((acc, size) => acc + size, 0)
          );
        });
      }
      return undefined;
    })
    .catch((err) => {
      throw new Error(`Something went wrong:${err.message}`);
    });
}
/**
 * Asynchronously fetches the name of a person from the Star Wars API based on their ID.
 *
 * @param {number} personId - The ID of the person to fetch.
 * @returns {Promise<string>} A promise that resolves with the name of the person.
 * @throws {Error} If an error occurs during the fetch operation or if the response is invalid.
 */
export async function fetchPersonName(personId) {
  const baseURL = "https://swapi.dev/api/people";
  const url = `${baseURL}/${personId}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("Something went wrong, invalid response");
  }
  const data = await response.json();
  return data.name;
}
/**
 * Asynchronously fetches the names of people from the Star Wars API based on their IDs.
 *
 * @returns {Promise<Array<string>>} A promise that resolves with an array of person names.
 * @throws {Error} If an error occurs during the fetch operation or if the response is invalid.
 */
export async function fetchPersonNamesByIds() {
  const baseURL = "https://swapi.dev/api/people";
  const personIds = [1, 2, 3];
  const personNames = personIds.reduce(async (accPromise, id) => {
    const acc = await accPromise;
    const url = `${baseURL}/${id}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Something went wrong, invalid response");
    }
    const data = await response.json();
    acc.push(data.name);
    return acc;
  }, []);
  return personNames;
}
