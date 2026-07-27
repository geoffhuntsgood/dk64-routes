import { Tab, Tabs, useMediaQuery } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
import type { Category, Version } from "../utils/types";

export const SRTabs = ({
  value,
  setValue,
  tabs
}: {
  value: string;
  setValue:
    | Dispatch<SetStateAction<Version>>
    | Dispatch<SetStateAction<Category>>;
  tabs: string[];
}) => {
  const smallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Tabs centered value={value} onChange={(_, newValue) => setValue(newValue)}>
      {tabs.map((tab: string) => (
        <Tab
          style={{ fontSize: smallScreen ? "2rem" : "3rem" }}
          label={tab}
          value={tab}
        />
      ))}
    </Tabs>
  );
};
