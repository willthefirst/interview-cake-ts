const findRepeat = (numbers: number[]): number => {
  let r1 = [1, Math.floor((numbers.length - 1) / 2)];
  let r2 = [r1[1] + 1, numbers.length - 1];

  let notFound = true;
  let result = 0;

  while (notFound) {
    let r1Count = 0;
    const r1Max = r1[1] - r1[0] + 1;
    const r2Max = r2[1] - r2[0] + 1;

    numbers.forEach((num) => {
      if (num >= r1[0] && num <= r1[1]) {
        r1Count++;
      }
    });

    if (r1Count > r1Max) {
      if (r1Max === 1) {
        result = r1[0];
        notFound = false;
      }
      const oldR1 = Array.from(r1);
      // A number is in r1
      r1 = [r1[0], Math.floor(r1[1] / 2)];
      r2 = [r1[1] + 1, oldR1[1]];
    } else {
      if (r2Max === 1) {
        result = r2[0];
        notFound = false;
      }
      // Number must be in r2
      r1 = [r2[0], r2[0] + Math.floor((r2[1] - r2[0]) / 2)];
      r2 = [r1[1] + 1, r2[1]];
    }
  }

  return result;
};

const tests: [number[], number][] = [
  [[1, 2, 4, 3, 5, 6, 3], 3],
  [[1, 2, 3, 1], 1],
  [[1, 3, 3, 3], 3],
  [[5, 1, 5, 2, 3, 4], 5]
];

tests.forEach(([nums, expected], i) => {
  try {
    const actual = findRepeat(nums);
    console.log(expected === actual);
  } catch (error) {
    console.log(i, nums, error);
  }
});
