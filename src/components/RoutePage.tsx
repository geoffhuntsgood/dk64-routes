import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Route, Step } from "../classes";
import { SRTypography } from "./SRTypography";

export const RoutePage = ({
  route,
  setRoute
}: {
  route: Route;
  setRoute: Dispatch<SetStateAction<Route | null>>;
}) => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [currHeaderIndex, setCurrHeaderIndex] = useState(0);

  useEffect(() => {
    const heads: string[] = [];
    route?.steps.forEach((step: Step, index: number) => {
      if (step.header) {
        heads.push(`header-${index}`);
      }
    });
    setHeaders(heads);
  }, [route?.steps]);

  useEffect(() => {
    const handleArrows = (event: KeyboardEvent) => {
      setTimeout(() => {
        let curr = currHeaderIndex;
        if (event.key === "ArrowLeft" && curr > 1) {
          curr--;
          document.getElementById(headers[curr - 1])?.scrollIntoView();
          setCurrHeaderIndex(curr);
        } else if (event.key === "ArrowRight" && curr < headers.length) {
          curr++;
          document.getElementById(headers[curr - 1])?.scrollIntoView();
          setCurrHeaderIndex(curr);
        }
      }, 0);
    };

    window.addEventListener("keyup", handleArrows);

    return () => {
      window.removeEventListener("keyup", handleArrows);
    };
  }, [headers, currHeaderIndex]);

  const StepRow = (step: Step, index: number) => {
    return (
      <Grid size={12} key={index}>
        <SRTypography
          id={step.header ? `header-${index}` : ""}
          variant={step.header ? "h1" : "h3"}
          text={step.text}
          backgroundColor={step.color ? step.color : "#d3d3d3"}
        />
      </Grid>
    );
  };

  return (
    <>
      <SRTypography
        variant="h1"
        text={route.title}
        childJsx={
          <Box style={{ position: "absolute", marginTop: "-0.4rem" }}>
            <Button variant="text" onClick={() => setRoute(null)}>
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
  );
};
