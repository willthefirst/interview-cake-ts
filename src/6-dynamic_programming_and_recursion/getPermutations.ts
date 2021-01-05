function getPermutations(string: string): Set<string> {
  // Generate all permutations of the input string
  const result: Set<string> = new Set();

  // Base case
  if (string.length <= 1) {
    return new Set(string);
  }

  // Recursive case
  for (let i = 0; i < string.length; i++) {
    const rest = string.slice(0, i) + string.slice(i + 1);

    getPermutations(rest).forEach((s) => {
      console.log(s);
      result.add(string[i] + s);
    });
  }
  return result;
}

const tests: [string, Set<string>][] = [
  ['', new Set()],
  ['a', new Set(['a'])],
  ['ab', new Set(['ab', 'ba'])],
  ['abc', new Set(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])]
];

tests.forEach((test) => {
  const actual = getPermutations(test[0]);
  const expected = test[1];
  console.log(actual, expected);
});

export = {};
