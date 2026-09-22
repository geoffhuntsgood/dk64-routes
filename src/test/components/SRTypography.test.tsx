import type { JSX } from "react";
import { render } from "vitest-browser-react";
import { SRTypography } from "../../components";

describe("SRTypography tests", () => {
  const getTypography = async ({
    text,
    id,
    isHeader,
    backgroundColor,
    childJsx
  }: {
    text: string;
    id?: string;
    isHeader?: boolean;
    backgroundColor?: string;
    childJsx?: JSX.Element;
  }) => {
    return (
      await render(
        <SRTypography
          text={text}
          id={id}
          variant={isHeader ? "h1" : "h3"}
          backgroundColor={backgroundColor}
          childJsx={childJsx}
        />
      )
    ).getByText(text);
  };

  test("Check required props", async () => {
    const typography = await getTypography({
      text: "Test Render 1"
    });

    expect(typography).toBeVisible();
    expect(typography).toHaveStyle({
      color: "black",
      backgroundColor: "rgba(0, 0, 0, 0)"
    });
  });

  test("Check header color w/no ID", async () => {
    const typography = await getTypography({
      text: "Test Render 2",
      isHeader: true
    });

    expect(typography).toBeVisible();
    expect(typography).toHaveStyle("color: white");
  });

  test("Check all optional props", async () => {
    const typography = await getTypography({
      text: "Test Render 3",
      id: "testID",
      isHeader: true,
      backgroundColor: "yellow",
      childJsx: <div>I'm a child!</div>
    });

    expect(typography).toBeVisible();
    expect(typography).toHaveStyle({
      color: "black",
      backgroundColor: "yellow"
    });
    expect(typography.getByText("I'm a child!")).toBeVisible();
  });
});
