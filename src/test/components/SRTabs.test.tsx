import { render } from "vitest-browser-react";
import { SRTabs } from "../../components";

describe("SRTabs tests", () => {
  const setValueMock = vi.fn();

  const getTabs = async (value: string, tabs: string[]) => {
    return (
      await render(<SRTabs value={value} setValue={setValueMock} tabs={tabs} />)
    )
      .getByRole("tab")
      .all();
  };

  test("Check initial render", async () => {
    expect((await getTabs("1", ["1", "2"]))[0]).toHaveTextContent("1");
  });

  test("Check setValue", async () => {
    const tabs = await getTabs("1", ["1", "2"]);
    await tabs[tabs.length - 1].click();
    expect(setValueMock).toHaveBeenCalledOnce();
  });
});
