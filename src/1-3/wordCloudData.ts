class WordCloudData {
  wordsToCounts: Map<string, number>;

  constructor(inputString: string) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString: string): void {
    // Filter out punctuation and convert to array
    const words: string[] | null = inputString.match(/\w+/g);

    if (!words) {
      return;
    }

    words.forEach((word: string) => {
      const lowercaseWord = word.toLowerCase();
      const val: number | undefined = this.wordsToCounts.get(lowercaseWord);
      this.wordsToCounts.set(lowercaseWord, val ? val + 1 : 1);
    });
  }
}

console.log(new WordCloudData('I like cake').wordsToCounts);
console.log(
  new WordCloudData('After beating the eggs, Dana read the next step:')
    .wordsToCounts
);
console.log(
  new WordCloudData('Add milk and eggs, then add flour and sugar.')
    .wordsToCounts
);
