import { afterEach, beforeEach, describe, test, expect, vi } from "vitest";

import { purchase, isPurchaseValid } from "./mocking";

describe("Purchase module tests", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  test("Purchase only within buisness hours", () => {
    const date = new Date(2000, 1, 1, 13);
    vi.setSystemTime(date);
    expect(purchase()).toEqual({ message: "Success" });
  });

  test("Purchase outside should not suceed", () => {
    const date = new Date(2000, 1, 1, 2);
    vi.setSystemTime(date);
    expect(purchase()).toEqual({ message: "Error" });
  });

  test("Purchase using isPurchaseValid", () => {
    const date = new Date(2000, 1, 1, 13);
    expect(isPurchaseValid(date)).toEqual({ message: "Success" });
  });

  test("Purchase using isPurchaseValid outside 9-5", () => {
    const date = new Date(2000, 1, 1, 2);
    expect(isPurchaseValid(date)).toEqual({ message: "Error" });
  });
});
