import { sum } from "../src/index";

test("Testing 'sum' function", () => {
    expect(sum(1,2)).toBe(3);
    expect(sum()).toBe(0);
    expect(sum(-1, 1)).toBe(0);
});