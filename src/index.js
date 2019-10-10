module.exports = function check(str, config) {
  // your solution
  if (str.length % 2 != 0) return false;

  let openers = [],
      closers = [];

  for (let i=0; i<config.length; i++) {
    openers.push(config[i][0]);
    closers.push(config[i][1]);
  } 
  
  let matchingOpener,
      arrOfBrackets = [];

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];
    for (let j = 0; j < openers.length; j++) {
      if (bracket == openers[j] && bracket == closers[j]) {
        if (arrOfBrackets.indexOf(bracket) == -1) {
          arrOfBrackets.push(bracket);
        } else {
          matchingOpener = openers[closers.indexOf(bracket)];
          if (arrOfBrackets.pop() != matchingOpener) {
            return false;
          }
        }
      } else {
        if (bracket == openers[j]) {
          arrOfBrackets.push(bracket);
        }
        if (bracket == closers[j]) {
          matchingOpener = openers[closers.indexOf(bracket)];
          if (arrOfBrackets.pop() != matchingOpener) {
            return false;
          }
        }
      }
    }
  }
  return arrOfBrackets.length == 0 ? true : false;
}
