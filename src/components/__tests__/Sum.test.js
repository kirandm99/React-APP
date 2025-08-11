import { Sum } from "../Sum";

test("Function should calculate the sum of two numbers", () => {
    const result = Sum(2, 3);
    expect(result).toBe(5);
});