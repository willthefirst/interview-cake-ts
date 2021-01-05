function getRandom(floor: number, ceiling: number) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array: Array<number | undefined>): Array<number | undefined> {
  const originalLength = array.length;
  if (originalLength <= 1) {
    return array;
  }

  // Shuffle the input in place
  const instructions = array.map(() => {
    return getRandom(0, array.length - 1);
  });

  for (let i = 0; i < originalLength; i++) {
    array.push(undefined);
  }

  // for each item,  splice it into whatever index it belongs at PLUS the length of the array(-1?), moving everything over to the right.
  for (let i = 0; i < originalLength; i++) {
    const el = array[i];
    const randomIndex = originalLength + instructions[i];
    if (array[randomIndex] === undefined) {
      array[randomIndex] = el;
    } else {
      array.splice(originalLength + instructions[i], 0, el);
    }
  }

  // Return the second half
  array.splice(0, originalLength);

  return array.filter((val) => val !== undefined);
}

console.log(shuffle([1, 2]));
