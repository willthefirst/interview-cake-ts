function contains(array: number[], value: number): boolean {
  // Check if an integer is present in the array
  const n = array.length; // 5
  let currIndex = 0; // 2
  let nextIndex = Math.floor(n / 2);

  while (currIndex !== nextIndex) {
    // Binary search
    if (array[nextIndex] === value) {
      return true;
    }

    currIndex = nextIndex;

    if (array[nextIndex] > value) {
      nextIndex = Math.floor(nextIndex / 2); // 1
    } else if (array[nextIndex] < value) {
      nextIndex = nextIndex + Math.floor((n - nextIndex) / 2); //2 + (1)
    }
  }

  return false;
}

console.log(contains([1, 2, 3, 4, 5], 5) === true);
