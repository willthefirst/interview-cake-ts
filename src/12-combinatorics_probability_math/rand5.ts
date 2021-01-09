function rand7() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

function rand5() {
  // Implement rand5() using rand7()
  let result = rand7();

  while (result > 5) {
    result = rand7();
  }

  return result;
}

for (let i = 0; i < 10; i++) {
  console.log(rand5());
}
