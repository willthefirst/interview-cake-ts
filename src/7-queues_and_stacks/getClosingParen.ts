function getClosingParen(sentence: string, openingParenIndex: number): number {
  if (sentence[openingParenIndex] !== '(') {
    throw new Error(
      `Character at ${openingParenIndex} is not an opening parathensis.`
    );
  }

  let leftToMatch = 1;
  let i = openingParenIndex + 1;

  while (i < sentence.length) {
    if (sentence[i] === '(') {
      leftToMatch++;
    } else if (sentence[i] === ')') {
      leftToMatch--;

      if (!leftToMatch) {
        return i;
      }
    }
    i++;
  }

  throw new Error(
    `Couldn't find a matching parenthesis for opening parenthesis at ${openingParenIndex}`
  );
}

console.log(getClosingParen('0(23)5', 1) === 4);
console.log(getClosingParen('012()(()())', 3) === 4);
console.log(getClosingParen('012()(()())', 5) === 10);

try {
  getClosingParen('0(234', 1);
} catch (e) {
  console.log(
    e ==
      "Error: Couldn't find a matching parenthesis for opening parenthesis at 1"
  );
}

try {
  getClosingParen('0(234', 0);
  console.log('Failed to get error');
} catch (e) {
  console.log(e == 'Error: Character at 0 is not an opening parathensis.');
}
