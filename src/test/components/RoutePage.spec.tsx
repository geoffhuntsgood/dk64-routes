import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { RoutePage } from "../../components/RoutePage";
import { any1Kong2014 } from "../../lists/universal/any/any1Kong2014";

describe("RoutePage tests", () => {
  const backButtonMock = vi.fn();

  const getScreen = async () => {
    return await render(
      <RoutePage route={any1Kong2014} setRoute={backButtonMock} />
    );
  };

  test("Check initial render", async () => {
    const screen = await getScreen();

    expect(screen.getByText("[Split - ISG]")).toBeVisible();
  });

  test("Check back button", async () => {
    const screen = await getScreen();
    await screen.getByRole("button").click();
    expect(backButtonMock).toHaveBeenCalledOnce();
  });

  test("Check left/right arrow keys", async () => {
    const scrollIntoViewMock = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    const screen = await getScreen();
    expect(screen.getByText("[Split - ISG]")).toBeVisible();

    // General navigation
    await userEvent.keyboard("{ArrowRight}");
    expect(scrollIntoViewMock).toHaveBeenCalledOnce();
    await userEvent.keyboard("{ArrowRight}");
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(2);
    await userEvent.keyboard("{ArrowLeft}");
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(3);

    // Left at index 0
    await userEvent.keyboard("{ArrowLeft}");
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(3);

    // Right at max index
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("{ArrowRight}");
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(8);
    await userEvent.keyboard("{ArrowRight}");
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(8);
  });
});
