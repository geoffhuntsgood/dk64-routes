import { Box, Button, useMediaQuery } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Route } from "../classes";
import { n64AnyList } from "../lists/n64/n64index";
import { getRouteList } from "../utils/routeApi";
import type { Category, Version } from "../utils/types";
import { SRTabs } from "./SRTabs";
import { SRTypography } from "./SRTypography";

export const LandingPage = ({
  setRoute
}: {
  setRoute: Dispatch<SetStateAction<Route | null>>;
}) => {
  const smallScreen = useMediaQuery("(max-width: 600px)");

  const [version, setVersion] = useState<Version>("N64");
  const [category, setCategory] = useState<Category>("ANY");
  const [routeList, setRouteList] = useState<Route[]>(n64AnyList);

  useEffect(() => {
    setRouteList(getRouteList(version, category));
  }, [version, category]);

  const RouteSelect = ({ route }: { route: Route }) => (
    <SRTypography
      text=""
      variant="h2"
      childJsx={
        <>
          <Button
            style={{ fontSize: smallScreen ? "2rem" : "" }}
            variant="text"
            onClick={() => setRoute(route)}
          >
            {route.title}
          </Button>
          <Button
            style={{ fontSize: smallScreen ? "2rem" : "" }}
            variant="text"
            href={route.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {route.link.includes("youtube") ? "vid" : "doc"}
          </Button>
        </>
      }
    />
  );

  return (
    <>
      <SRTypography variant="h1" text="DK64 Speedrun Routes" />
      <SRTabs
        value={version}
        setValue={setVersion}
        tabs={["N64", "WII U/NSO"]}
      />
      <SRTabs
        value={category}
        setValue={setCategory}
        tabs={["ANY", "NLE", "101", "CES", "EXTRA"]}
      />

      <Box sx={{ textAlign: "center" }}>
        {routeList.map((route: Route) => (
          <RouteSelect key={route.title} route={route} />
        ))}
      </Box>
    </>
  );
};
