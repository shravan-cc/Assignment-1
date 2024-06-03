import { describe, expect, test } from "vitest";

import {
  sizeOfFileAtPathSync,
  sizeOfFileAtPathASync,
  getAllFilesSync,
  getAllFilesASync,
  promisifiedStat,
  promisifiedReaddir,
  sizeOfFileAtPathASyncUsingPromise,
  fetchPersonName,
  fetchPersonNamesByIds,
} from "./file-size";

describe("Assignment questions test on asynchronous programming", () => {
  /**
   * Test case for obtaining file size synchronously.
   */
  test("Test case for obtaining file size in synchronous", () => {
    expect(
      sizeOfFileAtPathSync("/mnt/c/Users/shravantr/Desktop/filesize/hello.txt")
    ).toBe(5);
    expect(
      sizeOfFileAtPathSync("/mnt/c/Users/shravantr/Desktop/filesize")
    ).toBe(7);
  });
  /**
   * Test case for obtaining file size asynchronously.
   */
  test("Test case for obtaining file size in asynchronous", () => {
    sizeOfFileAtPathASync(
      "/mnt/c/Users/shravantr/Desktop/filesize/hello.txt",
      (size, err) => {
        if (err) {
          expect(size).toBe(null);
        }
        expect(size).toBe(5);
      }
    );

    sizeOfFileAtPathASync(
      "/mnt/c/Users/shravantr/Desktop/filesize",
      (size, err) => {
        if (err) {
          expect(size).toBe(null);
        }
        expect(size).toBe(7);
      }
    );
  });
  /**
   * Test case to get an array of all files in a directory synchronously.
   */
  test("Test case to get array of all files in directory in synchronous", () => {
    expect(getAllFilesSync("/mnt/c/Users/shravantr/Desktop/filesize")).toEqual([
      "/mnt/c/Users/shravantr/Desktop/filesize/hello.txt",
      "/mnt/c/Users/shravantr/Desktop/filesize/ss.txt",
    ]);

    expect(
      getAllFilesSync("/mnt/c/Users/shravantr/Desktop/filesize/hello.txt")
    ).toEqual(["/mnt/c/Users/shravantr/Desktop/filesize/hello.txt"]);
  });
  /**
   * Test case to get an array of all files in a directory asynchronously (single file).
   */
  test("Test case to get array of all files in directory in asynchronous (single file)", () => {
    getAllFilesASync(
      "/mnt/c/Users/shravantr/Desktop/filesize/hello.txt",
      (fileArray, err) => {
        if (err) {
          expect(fileArray).toBe(null);
        }
        expect(fileArray).toEqual([
          "/mnt/c/Users/shravantr/Desktop/filesize/hello.txt",
        ]);
      }
    );
  });
  /**
   * Test case to get an array of all files in a directory asynchronously.
   */
  test("Test case to get array of all files in directory in asynchronous", () => {
    getAllFilesASync(
      "/mnt/c/Users/shravantr/Desktop/filesize",
      (fileArray, err) => {
        if (err) {
          expect(fileArray).toBe(null);
        }
        expect(fileArray).toEqual([
          "/mnt/c/Users/shravantr/Desktop/filesize/hello.txt",
          "/mnt/c/Users/shravantr/Desktop/filesize/ss.txt",
        ]);
      }
    );
  });
  /**
   * Test case for implementing fs.stat and fs.readdir using promise
   */
  test("Test case for implementing fs.stat and fs.readdir using promise", () => {
    /**
     * Test case for asyncStat with a file path
     */
    promisifiedStat("/mnt/c/Users/shravantr/Desktop/filesize/hello.txt")
      .then((stat) => {
        expect(stat.size).toBe(5);
      })
      .catch((err) => {
        expect(err).toBe(null);
      });
    /**
     * Test case for asyncStat with a directory path
     */
    promisifiedReaddir("/mnt/c/Users/shravantr/Desktop/filesize")
      .then((file) => {
        expect(file).toEqual(["hello.txt", "ss.txt"]);
      })
      .catch((err) => {
        expect(err).toBe(null);
      });
  });
  /**
   * Test case for getting size of file using Promise API
   */
  test("Test case for getting size of file using Promise API", () => {
    /**
     * Test case when there is single file
     */
    sizeOfFileAtPathASyncUsingPromise(
      "/mnt/c/Users/shravantr/Desktop/filesize/hello.txt"
    )
      .then((size) => {
        expect(size).toBe(5);
      })
      .catch((err) => {
        expect(err).toBe(null);
      });
    /**
     * Test case when there is directory
     */
    return sizeOfFileAtPathASyncUsingPromise(
      "/mnt/c/Users/shravantr/Desktop/filesize"
    )
      .then((size) => {
        expect(size).toBe(7);
      })
      .catch((err) => {
        expect(err).toBe(null);
      });
  });
  /**
   * Test case to fetch person with specific id
   */
  test("Test case to fetch person with specific id", async () => {
    try {
      const specificPerson = await fetchPersonName(3);
      expect(specificPerson).toEqual("R2-D2");
    } catch (err) {
      expect(err).toBe(null);
    }
  });
  /**
   * Test case to fetch person names sequentially
   */
  test("Test case to fetch person names sequentially", async () => {
    try {
      const sequentialPersonNames = await fetchPersonNamesByIds();
      expect(sequentialPersonNames).toEqual([
        "Luke Skywalker",
        "C-3PO",
        "R2-D2",
      ]);
    } catch (err) {
      expect(err).toBe(null);
    }
  });
});
