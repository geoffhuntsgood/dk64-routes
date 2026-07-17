import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import type { Route } from "./classes/Route";
import { LandingPage } from "./components/LandingPage";
import { RoutePage } from "./components/RoutePage";
import { theme } from "./utils/theme";

const App = () => {
  const [route, setRoute] = useState<Route | null>(null);

  return (
    <ThemeProvider theme={theme}>
      {!route && <LandingPage setRoute={setRoute} />}
      {route && <RoutePage route={route} setRoute={setRoute} />}
    </ThemeProvider>
  );
};

export default App;
