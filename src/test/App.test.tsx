import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import App from "../App";

describe("App tests", () => {
  const getScreen = () => {
    return render(<App />);
  };

  test("Check initial render (no route)", async () => {
    const app = await getScreen();
    expect(app.getByText("DK64 Speedrun Routes")).toBeVisible();
    expect(app.getByText("ANY% BEGINNER")).toBeVisible();
  });

  test("Check route render", async () => {
    const app = await getScreen();
    await userEvent.click(app.getByText("ANY% BEGINNER"));
    expect(app.getByText("Pre-setup:")).toBeVisible();
  });
});
