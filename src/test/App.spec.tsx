import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "../App";

describe("App tests", () => {
  test("Check initial render (no route)", async () => {
    const component = (await render(<App />)).getByText("DK64 Speedrun Routes");
    expect(component).toBeVisible();
  });
});
