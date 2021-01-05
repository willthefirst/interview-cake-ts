function isValid(code: string): boolean {
  const leftToClose: string[] = [];

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if ('{(['.indexOf(char) >= 0) {
      leftToClose.push(char);
    } else if (char === '}') {
      if (leftToClose.pop() !== '{') {
        return false;
      }
    } else if (char === ')') {
      if (leftToClose.pop() !== '(') {
        return false;
      }
    } else if (char === ']') {
      if (leftToClose.pop() !== '[') {
        return false;
      }
    }
  }

  return leftToClose.length === 0;
}

const tests: [string, boolean][] = [
  ['{ [ ] ( ) }', true],
  ['{ [ ( ] ) }', false],
  ['{ [ }', false],
  ['', true],
  [')', false],
  ['{', false]
];

tests.forEach(([testInput, expected]) => {
  const actual = isValid(testInput);
  console.log(actual === expected);
});

export {};
