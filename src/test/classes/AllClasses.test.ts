import { describe, expect, test } from "vitest";
import { Route } from "../../classes";
import { Step } from "../../classes";

describe("Sanity check class/type instantiation tests", () => {
  test("Instantiate Route", () => {
    const route = new Route("name", "link", []);
    expect(route.title).toBe("name");
  });

  test("Instantiate Step", () => {
    const step = new Step("text", "blue", true);
    expect(step.header).toBe(true);
  });
});
