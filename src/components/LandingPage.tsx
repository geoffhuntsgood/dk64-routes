import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Route } from "../classes/Route";
import {
  n64101List,
  n64AnyList,
  n64CEList,
  n64NLEList,
  n64OtherList
} from "../lists/n64/n64index";
import {
  vc101List,
  vcAnyList,
  vcCEList,
  vcNLEList,
  vcOtherList
} from "../lists/vc/vcIndex";
import type { Category, Version } from "../utils/types";
import { SRTypography } from "./SRTypography";

export const LandingPage = ({
  setRoute
}: {
  setRoute: Dispatch<SetStateAction<Route | null>>;
}) => {
  const [version, setVersion] = useState<Version>("N64");
  const [category, setCategory] = useState<Category>("any");
  const [routeList, setRouteList] = useState<Route[]>(n64AnyList);

  useEffect(() => {
    switch (category) {
      case "any":
        setRouteList(version === "N64" ? n64AnyList : vcAnyList);
        break;
      case "nle":
        setRouteList(version === "N64" ? n64NLEList : vcNLEList);
        break;
      case "101":
        setRouteList(version === "N64" ? n64101List : vc101List);
        break;
      case "ces":
        setRouteList(version === "N64" ? n64CEList : vcCEList);
        break;
      case "other":
        setRouteList(version === "N64" ? n64OtherList : vcOtherList);
        break;
      default:
        setRouteList(version === "N64" ? n64AnyList : vcAnyList);
        break;
    }
  }, [version, category]);

  const RouteSelect = ({ route }: { route: Route }) => (
    <Typography variant="h2">
      <Button variant="text" onClick={() => setRoute(route)}>
        {route.title}
      </Button>
      <Button
        variant="text"
        href={route.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {route.link.includes("youtube") ? "vid" : "doc"}
      </Button>
    </Typography>
  );

  return (
    <>
      <SRTypography isHeader text="DK64 Speedrun Routes" />
      <Tabs
        centered
        value={version}
        onChange={(_, newValue) => setVersion(newValue)}
      >
        <Tab label="N64" value="N64" />
        <Tab label="WII U/NSO" value="WII U/NSO" />
      </Tabs>
      <Tabs
        centered
        value={category}
        onChange={(_, newValue) => setCategory(newValue)}
      >
        <Tab label="ANY%" value="any" />
        <Tab label="NLE" value="nle" />
        <Tab label="101%" value="101" />
        <Tab label="CES" value="ces" />
        <Tab label="EXTRA" value="other" />
      </Tabs>

      <Box sx={{ textAlign: "center" }}>
        {routeList.map((route: Route) => (
          <RouteSelect key={route.title} route={route} />
        ))}
      </Box>
    </>
  );
};
