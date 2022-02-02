import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/menubar";
import Hello from "./Pages/hello";
import Login from "./Pages/login";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ab47bc",
    },
    secondary: {
      main: "#ff9100",
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MenuBar />}>
          <Route index element={<Hello />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;