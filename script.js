const subPhrases = {
  sub1: ["Go for an outdoor run", "Get a cup of morning coffee", "Watch the sunset"],
  sub2: [" with your siblings", " with your date"],
  sub3: [" on Saturday.", " on Sunday."]
};

const randEl = (arr) => {
  let randI = Math.floor(Math.random() * arr.length);
  return arr[randI];
};

let phrase = randEl(subPhrases.sub1) + randEl(subPhrases.sub2) + randEl(subPhrases.sub3) + "\n";

const colorInstructions = ['\x1b[36m%s\x1b[0m', '\x1b[32m%s\x1b[0m', '\x1b[31m%s\x1b[0m', '\x1b[33m%s\x1b[0m'];

let colorInst = randEl(colorInstructions);
console.log(colorInst, phrase);