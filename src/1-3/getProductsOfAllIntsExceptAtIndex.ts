const getProductsOfAllIntsExceptAtIndex = (intArray: number[]): number[] => {
  if (intArray.length <= 1) {
    throw new Error('intArray is too short.');
  }

  const productsToLeft = calculateCumulativeProducts(intArray);
  const productsToRight = calculateCumulativeProducts(intArray, true);

  return intArray.map((int, i) => {
    return productsToLeft[i] * productsToRight[i];
  });
};

const calculateCumulativeProducts = (
  ints: number[],
  fromRight?: boolean
): number[] => {
  let lastProduct = 1;
  switch (fromRight) {
    case true:
      return ints.reduceRight(
        (acc: number[], curr: number, i: number, arr: number[]): number[] => {
          const valToRight = arr[i + 1] !== undefined ? arr[i + 1] : 1;
          lastProduct *= valToRight;
          return [lastProduct].concat(acc);
        },
        []
      );
    default:
      return ints.reduce(
        (acc: number[], curr: number, i: number, arr: number[]): number[] => {
          const valToLeft = arr[i - 1] !== undefined ? arr[i - 1] : 1;
          lastProduct *= valToLeft;
          return acc.concat(lastProduct);
        },
        []
      );
  }
};

const expected1 = [0, 0, 36, 0];
const actual1 = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
console.log(expected1, actual1);

// const expected2 = [1];
// const actual2 = getProductsOfAllIntsExceptAtIndex([1]);
// console.log(expected2, actual2);

// const expected3: number[] = [];
// const actual3 = getProductsOfAllIntsExceptAtIndex([]);
// console.log(expected3, actual3);

// const expected4 = [120, 480, 240, 320, 960, 192];
// const actual4 = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
// console.log(expected4, actual4);
