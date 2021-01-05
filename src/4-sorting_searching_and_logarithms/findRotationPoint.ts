const findRotationPoint = (words: string[]): number => {
  if (words.length <= 1) {
    throw new Error('Input must be larger than 1.');
  }

  let floor = 0;
  let ceil = words.length - 1;
  let testIndex: number;

  while (ceil > floor) {
    testIndex = Math.floor(floor + (ceil - floor) / 2);
    if (words[testIndex] >= words[floor]) {
      floor = testIndex; //4
    } else {
      ceil = testIndex;
    }

    if (floor + 1 === ceil) {
      break;
    }
  }
  return ceil;
};

const inputsAndAnswers: [string[], number][] = [
  [['ms', 'mx', 'md', 'nx', 'za', 'ba', 'lo'], 5], // 0,  3, // 3, 4
  [['xs', 'yx', 'ad', 'bx', 'ca', 'fa', 'lo'], 2],
  [[], 0],
  [['a'], 0],
  [['b', 'c', 'z', 'a'], 3],
  [['z', 'a'], 1]
];

inputsAndAnswers.forEach(([input, answer], index) => {
  try {
    console.log(index, findRotationPoint(input) === answer);
  } catch (error) {
    console.log(index, 'input of', input, 'threw an error');
  }
});
