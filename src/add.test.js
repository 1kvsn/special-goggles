import { add } from "./add.js";

describe("String Calculator: add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });


  test("should return the number if only 1 number is passed as argument", () => {
    expect(add("1")).toBe(1);
  });
});
