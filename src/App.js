import * as React from 'react';
import '@fontsource/inter';
import logo from './logo.svg';
import Sheet from '@mui/joy/Sheet';
import './App.css';
import Navbar from "./Navbar.js"
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
import IconButton from '@mui/joy/IconButton';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { Stack } from '@mui/joy';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
      <IconButton
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
      <Sheet variant="solid" sx={{backgroundColor:'background.body', display:'flex', flexDirection:'row'}}>
        <Sheet id="nav" sx={{backgroundColor:'background.level1', width:'23vw', minHeight:'100vh'}}>
          <Navbar/>
        </Sheet>
        <Sheet sx={{width:"100%", height:"100%"}}>
        <ModeToggle id="b_theme" sx={{width:'1em', height:'1em', position:'absolute', top:'1em', right:'1em'}}/>
        <Router>
          <Routes>
              <Route
                  path="/"
                  element={
                    
                      <Button>h</Button>
                  }
              ></Route>
          </Routes>
        </Router>
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
}

export default App;
