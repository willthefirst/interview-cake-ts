const findDuplicate = (list: number[]): number => {
  let currPos = list.length;
  let nextPos = list[currPos - 1];

  while (nextPos !== -1) {
    list[currPos - 1] = -1;
    currPos = nextPos;
    nextPos = list[currPos - 1];
  }

  return currPos;
};

console.log(findDuplicate([1, 1, 3, 3]));
