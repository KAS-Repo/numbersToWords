/**
 * @jest-environment jsdom
 */
import { toEnglish } from "./numToWord";

test("Should output an English phrase equivalent to numerical one", () => {
  const number = toEnglish(1999);
  expect(number).toBe("one thousand nine hundred ninety-nine");
});
