import { describe, expect, test } from "vitest";

import {
  sizeOfFileAtPathSync,
  sizeOfFileAtPathASync,
  getAllFilesSync,
  getAllFilesASync,
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
});
