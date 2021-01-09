function rand5() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function rand7() {
  // Implement rand7() using rand5()
  let result = 8;

  while (result > 7) {
    result = rand5() + rand5() - 1;
  }

  return result;
}

for (let i = 0; i < 14; i++) {
  console.log(rand7());
}
