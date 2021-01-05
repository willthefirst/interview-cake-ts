const maxDuffelBagValue = (cakeTypes: Cake[], capacity: number): number => {
  // Account for zero weight/value
  const maxCapacityAtN: Array<number> = new Array(capacity + 1).fill(0);

  maxCapacityAtN.forEach((currentMax: number, index: number) => {
    // i === 0;
    cakeTypes.forEach((cake) => {
      if (cake.weight === 0 && cake.value !== 0) {
        throw new Error('infinity');
      }

      if (cake.weight <= index) {
        maxCapacityAtN[index] = Math.max(
          maxCapacityAtN[index],
          cake.value + maxCapacityAtN[index - cake.weight]
        );
      }
    });
  });

  return maxCapacityAtN[capacity];
};

const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 }
];

const capacity = 20;

interface Cake {
  weight: number;
  value: number;
}

console.log(maxDuffelBagValue(cakeTypes, capacity));
