import { useKeyPress } from "@custom-react-hooks/use-key-press";
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
  const [console, setConsole] = useState<"N64" | "WII U/NSO">("N64");
  const [category, setCategory] = useState<
    "any" | "nle" | "101" | "ces" | "other"
  >("any");
  const [routeList, setRouteList] = useState<Route[]>(lists.n64AnyList);
  const [route, setRoute] = useState<Route | null>(null);
  const [currHeaderIndex, setCurrHeaderIndex] = useState(0);

  let headers: string[] = [];

  const leftPressed = useKeyPress("ArrowLeft");
  const rightPressed = useKeyPress("ArrowRight");

  useEffect(() => {
    if (leftPressed && currHeaderIndex > 0) {
      setCurrHeaderIndex(currHeaderIndex - 1);
    }
    if (rightPressed && currHeaderIndex < headers.length) {
      setCurrHeaderIndex(currHeaderIndex + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftPressed, rightPressed]);

  useEffect(() => {
    document.getElementById(headers[currHeaderIndex])?.scrollIntoView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currHeaderIndex]);

  useEffect(() => {
    switch (category) {
      case "any":
        setRouteList(console === "N64" ? lists.n64AnyList : lists.vcAnyList);
        break;
      case "nle":
        setRouteList(console === "N64" ? lists.n64NLEList : lists.vcNLEList);
        break;
      case "101":
        setRouteList(console === "N64" ? lists.n64101List : lists.vc101List);
        break;
      case "ces":
        setRouteList(console === "N64" ? lists.n64CEList : lists.vcCEList);
        break;
      case "other":
        setRouteList(
          console === "N64" ? lists.n64OtherList : lists.vcOtherList
        );
        break;
      default:
        setRouteList(console === "N64" ? lists.n64AnyList : lists.vcAnyList);
        break;
    }
  }, [console, category]);

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
    if (step.header) {
      headers.push(`${index}`);
    }

    return (
      <Grid size={12} key={index}>
        <SRTypography
          id={`${index}`}
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
          <Box sx={{ textAlign: "center", margin: "0 auto" }}>
            <Tabs
              variant="fullWidth"
              value={console}
              onChange={(_, newValue) => setConsole(newValue)}
            >
              <Tab label="N64" value="N64" />
              <Tab label="WII U/NSO" value="WII U/NSO" />
            </Tabs>
          </Box>
          <Box sx={{ textAlign: "center", margin: "0 auto" }}>
            <Tabs
              variant="fullWidth"
              value={category}
              onChange={(_, newValue) => setCategory(newValue)}
            >
              <Tab label="ANY%" value="any" />
              <Tab label="NLE" value="nle" />
              <Tab label="101%" value="101" />
              <Tab label="CES" value="ces" />
              <Tab label="EXTRA" value="other" />
            </Tabs>

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
                    headers = [];
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
