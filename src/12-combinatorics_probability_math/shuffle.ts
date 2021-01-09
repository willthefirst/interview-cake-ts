function getRandom(floor: number, ceiling: number) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array: Array<number>): void {
  for (let i = array.length - 1; i > 0; i--) {
    array.push(...array.splice(getRandom(0, i), 1));
  }
}

const arr1 = [0, 1, 2, 3, 4, 5];
shuffle(arr1);
console.log(arr1);
