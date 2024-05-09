import { expect, describe, test } from "vitest";
import {
  fibonacciSeriesAtIndices,
  convertTemperaturesToFahrenheit,
  createCutOff,
  replaceCompanyNames,
  updatePrices,
  filterItemsWithoutUG,
  filterItemsByPrefixOrSuffix,
  addTenAndFilterDivisibleByFour,
  extractEmailAddresses,
  extractAges,
  filterFoodItems,
} from "./assignment";

describe("Assignments making use of map,filter and reduce", () => {
  /**
   * Tests the functionality of `fibonacciSeriesAtIndices` function.
   */
  test("Transform the indices into the actual fibonacci numbers", () => {
    const numbers = [2, 1, 5, 7];
    const result = fibonacciSeriesAtIndices(numbers);
    expect(result).toEqual([1, 1, 5, 13]);
  });
  /**
   * Tests the functionality of `convertTemperaturesToFahrenheit` function.
   */
  test("Converting average temperature into fahrenite", () => {
    const poiArray = [
      {
        placeName: "Paris",
        famousFor: "Eiffel Tower",
        averageTemperature: 15.6,
      },
      {
        placeName: "New York City",
        famousFor: "Statue of Liberty",
        averageTemperature: 12.8,
      },
      {
        placeName: "Tokyo",
        famousFor: "Sushi",
        averageTemperature: 16.2,
      },
      {
        placeName: "Rio de Janeiro",
        famousFor: "Carnival",
        averageTemperature: 24.5,
      },
      {
        placeName: "Sydney",
        famousFor: "Sydney Opera House",
        averageTemperature: 21.3,
      },
      {
        placeName: "Cairo",
        famousFor: "Pyramids of Giza",
        averageTemperature: 25.7,
      },
      {
        placeName: "Rome",
        famousFor: "Colosseum",
        averageTemperature: 19.8,
      },
      {
        placeName: "Cape Town",
        famousFor: "Table Mountain",
        averageTemperature: 17.2,
      },
      {
        placeName: "Bali",
        famousFor: "Beaches",
        averageTemperature: 27.9,
      },
      {
        placeName: "Machu Picchu",
        famousFor: "Inca Ruins",
        averageTemperature: 14.1,
      },
    ];
    expect(convertTemperaturesToFahrenheit(poiArray)).toEqual([
      60, 55, 61, 76, 70, 78, 67, 62, 82, 57,
    ]);
  });
  /**
   * Tests the functionality of `createCutOff` function.
   */
  test("Check whether a given number is within a particular cutoff", () => {
    const cutOff100 = createCutOff(100);
    expect(cutOff100(89)).toEqual(true);
    expect(cutOff100(189)).toEqual(false);
  });
  /**
   * Tests the functionality of `replaceCompanyNames` function.
   */
  test("Replace occurrences of 'CraftCode' with 'CodeCraft' in sentences", () => {
    const sentences = [
      "CraftCode is a nice company",
      "We love CraftCode",
      "We are working in CraftCode",
      "Where is CraftCode?",
    ];
    expect(replaceCompanyNames(sentences)).toEqual([
      "CodeCraft is a nice company",
      "We love CodeCraft",
      "We are working in CodeCraft",
      "Where is CodeCraft?",
    ]);
  });
  /**
   * Tests the functionality of `updatePrices` function.
   */
  test("Update prices of fruits excluding those with '4' in the quantity", () => {
    const purchaseList = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`;
    expect(updatePrices(purchaseList)).toMatch(/mango 60\nonion 41\nwater 20/);
  });
  /**
   * Tests the functionality of `filterItemsWithoutUG` function.
   */
  test("Filter items excluding those containing 'u' or 'g'", () => {
    const itemList = ["browl", "faaast", "energy", "stand", "eat", "lunch"];
    expect(filterItemsWithoutUG(itemList)).toEqual([
      "browl",
      "faaast",
      "stand",
      "eat",
    ]);
  });
  /**
   * Tests the functionality of `filterItemsByPrefixOrSuffix` function.
   */
  test("Filter items starting with 'mang' or ending with 'fy'", () => {
    const itemList = [
      "mangalore",
      "semangin",
      "2 lonely",
      "verify",
      "rectify",
      "mangala",
      "notifyy",
    ];
    expect(filterItemsByPrefixOrSuffix(itemList)).toEqual([
      "mangalore",
      "verify",
      "rectify",
      "mangala",
    ]);
  });
  /**
   * Tests the functionality of `addTenAndFilterDivisibleByFour` function.
   */
  test("Add 10 to each number and filter out those divisible by 4", () => {
    const numberList = [34, 45, 2, 53, 84, 542, 31, 23];
    expect(addTenAndFilterDivisibleByFour(numberList)).toEqual([44, 12, 552]);
  });
  /**
   * Test case for extracting valid email addresses from strings.
   */
  test("Extract valid email addresses from strings", () => {
    const emailStrings = [
      "34, brighten street, email: BS@sft.com",
      "Behind hotel paragon, rode street, micHel@sun.it",
      "ulef court, cown street, email:cown@street",
      "CodeCraft",
    ];
    expect(extractEmailAddresses(emailStrings)).toEqual([
      "BS@sft.com",
      "micHel@sun.it",
    ]);
  });
  /**
   * Test case for extracting ages from a list of people.
   */
  test("Extract ages from list of people", () => {
    const personList = [
      {
        name: "John",
        age: 13,
      },
      {
        name: "Mark",
        age: 56,
      },
      {
        name: "Rachel",
        age: 45,
      },
      {
        name: "Nate",
        age: 67,
      },
      {
        name: "Jeniffer",
        age: 65,
      },
    ];
    expect(extractAges(personList)).toEqual(["13", "56", "45", "67", "65"]);
  });
  /**
   * Test case for for filtering out food items
   */
  test("Filter foods without sugar", () => {
    const foodList = [
      { idli: ["rice", "urad", "oil", "cashew", "water"] },
      { chapathi: ["atta", "gluten", "water", "oil", "sugar"] },
      { pizza: ["maida", "sugar", "oil", "chiili", "flakes", "sause"] },
      { "paneer masala": ["paneer", "onion", "tomato", "garlic", "oil"] },
    ];
    /**
     * Test case for filtering out food items without sugar.
     */
    const filterFoods = filterFoodItems();
    expect(filterFoods.filterFoodsWithoutSugar(foodList)).toEqual([
      "idli",
      "paneer masala",
    ]);
    /**
     * Test case for filtering out food items without Oil and Chili.
     */
    expect(filterFoods.filterFoodsWithChiliAndOil(foodList)).toEqual(["pizza"]);
    /**
     * Test case for classifying food items based on sugar content
     */
    expect(filterFoods.classifyFoodsBySugarContent(foodList)).toEqual([
      "idli:safe",
      "chapathi:unsafe",
      "pizza:unsafe",
      "paneer masala:safe",
    ]);
  });
});
