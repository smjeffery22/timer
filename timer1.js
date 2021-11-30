const timer = function(numbers) {
  // Exit when no number is provided
  if (numbers === []) {
    return;
  }
  
  // Beep after a specified amount of time has passed
  for (const beep of sortedNumber) {
    if (beep >= 0) {
      setTimeout(() => {
        console.log(beep);
        process.stdout.write('\x07');
      }, 1000 * beep);
    }
  }
}

const number = process.argv.splice(2);
const sortedNumber = number.sort((a, b) => {
  return a - b;
})

timer(sortedNumber);