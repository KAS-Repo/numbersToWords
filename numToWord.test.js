/**
 * @jest-environment jsdom
 */
import { toEnglish } from "./numToWord";

test("Should output an English phrase equivalent to numerical one", () => {
  const number = toEnglish(1999);
  expect(number).toBe("one thousand nine hundred ninety-nine");
});


//This is a mock for Jest environment
//Jest do not support import (ES6) right now so for using this test I should have write the whole programm in Node.js
//so that I could use require in here, but I made another test using Jasmine in Test Folder which is better to setup in vanilla JavaScript
