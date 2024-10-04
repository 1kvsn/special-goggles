import { add } from "./add.js";

describe("String Calculator: add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });


  test("should return the number if only 1 number is passed as argument", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("should return the sum of any amount of numbers", () => {
    expect(add("1,5,4,10,20")).toBe(40);
  });

  test("should handle new line between numbers instead of comma", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw an exception if argument contains negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });

  test("should throw an exception if argument contains multiple negative numbers", () => {
    expect(() => add("1,-2,-3,-4")).toThrow(
      "negative numbers not allowed -2, -3, -4"
    );
  });
});
