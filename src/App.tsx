import {
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  ThemeProvider,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import type { Route } from "./classes/Route";
import type { Step } from "./classes/Step";
import { SRTypography } from "./components/SRTypography";
import * as lists from "./lists";
import { theme } from "./utils/theme";

const App = () => {
  const [version, setVersion] = useState<"N64" | "WII U/NSO">("N64");
  const [category, setCategory] = useState<
    "any" | "nle" | "101" | "ces" | "other"
  >("any");
  const [routeList, setRouteList] = useState<Route[]>(lists.n64AnyList);
  const [route, setRoute] = useState<Route | null>(null);
  const [headers, setHeaders] = useState<string[]>([]);
  const [currHeaderIndex, setCurrHeaderIndex] = useState<number>(0);

  const handleArrows = (event: KeyboardEvent) => {
    setTimeout(() => {
      let curr = currHeaderIndex;
      if (event.key === "ArrowLeft" && curr > 0) {
        curr--;
      } else if (event.key === "ArrowRight" && curr < headers.length) {
        curr++;
      }
      document.getElementById(headers[curr])?.scrollIntoView();
      setCurrHeaderIndex(curr);
    }, 0);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleArrows);

    return () => {
      window.removeEventListener("keyup", handleArrows);
    };
  }, [handleArrows]);

  useEffect(() => {
    const heads: string[] = [];
    route?.steps.forEach((step: Step, index: number) => {
      if (step.header) {
        heads.push(`header-${index}`);
      }
    });
    setHeaders(heads);
  }, [route]);

  useEffect(() => {
    switch (category) {
      case "any":
        setRouteList(version === "N64" ? lists.n64AnyList : lists.vcAnyList);
        break;
      case "nle":
        setRouteList(version === "N64" ? lists.n64NLEList : lists.vcNLEList);
        break;
      case "101":
        setRouteList(version === "N64" ? lists.n64101List : lists.vc101List);
        break;
      case "ces":
        setRouteList(version === "N64" ? lists.n64CEList : lists.vcCEList);
        break;
      case "other":
        setRouteList(
          version === "N64" ? lists.n64OtherList : lists.vcOtherList
        );
        break;
      default:
        setRouteList(version === "N64" ? lists.n64AnyList : lists.vcAnyList);
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

  const StepRow = (step: Step, index: number) => {
    return (
      <Grid size={12} key={index}>
        <SRTypography
          id={step.header ? `header-${index}` : ""}
          headerColor={step.header ? "black" : ""}
          text={step.text}
          backgroundColor={step.color ? step.color : "#d3d3d3"}
        />
      </Grid>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      {!route && (
        <>
          <SRTypography headerColor="white" text="DK64 Speedrun Routes" />
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
      )}
      {route && (
        <>
          <SRTypography
            headerColor="white"
            text={route.title}
            childJsx={
              <Box position="absolute" marginTop="-0.4rem">
                <Button
                  variant="text"
                  onClick={() => {
                    setHeaders([]);
                    setRoute(null);
                    setCurrHeaderIndex(0);
                  }}
                >
                  {"<"}
                </Button>
              </Box>
            }
          />
          <Grid container spacing={0}>
            {route.steps.map((step: Step, index: number) => {
              return StepRow(step, index);
            })}
          </Grid>
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
