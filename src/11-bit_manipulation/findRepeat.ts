function findRepeat(numbers: number[]): number {
  // Find the number that appears twice
  const n = numbers.length;

  if (n <= 1) {
    throw new Error(
      'findRepeat needs a number array that contains more than one item'
    );
  }

  const triangularSum = (Math.pow(n, 2) + n) / 2;
  const actualSum = numbers.reduce((acc, num) => acc + num);
  return n - (triangularSum - actualSum);
}

console.log(findRepeat([2, 3, 2, 1]) === 2);
console.log(findRepeat([2, 2, 3, 1]) === 2);
console.log(findRepeat([1, 1]) === 1);
console.log(findRepeat([1, 2, 1, 3]) === 1);
console.log(findRepeat([1, 2, 3, 4, 5, 5]) === 5);

export {};
