/**
 * Generates a Fibonacci series up to the given number.
 * @param {number} number - The number specifying the length of the Fibonacci series.
 * @returns {number[]} The Fibonacci series up to the given number.
 */
export function findFibonacciSeries(number) {
  const fib = [0, 1];
  for (let i = 2; i <= number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

/**
 * Returns the Fibonacci series values at the given indices.
 * @param {number[]} numbers - The indices to retrieve Fibonacci series values from.
 * @returns {number[]} The Fibonacci series values at the specified indices.
 */
export function fibonacciSeriesAtIndices(numbers) {
  const maxNumber = Math.max.apply(null, numbers);
  const fibSeries = findFibonacciSeries(maxNumber);
  return numbers.map((number) => fibSeries[number]);
}

/**
 * Converts an array of temperatures from Celsius to Fahrenheit.
 * @param {Object[]} poiArray - Array of objects containing temperature data.
 * @returns {number[]} Array of temperatures converted to Fahrenheit.
 */
export const convertTemperaturesToFahrenheit = (poiArray) =>
  poiArray.map((item) => Math.floor((item.averageTemperature * 9) / 5 + 32));

/**
 * Returns a function that checks if a number is less than the given cutoff value.
 * @param {number} cutOffValue - The cutoff value for the created function.
 * @returns {Function} A function that checks if a number is less than the cutoff value.
 */
export function createCutOff(cutOffValue) {
  return (number) => number < cutOffValue;
}

/**
 * Replaces occurrences of "CraftCode" with "CodeCraft" in an array of sentences.
 * @param {string[]} sentences - Array of sentences to perform replacements on.
 * @returns {string[]} Array of sentences with replacements made.
 */
export const replaceCompanyNames = (sentences) =>
  sentences.map((str) => str.replace("CraftCode", "CodeCraft"));

/**
 * Updates prices in a purchase list by adding 10 to each price, excluding those containing '4'.
 * @param {string} purchaseList - The list of purchases with item names and prices.
 * @returns {string} The updated purchase list with modified prices.
 */
export const updatePrices = (purchaseList) =>
  purchaseList
    .split("\n")
    .filter((item) => !item.includes("4"))
    .map((item, index) => {
      if (index > 0) {
        const [fruit, price] = item.split(" ");
        return `${fruit} ${Number(price) + 10}`;
      }
      return undefined;
    })
    .join("\n");

/**
 * Filters items from a list that do not contain the letters 'u' or 'g'.
 * @param {string[]} itemList - Array of items to filter.
 * @returns {string[]} Filtered array containing items without 'u' or 'g'.
 */
export const filterItemsWithoutUG = (itemList) =>
  itemList.filter((item) => !item.includes("u") && !item.includes("g"));

/**
 * Filters items from a list that start with 'mang' or end with 'fy'.
 * @param {string[]} itemList - Array of items to filter.
 * @returns {string[]} Filtered array containing items starting with 'mang' or ending with 'fy'.
 */
export const filterItemsByPrefixOrSuffix = (itemList) =>
  itemList.filter((item) => item.startsWith("mang") || item.endsWith("fy"));

/**
 * Adds 10 to each number in the list and filters those divisible by 4.
 * @param {number[]} numberList - Array of numbers to process.
 * @returns {number[]} Array of numbers incremented by 10 and divisible by 4.
 */
export const addTenAndFilterDivisibleByFour = (numberList) =>
  numberList.map((number) => number + 10).filter((number) => number % 4 === 0);

/**
 * Extracts email addresses from an array of strings containing email data.
 * @param {string[]} emailStrings - Array of strings containing email data.
 * @returns {string[]} Array of extracted email addresses.
 */
export const extractEmailAddresses = (emailStrings) =>
  emailStrings.reduce((acc, el) => {
    const emailMatch = el.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/g);
    if (emailMatch) {
      acc.push(...emailMatch.map((email) => email.toLowerCase()));
    }
    return acc;
  }, []);

/**
 * Extracts ages from a list of person objects.
 * @param {Object[]} personList - Array of person objects containing age information.
 * @returns {string[]} Array of ages extracted from the person objects.
 */
export const extractAges = (personList) =>
  personList.map((item) => `${item.age}`);

/*
 * Function to filter out food items based on certain conditions
 */
export function filterFoodItems() {
  /**
   * Filters out foods without sugar.
   * @param {Array} foodList - Array of food objects with ingredients.
   * @returns {Array} - Array of food names without sugar.
   */
  const filterFoodsWithoutSugar = (foodList) =>
    foodList
      .filter((foodItem) => !Object.values(foodItem)[0].includes("sugar"))
      .map((foodItem) => Object.keys(foodItem)[0]);
  /**
   * Filters out foods containing both chili and oil.
   * @param {Array} foodList - Array of food objects with ingredients.
   * @returns {Array} - Array of food names containing chili and oil.
   */
  const filterFoodsWithChiliAndOil = (foodList) =>
    foodList
      .filter(
        (item) =>
          Object.values(item)[0].includes("chiili") &&
          Object.values(item)[0].includes("oil")
      )
      .map((item) => Object.keys(item)[0]);
  /**
   * Classifies foods as safe or unsafe based on the presence of sugar.
   * @param {Array} foodList - Array of food objects with ingredients.
   * @returns {Array} - Array of food names classified as safe or unsafe.
   */
  const classifyFoodsBySugarContent = (foodList) =>
    foodList.map((foodItem) =>
      Object.values(foodItem)[0].includes("sugar")
        ? `${Object.keys(foodItem)[0]}:unsafe`
        : `${Object.keys(foodItem)[0]}:safe`
    );
  return {
    filterFoodsWithoutSugar,
    filterFoodsWithChiliAndOil,
    classifyFoodsBySugarContent,
  };
}
/**
 * Function to find the second largest number in an array using different methods.
 */
export function secondLargestNumber() {
  /**
   * Finds the second largest number in an array using iterative approach.
   * @param {number[]} numbers - Array of numbers.
   * @returns {number} The second largest number in the array.
   */
  const findSecondLargestNumber = (numbers) => {
    let max = 0;
    let secondMax = 0;
    numbers.forEach((number) => {
      if (number > max) {
        secondMax = max;
        max = number;
      } else if (number > secondMax) {
        secondMax = number;
      }
    });
    return secondMax;
  };
  /**
   * Finds the second largest number in an array using reduce method.
   * @param {number[]} numbers - Array of numbers.
   * @returns {number} The second largest number in the array.
   */
  const findSecondLargestNumberUsingReduce = (numbers) =>
    numbers.reduce(
      (acc, el) => {
        if (el > acc.largest) {
          acc.secondLargest = acc.largest;
          acc.largest = el;
        } else if (el > acc.secondLargest) {
          acc.secondLargest = el;
        }
        return acc;
      },
      { largest: 0, secondLargest: 0 }
    ).secondLargest;
  return {
    findSecondLargestNumber,
    findSecondLargestNumberUsingReduce,
  };
}
/**
 * Function to check if some elements in an array satisfy a given condition.
 */
export function someChecker() {
  /**
   * Checks if some elements in an array satisfy a given condition using iterative approach.
   * @param {any[]} items - Array of items to be checked.
   * @param {Function} predicate - Function that tests each element.
   * @returns {boolean} True if at least one element satisfies the condition, otherwise false.
   */
  const some = (items, predicate) => {
    for (let i = 0; i < items.length; i++) {
      if (predicate(items[i])) {
        return true;
      }
    }
    return false;
  };
  /**
   * Checks if some elements in an array satisfy a given condition using reduce method.
   * @param {any[]} items - Array of items to be checked.
   * @param {Function} predicate - Function that tests each element.
   * @returns {boolean} True if at least one element satisfies the condition, otherwise false.
   */
  const someReduce = (items, predicate) =>
    items.reduce((acc, el) => acc || predicate(el), false);
  return {
    some,
    someReduce,
  };
}
/**
 * Function to analyze quotes data.
 */
export function quoteAnalyzer() {
  /**
   * Groups quotes by their authors.
   * @param {Object[]} authors - Array of quote objects containing text and author information.
   * @returns {Object} Object where keys are authors and values are arrays of their quotes.
   */
  const groupQuotesByAuthor = (authors) =>
    authors.reduce((acc, el) => {
      if (!acc[el.author]) {
        acc[el.author] = [el.text];
      } else {
        acc[el.author].push(el.text);
      }
      return acc;
    }, {});
  /**
   * Gets quotes containing a specific word.
   * @param {string} word - Word to search for in the quotes.
   * @param {Object[]} authors - Array of quote objects containing text and author information.
   * @returns {string[]} Array of quotes containing the specified word.
   */
  const getQuotesContainingWord = (word, authors) =>
    authors.reduce((acc, el) => {
      if (el.text.includes(word)) {
        acc.push(el.text);
      }
      return acc;
    }, []);
  /**
   * Extracts quotes from quote objects.
   * @param {Object[]} authors - Array of quote objects containing text and author information.
   * @returns {string[]} Array of quotes extracted from the quote objects.
   */
  const extractQuotes = (authors) => authors.map((author) => `${author.text}`);
  /**
   * Extracts unique authors from quote objects.
   * @param {Object[]} authors - Array of quote objects containing text and author information.
   * @returns {string[]} Array of unique authors extracted from the quote objects.
   */
  const extractUniqueAuthors = (authors) =>
    authors.reduce((acc, el) => {
      if (!acc.includes(el.author)) {
        acc.push(el.author);
      }
      return acc;
    }, []);
  return {
    groupQuotesByAuthor,
    getQuotesContainingWord,
    extractQuotes,
    extractUniqueAuthors,
  };
}

/**
 * Function to process employee data.
 */
export function employeeDataProcessor() {
  /**
   * Calculates the total salary of employees under the age of 30.
   * @param {Object[]} employees - Array of employee objects containing information such as age and salary.
   * @returns {number} Total salary of employees under the age of 30.
   */
  const calculateTotalSalaryUnderAge30 = (employees) =>
    employees.reduce(
      (acc, employee) => (employee.age < 30 ? acc + employee.salary : acc),
      0
    );
  /**
   * Gets the full names of employees.
   * @param {Object[]} employees - Array of employee objects containing first name and last name.
   * @returns {string[]} Array of full names of employees.
   */
  const getFullNames = (employees) =>
    employees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  /**
   * Gets the list of emails of employees.
   * @param {Object[]} employees - Array of employee objects containing email addresses.
   * @returns {string} Comma-separated list of email addresses of employees.
   */
  const getEmailList = (employees) =>
    employees.reduce(
      (acc, employee, index) =>
        index === 0 ? `${employee.email}` : `${acc},${employee.email}`,
      ""
    );
  return {
    calculateTotalSalaryUnderAge30,
    getFullNames,
    getEmailList,
  };
}

/**
 * Function to classify nutritional data.
 */
export function classifyNutrition() {
  /**
   * Extracts the dominant nutrition for each key from nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {Object} Object where keys are dominant nutrition keys and values are their corresponding types.
   */
  const extractDominantNutrition = (nutritionalData) => {
    const dominantNutrition = nutritionalData.reduce((acc, item) => {
      Object.keys(item.nutritions).map((key) => {
        if (!acc[key] || acc[key].value < item.nutritions[key]) {
          acc[key] = {
            value: item.nutritions[key],
            type: item.type,
          };
        }
        return undefined;
      });
      return acc;
    }, {});
    const categorizedNutrition = Object.keys(dominantNutrition).reduce(
      (acc, key) => {
        acc[key] = dominantNutrition[key].type;
        return acc;
      },
      {}
    );

    return categorizedNutrition;
  };
  /**
   * Extracts unique nutrition keys from nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {string[]} Array of unique nutrition keys.
   */
  const extractUniqueNutritionKeys = (nutritionalData) =>
    nutritionalData.reduce((acc, item) => {
      const filteredKeys = Object.keys(item.nutritions).filter(
        (key) => !acc.includes(key)
      );
      return [...acc, ...filteredKeys];
    }, []);
  /**
   * Extracts unique health conditions from nutritional data for fruit types.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {string[]} Array of unique health conditions for fruit types.
   */
  /* const extractUniqueHealthConditionsByFruit = (nutritionalData) =>
    nutritionalData.reduce((acc, item) => {
      if (item.type === "fruit") {
        if (!acc.includes(Object.values(item.treats))) {
          acc.push(...Object.values(item.treats));
        }
      }
      return acc;
    }, []); */
  const extractUniqueHealthConditionsByFruit = (nutritionalData) =>
    nutritionalData.reduce((acc, item) => {
      if (item.type === "fruit") {
        const filteredArray = item.treats.filter((key) => !acc.includes(key));
        return [...acc, ...filteredArray];
      }
      return acc;
    }, []);
  /**
   * Extracts common health conditions for nut types.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {string[]} Array of common health conditions for nut types.
   */

  const extractCommonHealthConditions = (nutritionalData) =>
    nutritionalData.reduce((acc, el) => {
      if (el.type === "nut") {
        return acc.length === 0
          ? [...el.treats]
          : acc.filter((item) => el.treats.includes(item));
      }
      return acc;
    }, []);
  /**
   * Calculates the total nutrition value for each item in the nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {Object[]} Array of objects with added 'totalNutritions' property representing the total nutrition value.
   */
  const calculateTotalNutritions = (nutritionalData) =>
    nutritionalData.map((item) => ({
      ...item,
      totalNutritions: Object.values(item.nutritions).reduce(
        (acc, el) => acc + el,

        0
      ),
    }));
  /**
   * Calculates the total nutrition value for all items in the nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {number} Total nutrition value.
   */
  const calculateTotalNutritionValue = (nutritionalData) =>
    nutritionalData.reduce(
      (total, nutrition) =>
        total +
        Object.values(nutrition.nutritions).reduce(
          (acc, el) => acc + el,

          0
        ),
      0
    );
  /**
   * Finds foods that are beneficial for bone issues based on nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {string[]} Array of food names beneficial for bone issues.
   */
  const findFoodsForBoneIssues = (nutritionalData) =>
    nutritionalData.reduce(
      (acc, item) =>
        Object.values(item.treats).includes("bone issues")
          ? [...acc, item.name]
          : acc,
      []
    );
  /**
   * Finds foods with the most nutrients based on nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {string[]} Array of food names with the most nutrients.
   */
  const findFoodsWithMostNutrients = (nutritionalData) => {
    const maxNutrients = Math.max(
      ...nutritionalData.map((item) => Object.keys(item.nutritions).length)
    );
    return nutritionalData
      .filter((item) => Object.values(item.nutritions).length === maxNutrients)
      .map((item) => item.name);
  };
  /**
   * Finds foods beneficial for migraine with high vitamin content based on nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {string[]} Array of food names beneficial for migraine with high vitamin content.
   */
  const findFoodsForMigraineWithHighVitamins = (nutritionalData) =>
    nutritionalData.reduce(
      (acc, item) =>
        item.treats.includes("migraine") && item.nutritions.vitamins >= 60
          ? [...acc, item.name]
          : acc,

      []
    );
  /**
   * Finds foods with the lowest carbs based on nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {string[]} Array of food names with the lowest carbs.
   */
  const findFoodsWithLowestCarbs = (nutritionalData) => {
    const filteredNutritionalData = nutritionalData.filter(
      (item) => item.nutritions.carbs
    );
    const minimumCarbs = Math.min(
      ...filteredNutritionalData.map((item) => item.nutritions.carbs)
    );
    return nutritionalData
      .filter((item) => item.nutritions.carbs === minimumCarbs)
      .map((item) => item.name);
  };
  /**
   * Calculates the total protein intake from foods treating sugar-related issues based on nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {number} Total protein intake from foods treating sugar-related issues.
   */
  const calculateTotalProteinIntakeForSugarTreats = (nutritionalData) =>
    nutritionalData
      .filter((item) => item.type === "nut" && item.treats.includes("sugar"))
      .reduce(
        (acc, item) => acc + item.nutritions.protein,

        0
      );
  /**
   * Calculates the total vitamin content excluding fruits with sugar based on nutritional data.
   * @param {Object[]} nutritionalData - Array of objects containing nutritional data.
   * @returns {number} Total vitamin content excluding fruits with sugar.
   */
  const calculateTotalVitaminContentExcludingFruitsWithSugar = (
    nutritionalData
  ) =>
    nutritionalData
      .filter((item) => item.type !== "fruit" || !item.nutritions.sugar)
      .reduce(
        (acc, item) => acc + item.nutritions.vitamins,

        0
      );
  return {
    extractDominantNutrition,
    extractUniqueNutritionKeys,
    extractUniqueHealthConditionsByFruit,
    extractCommonHealthConditions,
    calculateTotalNutritions,
    calculateTotalNutritionValue,
    findFoodsForBoneIssues,
    findFoodsWithMostNutrients,
    findFoodsForMigraineWithHighVitamins,
    findFoodsWithLowestCarbs,
    calculateTotalProteinIntakeForSugarTreats,
    calculateTotalVitaminContentExcludingFruitsWithSugar,
  };
}
export function numberTransformer() {
  /**
   * Generates an array of numbers from 1 to the specified number.
   * @param {number} number - The number up to which the array will be generated.
   * @returns {number[]} An array containing numbers from 1 to the specified number.
   */
  const generateArray = (number) => {
    const array = [];
    for (let i = 1; i <= number; i++) {
      array.push(i);
    }
    return array;
  };
  /**
   * Splits an array of numbers into objects containing odd and even numbers.
   * @param {number[]} arrayOfNumbers - The array of numbers to split.
   * @returns {{odd: number[], even: number[]}} An object with odd and even number arrays.
   */
  const splitNumbersIntoOddEvenObject = (arrayOfNumbers) => ({
    odd: arrayOfNumbers.reduce(
      (acc, number) => (number % 2 !== 0 ? [...acc, number] : acc),
      []
    ),
    even: arrayOfNumbers.reduce(
      (acc, number) => (number % 2 === 0 ? [...acc, number] : acc),
      []
    ),
  });
  /**
   * Calculates the sum of odd and even numbers in an object containing odd and even number arrays.
   * @param {{odd: number[], even: number[]}} numberObject - The object containing odd and even number arrays.
   * @returns {{odd: number, even: number}} An object with the sum of odd and even numbers.
   */
  const calculateSumOfOddEvenNumbers = (numberObject) => ({
    odd: Object.values(numberObject.odd).reduce(
      (acc, number) => acc + number,

      0
    ),
    even: Object.values(numberObject.even).reduce(
      (acc, number) => acc + number,

      0
    ),
  });
  /**
   * Composes multiple functions into a single function.
   * @param {...Function} functions - Functions to compose.
   * @returns {Function} A composed function.
   */
  const compose =
    (...functions) =>
    (arguements) =>
      functions.reduceRight((acc, func) => func(acc), arguements);
  return {
    generateArray,
    splitNumbersIntoOddEvenObject,
    calculateSumOfOddEvenNumbers,
    compose,
  };
}
