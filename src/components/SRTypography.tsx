import { Typography } from "@mui/material";
import type { JSX } from "react";

export const SRTypography = ({
  text,
  variant,
  id,
  backgroundColor,
  childJsx
}: {
  text: string;
  variant: "h1" | "h2" | "h3";
  id?: string;
  backgroundColor?: string;
  childJsx?: JSX.Element;
}) => (
  <Typography
    id={id}
    variant={variant}
    align="center"
    style={{
      color: variant === "h1" && !id ? "white" : "black",
      backgroundColor: backgroundColor,
      borderBottom: variant !== "h2" ? "2px solid black" : ""
    }}
  >
    {childJsx}
    {text}
  </Typography>
);
