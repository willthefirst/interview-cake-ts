function changePossibilitiesBottomUp(amount: number, denominations: number[]) {
  // Initialize an array of zeros with indices up to amount
}

interface Test {
  amountLeft: number;
  denominations: number[];
  expected: number;
}

const tests: Test[] = [
  { amountLeft: 5, denominations: [1, 3, 5], expected: 5 },
  { amountLeft: 1, denominations: [2], expected: 0 },
  { amountLeft: 1, denominations: [], expected: 0 },
  { amountLeft: 3, denominations: [1, 2], expected: 2 }
];

tests.forEach(({ amountLeft, denominations, expected }) => {
  const actual = changePossibilitiesBottomUp(amountLeft, denominations);
  // console.log(actual === expected);
});

export {};
