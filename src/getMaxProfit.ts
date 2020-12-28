const getMaxProfit = (prices: number[]): number => {
  if (prices.length <= 1) {
    throw new Error('Not enough prices!');
  }

  let totalMax = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    let max = -Infinity;
    for (let j = i + 1; j < prices.length; j++) {
      const diff = prices[j] - prices[i];
      if (diff > max) {
        max = diff;
      }
    }
    if (max > totalMax) {
      totalMax = max;
    }
  }
  return totalMax;
};
