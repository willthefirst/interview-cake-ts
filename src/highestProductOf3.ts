class Ordering {
  vals: number[] = [];
  maxLength: number;
  compareFn: (a: number, b: number) => number;

  constructor(maxLength: number, compareFn: (a: number, b: number) => number) {
    this.maxLength = maxLength;
    this.compareFn = compareFn;
  }

  insert(n: number) {
    const newLength = this.vals.push(n);
    this.vals.sort((a, b) => b - a);
    if (newLength > this.maxLength) {
      this.vals.pop();
    }
  }
}

function highestProductOf3(ints: number[]): number {
  /**
   * Iterate through array, tracking:
   *  a) largest3 = largest3 values outright.
   *  b) lowest2Negatives
   *  c) hasPositives = boolean indicating if we've found at least one positive.
   *
   * */

  let hasPositives = false;
  const largest3: Ordering = new Ordering(3, (a, b) => b - a);
  const lowest2Negatives: Ordering = new Ordering(2, (a, b) => a - b);

  ints.forEach((n) => {
    // 1st step: build arrays and flags
    if (n > 0 && !hasPositives) {
      hasPositives = true;
    }

    // Maybe add to largest3 if it's large enough, trimming to 3 numbers.
    if (n > largest3.vals[2] || largest3.vals.length < 3) {
      largest3.insert(n);
    }

    // Maybe add to lowest2Negatives if it's small enough, trimming to two numbers.
    if (
      n < 0 &&
      (n < lowest2Negatives.vals[0] || lowest2Negatives.vals.length < 2)
    ) {
      lowest2Negatives.insert(n);
    }
  });

  if (lowest2Negatives.vals.length <= 1 || hasPositives === false) {
    return largest3.vals.reduce((acc, curr) => acc * curr);
  } else {
    const negativesProduct = lowest2Negatives.vals.reduce(
      (acc, curr) => acc * curr
    );
    if (negativesProduct > largest3.vals[1] * largest3.vals[2]) {
      return negativesProduct * largest3.vals[0];
    } else {
      return largest3.vals.reduce((acc, curr) => acc * curr);
    }
  }
}

console.log(highestProductOf3([-100, -2, 1]) === 200);
console.log(highestProductOf3([-100, -2, 0]) === 0);
console.log(highestProductOf3([-100, 5, 1, 100]) === 500);
console.log(highestProductOf3([-100, 2, 1, 3]) === 6);
console.log(highestProductOf3([-1, -2, -3, -3]) === -6);
console.log(highestProductOf3([2, 3, 4, 4, 4]) === 64);
console.log(highestProductOf3([-5, -10, 10, 12, 4]) === 600);
