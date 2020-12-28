// Sorts scores from highest to lowest
const sortScores = (
  scores: number[],
  highestPossibleScore: number
): number[] => {
  // Count sort
  const counts: number[] = new Array(highestPossibleScore + 1).fill(0);
  const nextIndex: number[] = new Array(highestPossibleScore + 1);

  // Count occcurences of each score
  scores.forEach((n) => {
    if (n > highestPossibleScore) {
      throw new Error(`${n} is outside the range of acceptable scores.`);
    }
    counts[n]++;
  });

  nextIndex[highestPossibleScore] = 0;

  for (let i = highestPossibleScore - 1; i >= 0; i--) {
    nextIndex[i] = nextIndex[i + 1] + counts[i + 1];
  }

  const sorted = new Array(scores.length);

  scores.forEach((score) => {
    sorted[nextIndex[score]] = score;
    nextIndex[score]++;
  });

  return sorted;
};

console.log(sortScores([37, 89, 41, 65, 91, 53], 100));
console.log(sortScores([1, 100], 100));
