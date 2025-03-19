import { describe, it, expect } from "vitest";

console.log(import.meta.env.VITE_API_URL);

describe("utils", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
});
