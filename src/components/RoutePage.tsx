import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Route } from "../classes/Route";
import type { Step } from "../classes/Step";
import { SRTypography } from "./SRTypography";

export const RoutePage = ({
  route,
  setRoute
}: {
  route: Route;
  setRoute: Dispatch<SetStateAction<Route | null>>;
}) => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [currHeaderIndex, setCurrHeaderIndex] = useState<number>(0);

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
    window.addEventListener("keyup", handleArrows);

    return () => {
      window.removeEventListener("keyup", handleArrows);
    };
  }, [handleArrows]);

  const StepRow = (step: Step, index: number) => {
    return (
      <Grid size={12} key={index}>
        <SRTypography
          id={step.header ? `header-${index}` : ""}
          isHeader={step.header}
          text={step.text}
          backgroundColor={step.color ? step.color : "#d3d3d3"}
        />
      </Grid>
    );
  };

  return (
    <>
      <SRTypography
        isHeader
        text={route.title}
        childJsx={
          <Box position="absolute" marginTop="-0.4rem">
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
