import * as React from 'react';
import '@fontsource/inter';
import logo from './logo.svg';
import Sheet from '@mui/joy/Sheet';
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./articles/Home.js";
import About from "./articles/About.js";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Moon from '@mui/icons-material/DarkMode';
import Sun from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/joy/IconButton';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { Stack } from '@mui/joy';
import Divider from '@mui/joy/Divider';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
      <IconButton id="b_theme"
          variant="outlined"
          onClick={() => {
              setMode(mode === 'light' ? 'dark' : 'light');
          }}
      >
          {mode === 'light' ? <Sun /> : <Moon />}
      </IconButton>
  );
}

function App() {
  return (
    <CssVarsProvider>
      <Router>
        <Sheet variant="solid" sx={{backgroundColor:'background.body', display:'flex', flexDirection:'row'}}>
          <Sheet id="nav" sx={{backgroundColor:'background.level1', width:'23vw', maxWidth:'260px', height:'100vh'}}>
            <Sheet sx={{backgroundColor:'background.level1', height:'93vh', overflowY:'auto', overflowX:'hidden'}}>
              <Navbar/>
            </Sheet>
            <Divider inset="none" />
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{my:'1.25vh'}}>
              <IconButton><GitHubIcon sx={{width:'1em'}}/></IconButton>
            </Stack>
          </Sheet>
          <ModeToggle/>
          <Sheet sx={{width:"100%", height:"100vh", overflowY:'auto', overflowX:'hidden', display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Routes>
                <Route
                    path="/"
                    element={
                      <Home/>
                    }
                ></Route>
                <Route
                    path="/about"
                    element={
                      <About/>
                    }
                ></Route>
            </Routes>
          </Sheet>
        </Sheet>
      </Router>
    </CssVarsProvider>
  );
}

export default App;
