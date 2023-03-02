import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/add"
import { useState } from "react";

function App() {
  const [mode,setMode] = useState("light")

const darkTheme = createTheme({
  palette:{
    mode:mode
  }
})


  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor={"background.default"} color={"text.primary"} >
      <Navbar />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        // alignItems={"center"}
      
      >
        <Sidebar mode={mode} setMode={setMode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
