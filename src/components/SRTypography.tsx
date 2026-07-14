import { Typography } from "@mui/material";
import type { JSX } from "react";

export const SRTypography = ({
  text,
  id,
  backgroundColor,
  headerColor,
  childJsx
}: {
  text: string;
  id?: string;
  backgroundColor?: string;
  headerColor?: string;
  childJsx?: JSX.Element;
}) => (
  <Typography
    id={id}
    variant={headerColor ? "h1" : "h3"}
    textAlign="center"
    color={headerColor ? headerColor : "textPrimary"}
    borderBottom="2px solid black"
    bgcolor={backgroundColor}
    position="relative"
  >
    {childJsx}
    {text}
  </Typography>
);
