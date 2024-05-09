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
  const findSecondLargestNumberUsingReduce = (numbers) => {
    let max = 0;
    return numbers.reduce((acc, el) => {
      if (el > max) {
        acc = max;
        max = el;
      } else if (el > acc) {
        acc = el;
      }
      return acc;
    }, 0);
  };
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
    employees.reduce((acc, employee) => {
      if (employee.age < 30) {
        acc += employee.salary;
      }
      return acc;
    }, 0);
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
    employees.reduce((acc, employee, index) => {
      if (index === 0) {
        acc += `${employee.email}`;
      } else {
        acc += `,${employee.email}`;
      }
      return acc;
    }, "");
  return {
    calculateTotalSalaryUnderAge30,
    getFullNames,
    getEmailList,
  };
}
