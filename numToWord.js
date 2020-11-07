let form = document.getElementById("my-form");
let numberInput = document.getElementById("my-form").number;

let answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let words;
  // Passing the input to function and saving it in words
  words = toEnglish(numberInput.value);

  let result = document.getElementById("result");
  result.innerText = `${words}`;
});

/*
 One-hundred = 100
 One-thousand = 1000
 One-million = 1,000,000
 One-billion = 1,000,000,000
 One-trillion = 1,000,000,000,000
 One-quadrillion = 1,000,000,000,000,000

*/
// Initialize the arrays for the conversion
let lesThanTwenty = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

let tenthLessThanHundred = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

// Using a recursive function for conversion
function toEnglish(number) {
  let word,
    remainder,
    words = arguments[1];
  if (number === 0) {
    return !words ? "zero" : words.join(" ");
  }

  // Initialize the words array for the first time as an empty array
  if (!words) {
    words = [];
  }
  // Take the number into smaller parts
  if (number < 20) {
    remainder = 0;
    word = lesThanTwenty[number];
  } else if (number < 100) {
    remainder = number % 10;
    word = tenthLessThanHundred[Math.floor(number / 10)];

    //For the remainder part and being able to use '-' we should take care of it at this part
    if (remainder) {
      word += "-" + lesThanTwenty[remainder];
      remainder = 0;
    }
  } else if (number < 1000) {
    remainder = number % 100;
    word = toEnglish(Math.floor(number / 100)) + " hundred";
  } else if (number < 1000000) {
    remainder = number % 1000;
    word = toEnglish(Math.floor(number / 1000)) + " thousand";
  } else if (number < 1000000000) {
    remainder = number % 1000000;
    word = toEnglish(Math.floor(number / 1000000)) + " million";
  } else if (number < 1000000000000) {
    remainder = number % 1000000000;
    word = toEnglish(Math.floor(number / 1000000000)) + " trillion";
  }

  words.push(word);

  return toEnglish(remainder, words);
}
