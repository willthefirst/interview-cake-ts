//  https://www.interviewcake.com/question/javascript/permutation-palindrome?course=fc1&section=hashing-and-hash-tables

const hasPalindromePermutation = (s: string): boolean => {
  const unmatchedChars = new Set();

  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    if (unmatchedChars.has(l)) {
      unmatchedChars.delete(l);
    } else {
      unmatchedChars.add(l);
    }
  }

  return unmatchedChars.size === s.length % 2;
};

console.log(hasPalindromePermutation('civic') === true);
console.log(hasPalindromePermutation('ivicc') === true);
console.log(hasPalindromePermutation('civil') === false);
console.log(hasPalindromePermutation('livci') === false);
