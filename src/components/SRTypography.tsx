import { Typography } from "@mui/material";
import type { JSX } from "react";

export const SRTypography = ({
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
}) => (
  <Typography
    id={id}
    variant={isHeader ? "h1" : "h3"}
    textAlign="center"
    color={isHeader && !id ? "white" : "black"}
    borderBottom="2px solid black"
    bgcolor={backgroundColor}
    position="relative"
  >
    {childJsx}
    {text}
  </Typography>
);
