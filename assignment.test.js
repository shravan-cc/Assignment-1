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
  secondLargestNumber,
  someChecker,
  quoteAnalyzer,
  employeeDataProcessor,
  classifyNutrition,
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
      "bs@sft.com",
      "michel@sun.it",
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
  /**
   * Test case for finding the second largest number in an array using different methods.
   */
  test("Find the second largest number in an array using different methods", () => {
    const numbers = [13, 4, 12, 7, 1];
    const secondLargest = secondLargestNumber();
    expect(secondLargest.findSecondLargestNumber(numbers)).toEqual(12);
    expect(secondLargest.findSecondLargestNumberUsingReduce(numbers)).toEqual(
      12
    );
  });
  /**
   * Test case for checking if some elements in an array satisfy a given condition using different methods.
   */
  test("Check if some items satisfy the predicate function", () => {
    const items = [2, 5, 8, 10, 7];
    const predicate = (num) => num % 2 === 0;
    const someCheckerInstance = someChecker();
    expect(someCheckerInstance.some(items, predicate)).toEqual(true);
    expect(someCheckerInstance.someReduce(items, predicate)).toEqual(true);
  });
  /**
   * Test case for analyzing quotes data.
   */
  test("Additional Assignment Question-13", () => {
    const authors = [
      {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
      },
      {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra",
      },
      {
        text: "To invent, you need a good imagination and a pile of junk",
        author: "Thomas Edison",
      },
      {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Yogi Berra",
      },
      {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer",
      },
      {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu",
      },
      {
        text: "Nothing happens unless first we dream.",
        author: "Byron Pulsifer",
      },
      {
        text: "Well begun is half done.",
        author: "Aristotle",
      },
      {
        text: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra",
      },
      {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster",
      },
      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
      },
      {
        text: "What you give is what you get.",
        author: "Byron Pulsifer",
      },
      {
        text: "We can only learn to love by loving.",
        author: "Lao Tzu",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
    ];
    const quoteAnalyzerInstance = quoteAnalyzer();
    /* Expected grouped quotes */
    expect(quoteAnalyzerInstance.groupQuotesByAuthor(authors)).toEqual({
      "Thomas Edison": [
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "To invent, you need a good imagination and a pile of junk",
      ],
      "Yogi Berra": [
        "You can observe a lot just by watching.",
        "Difficulties increase the nearer we get to the goal.",
        "Life is a learning experience, only if you learn.",
      ],
      "Byron Pulsifer": [
        "Fate is in your hands and no one elses",
        "Nothing happens unless first we dream.",
        "What you give is what you get.",
      ],
      "Lao Tzu": [
        "Be the chief but never the lord.",
        "We can only learn to love by loving.",
      ],
      Aristotle: ["Well begun is half done."],
      "Margaret Sangster": ["Self-complacency is fatal to progress."],
      Buddha: [
        "Peace comes from within. Do not seek it without.",
        "You'll see it when you believe it.",
      ],
      "Karen Clark": ["Life is change. Growth is optional. Choose wisely."],
    });
    /* Expected quotes containing the word "Life" */
    expect(
      quoteAnalyzerInstance.getQuotesContainingWord("Life", authors)
    ).toEqual([
      "Life is a learning experience, only if you learn.",
      "Life is change. Growth is optional. Choose wisely.",
    ]);
    /* Expected extracted quotes */
    expect(quoteAnalyzerInstance.extractQuotes(authors)).toEqual([
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "You can observe a lot just by watching.",
      "To invent, you need a good imagination and a pile of junk",
      "Difficulties increase the nearer we get to the goal.",
      "Fate is in your hands and no one elses",
      "Be the chief but never the lord.",
      "Nothing happens unless first we dream.",
      "Well begun is half done.",
      "Life is a learning experience, only if you learn.",
      "Self-complacency is fatal to progress.",
      "Peace comes from within. Do not seek it without.",
      "What you give is what you get.",
      "We can only learn to love by loving.",
      "Life is change. Growth is optional. Choose wisely.",
      "You'll see it when you believe it.",
    ]);
    /* Expected unique authors */
    expect(quoteAnalyzerInstance.extractUniqueAuthors(authors)).toEqual([
      "Thomas Edison",
      "Yogi Berra",
      "Byron Pulsifer",
      "Lao Tzu",
      "Aristotle",
      "Margaret Sangster",
      "Buddha",
      "Karen Clark",
    ]);
  });
  /**
   * Test case for processing employee data.
   */
  test("Processing Employee Data", () => {
    const employees = [
      {
        firstName: "Molly",
        lastName: "Rojas",
        age: 38,
        email: "mollyrojas@plasmox.com",
        salary: 3065,
      },
      {
        firstName: "Marguerite",
        lastName: "Santiago",
        age: 27,
        email: "margueritesantiago@plasmox.com",
        salary: 2796,
      },
      {
        firstName: "Evelyn",
        lastName: "Oneil",
        age: 26,
        email: "evelynoneil@plasmox.com",
        salary: 3947,
      },
      {
        firstName: "Consuelo",
        lastName: "Case",
        age: 23,
        email: "consuelocase@plasmox.com",
        salary: 2819,
      },
      {
        firstName: "Earline",
        lastName: "Bush",
        age: 29,
        email: "earlinebush@plasmox.com",
        salary: 3494,
      },
      {
        firstName: "Sanford",
        lastName: "Hurley",
        age: 26,
        email: "sanfordhurley@plasmox.com",
        salary: 3068,
      },
      {
        firstName: "Todd",
        lastName: "Gomez",
        age: 33,
        email: "toddgomez@plasmox.com",
        salary: 3906,
      },
    ];
    const dataProcessor = employeeDataProcessor();
    expect(dataProcessor.calculateTotalSalaryUnderAge30(employees)).toEqual(
      16124
    );
    expect(dataProcessor.getFullNames(employees)).toEqual([
      "Molly Rojas",
      "Marguerite Santiago",
      "Evelyn Oneil",
      "Consuelo Case",
      "Earline Bush",
      "Sanford Hurley",
      "Todd Gomez",
    ]);
    expect(dataProcessor.getEmailList(employees)).toEqual(
      "mollyrojas@plasmox.com,margueritesantiago@plasmox.com,evelynoneil@plasmox.com,consuelocase@plasmox.com,earlinebush@plasmox.com,sanfordhurley@plasmox.com,toddgomez@plasmox.com"
    );
  });
  /**
   * Test case for nutrition classification.
   */
  test("Nutrition classification", () => {
    const nutritionalData = [
      {
        name: "Banana",
        type: "fruit",
        treats: [
          "constipation",
          "vitamin deficiency",
          "skin issues",
          "sleep problems",
        ],
        nutritions: {
          protein: 8,
          carbs: 40,
          sugar: 30,
          vitamins: 45,
        },
      },
      {
        name: "Badam",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "sugar"],
        nutritions: {
          protein: 18,
          carbs: 20,
          sugar: 20,
          vitamins: 65,
        },
      },
      {
        name: "Cashew",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: {
          protein: 22,
          carbs: 22,
          vitamins: 60,
        },
      },
      {
        name: "Wallnut",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: {
          protein: 33,
          carbs: 26,
          vitamins: 64,
        },
      },
      {
        name: "Apple",
        type: "fruit",
        treats: ["heart problems", "skin issues", "bone issues", "migraine"],
        nutritions: {
          protein: 22,
          carbs: 22,
          vitamins: 60,
        },
      },
    ];
    const nutritionClassifier = classifyNutrition();
    /**
     * Test case for finding out the most domination nutrition
     */
    expect(
      nutritionClassifier.extractDominantNutrition(nutritionalData)
    ).toEqual({
      protein: "nut",
      carbs: "fruit",
      sugar: "fruit",
      vitamins: "nut",
    });
    /**
     * Test case for extracting unique nutritions
     */
    expect(
      nutritionClassifier.extractUniqueNutritionKeys(nutritionalData)
    ).toEqual(["protein", "carbs", "sugar", "vitamins"]);
    /**
     * Test case for extracting unique health conditions from fruits
     */
    expect(
      nutritionClassifier.extractUniqueHealthConditionsByFruit(nutritionalData)
    ).toEqual([
      "constipation",
      "vitamin deficiency",
      "skin issues",
      "sleep problems",
      "heart problems",
      "bone issues",
      "migraine",
    ]);
    /**
     * Test case for extracting common health conditions in nut
     */
    expect(
      nutritionClassifier.extractCommonHealthConditions(nutritionalData)
    ).toEqual(["bp", "protein deficiency", "skin issues"]);
    /**
     * Test case for calculating total nutrition value in particular fruit or not
     */
    expect(
      nutritionClassifier.calculateTotalNutritions(nutritionalData)
    ).toEqual([
      {
        name: "Banana",
        type: "fruit",
        treats: [
          "constipation",
          "vitamin deficiency",
          "skin issues",
          "sleep problems",
        ],
        nutritions: { protein: 8, carbs: 40, sugar: 30, vitamins: 45 },
        totalNutritions: 123,
      },
      {
        name: "Badam",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "sugar"],
        nutritions: { protein: 18, carbs: 20, sugar: 20, vitamins: 65 },
        totalNutritions: 123,
      },
      {
        name: "Cashew",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
        totalNutritions: 104,
      },
      {
        name: "Wallnut",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 33, carbs: 26, vitamins: 64 },
        totalNutritions: 123,
      },
      {
        name: "Apple",
        type: "fruit",
        treats: ["heart problems", "skin issues", "bone issues", "migraine"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
        totalNutritions: 104,
      },
    ]);
    /**
     * Test case for calculating total nutrition values
     */
    expect(
      nutritionClassifier.calculateTotalNutritionValue(nutritionalData)
    ).toEqual(577);
    /**
     * Test case for finding the food for bone issues
     */
    expect(nutritionClassifier.findFoodsForBoneIssues(nutritionalData)).toEqual(
      ["Cashew", "Wallnut", "Apple"]
    );
    /**
     * Test case for finding the food which has greater number of nutritions
     */
    expect(
      nutritionClassifier.findFoodsWithMostNutrients(nutritionalData)
    ).toEqual(["Banana", "Badam"]);
    /**
     * Test case for finding the food which can treat migraine and has vitamin greater than or equal to 60
     */
    expect(
      nutritionClassifier.findFoodsForMigraineWithHighVitamins(nutritionalData)
    ).toEqual(["Apple"]);
    /**
     * Test case for finding the food which has the lowest carbs
     */
    expect(
      nutritionClassifier.findFoodsWithLowestCarbs(nutritionalData)
    ).toEqual(["Badam"]);
    /**
     * Test case for finding the protein intake of nuts that does not involve sugar
     */
    expect(
      nutritionClassifier.calculateTotalProteinIntakeForSugarTreats(
        nutritionalData
      )
    ).toEqual(18);
    /**
     * Test case for finding the vitamin intake of food in which any fruit does not contain sugar
     */
    expect(
      nutritionClassifier.calculateTotalVitaminContentExcludingFruitsWithSugar(
        nutritionalData
      )
    ).toEqual(249);
  });
});
