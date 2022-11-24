let emojis = [[], [], [], [], [], []];
currentGuess = 6;
function init() {
  for (let i = 0; i < 5; i++) {
    row = 6 - currentGuess;
  }
  currentGuess = currentGuess - 1;
}

init();
init();
init();
init();
init();
init();

console.log(emojis);
