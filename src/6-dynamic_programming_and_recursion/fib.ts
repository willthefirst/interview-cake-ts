class FibMemoized {
  cache: Record<number, number> = {};
  calculate(n: number): number {
    // Compute the nth Fibonacci number
    if (n < 0) {
      throw new Error('You must provide a positive number.');
    }

    if (Object.prototype.hasOwnProperty.call(this.cache, n)) {
      return this.cache[n];
    }

    let result: number;

    if (n <= 1) {
      // Base case
      result = n;
    } else {
      // Recursive case
      result = this.calculate(n - 1) + this.calculate(n - 2);
    }

    this.cache[n] = result;
    return result;
  }
}

const fib = new FibMemoized();

const fibBottomUp = (n: number): number => {
  if (n < 0) {
    throw new Error('You must provide a positive number.');
  }

  if (n <= 1) {
    return n;
  }

  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    const second_ = second;
    second = second + first;
    first = second_;
  }

  return second;
};

const tests: [number, number][] = [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [7, 13]
];

tests.forEach((test) => {
  const actual = fibBottomUp(test[0]);
  const expected = test[1];
  console.log(actual === expected);
});

export = {};
