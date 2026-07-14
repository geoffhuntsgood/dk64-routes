import { createTheme } from "@mui/material";

export const kongs = {
  dk: "#f1c232",
  diddy: "#ee0000",
  lanky: "#4444ff",
  tiny: "#9900ff",
  chunky: "#009900"
};

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          fontSize: "2.5rem",
          padding: "0 2rem",
          color: "goldenrod",
          "&:hover": {
            color: "yellow"
          }
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          width: "99vw",
          height: "90vh",
          overflowX: "hidden",
          overflowY: "auto",
          margin: "0 auto"
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "3rem",
          color: "goldenrod",
          "&:hover, &.Mui-selected": {
            color: "yellow"
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "yellow"
        },
        root: {
          textAlign: "center",
          marginBottom: "1rem"
        }
      }
    }
  },
  typography: {
    fontFamily: "Jersey10",
    fontSize: 16,
    h1: {
      width: "100%",
      fontSize: "3rem",
      fontWeight: "bold",
      color: "white",
      backgroundColor: "rgb(0, 0, 50)"
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "goldenrod"
    },
    h3: {
      padding: "10px",
      fontSize: "2rem",
      fontWeight: "bold"
    }
  }
});
