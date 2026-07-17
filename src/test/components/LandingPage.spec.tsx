import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { LandingPage } from "../../components/LandingPage";

describe("LandingPage tests", () => {
  const getScreen = async () => {
    return await render(<LandingPage setRoute={vi.fn()} />);
  };

  test("Check initial render", async () => {
    const screen = await getScreen();

    expect(screen.getByText("DK64 Speedrun Routes")).toBeVisible();
    expect(screen.getByText("ANY% BEGINNER")).toBeVisible();
  });

  test("Check version toggle", async () => {
    const screen = await getScreen();

    expect(screen.getByText("ANY% 5-KONG (WARPLESS)")).toBeVisible();
    await screen.getByRole("tab").filter({ hasText: "WII U/NSO" }).click();
    expect(screen.getByText("ANY% 5-KONG (WARPLESS)")).not.toBeInTheDocument();
  });

  test("Check category toggle: N64", async () => {
    const screen = await getScreen();
    expect(screen.getByText("ANY% BEGINNER")).toBeVisible();

    await screen.getByRole("tab").filter({ hasText: "NLE" }).click();
    expect(screen.getByText("ANY% BEGINNER")).not.toBeInTheDocument();
    expect(screen.getByText("NLE BEGINNER")).toBeVisible();

    await screen.getByRole("tab").filter({ hasText: "101%" }).click();
    expect(screen.getByText("NLE BEGINNER")).not.toBeInTheDocument();
    expect(screen.getByText("101% BEGINNER")).toBeVisible();

    await screen.getByRole("tab").filter({ hasText: "CES" }).click();
    expect(screen.getByText("101% BEGINNER")).not.toBeInTheDocument();
    expect(screen.getByText("ANY% NO ISG")).toBeVisible();

    await screen.getByRole("tab").filter({ hasText: "EXTRA" }).click();
    expect(screen.getByText("ANY% NO ISG")).not.toBeInTheDocument();
    expect(screen.getByText("GLITCHLESS ALL COLLECTABLES")).toBeVisible();
  });

  test("Check category toggle: WII U/NSO", async () => {
    const screen = await getScreen();
    await screen.getByRole("tab").filter({ hasText: "WII U/NSO" }).click();
    expect(screen.getByText("ANY% BEGINNER")).toBeVisible();

    await screen.getByRole("tab").filter({ hasText: "NLE" }).click();
    expect(screen.getByText("ANY% BEGINNER")).not.toBeInTheDocument();
    expect(screen.getByText("NLE BEGINNER")).toBeVisible();

    await screen.getByRole("tab").filter({ hasText: "101%" }).click();
    expect(screen.getByText("NLE BEGINNER")).not.toBeInTheDocument();
    expect(screen.getByText("101% BEGINNER")).toBeVisible();

    await screen.getByRole("tab").filter({ hasText: "CES" }).click();
    expect(screen.getByText("101% BEGINNER")).not.toBeInTheDocument();
    expect(screen.getByText("ANY% NO ISG")).toBeVisible();

    await screen.getByRole("tab").filter({ hasText: "EXTRA" }).click();
    expect(screen.getByText("ANY% NO ISG")).not.toBeInTheDocument();
    expect(screen.getByText("GLITCHLESS ALL COLLECTABLES")).toBeVisible();
  });
});
