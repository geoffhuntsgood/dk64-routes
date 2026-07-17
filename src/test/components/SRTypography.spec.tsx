import type { JSX } from "react";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { SRTypography } from "../../components/SRTypography";

describe("SRTypography tests", () => {
  const getComponent = async ({
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
          isHeader={isHeader}
          backgroundColor={backgroundColor}
          childJsx={childJsx}
        />
      )
    ).getByText(text);
  };

  test("Check required props", async () => {
    const component = await getComponent({
      text: "Test Render 1"
    });

    expect(component).toBeVisible();
    expect(component).toHaveStyle({
      color: "black",
      backgroundColor: "rgba(0, 0, 0, 0)"
    });
  });

  test("Check header color w/no ID", async () => {
    const component = await getComponent({
      text: "Test Render 2",
      isHeader: true
    });

    expect(component).toBeVisible();
    expect(component).toHaveStyle("color: white");
  });

  test("Check all optional props", async () => {
    const component = await getComponent({
      text: "Test Render 3",
      id: "testID",
      isHeader: true,
      backgroundColor: "yellow",
      childJsx: <div>I'm a child!</div>
    });

    expect(component).toBeVisible();
    expect(component).toHaveStyle({
      color: "black",
      backgroundColor: "yellow"
    });
    expect(component.getByText("I'm a child!")).toBeVisible();
  });
});
