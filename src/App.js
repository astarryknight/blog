import * as React from 'react';
import '@fontsource/inter';
import logo from './logo.svg';
import Sheet from '@mui/joy/Sheet';
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./articles/Home.js";
import About from "./articles/About.js";
import Photos from "./articles/Photos.js";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Typography from '@mui/joy/Typography';
import Moon from '@mui/icons-material/DarkMode';
import Sun from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ReturnIcon from '@mui/icons-material/KeyboardReturn';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { Stack } from '@mui/joy';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';

function StickyGroup({open, setOpen}) {
  const { mode, setMode } = useColorScheme();
  return (
      <ButtonGroup orientation='vertical' variant="outlined" aria-label="Basic button group" sx={{height:'1em'}}>
        <IconButton 
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
            sx={{backgroundColor:'background.body'}}
        >
            {mode === 'light' ? <Sun /> : <Moon />}
        </IconButton>
        <IconButton onClick={()=>{setOpen(true)}} sx={{backgroundColor:'background.body'}}><SearchIcon/></IconButton>
      </ButtonGroup>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <CssVarsProvider>
      <Router>
        <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Input size="md" placeholder="Site Search..." startDecorator={<SearchIcon />} endDecorator={<Button sx={{height:'80%', width:'3em'}}><ReturnIcon/></Button>} sx={{width:'60%', maxWidth:'700px', height:'3em'}}></Input>
        </Modal>
        <Sheet variant="solid" sx={{backgroundColor:'background.body', display:'flex', flexDirection:'row'}}>
          <Sheet id="nav" sx={{backgroundColor:'background.level1', width:'23vw', maxWidth:'260px', height:'100vh', display:'flex', flexDirection:'column'}}>
            <Sheet sx={{backgroundColor:'background.level1', flexGrow:'1', overflowY:'auto', overflowX:'hidden'}}>
              <Navbar/>
            </Sheet>
            <Divider inset="none" />
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={'.5em'} sx={{my:'1.25vh'}}>
              <IconButton variant="outlined"><GitHubIcon sx={{width:'1em'}}/></IconButton>
              <IconButton variant="outlined"><LinkedInIcon sx={{width:'1em'}}/></IconButton>
            </Stack>
          </Sheet>
          <Sheet sx={{position:'absolute', top:'1em', right:'1.75em', zIndex:'1'}}>
            <StickyGroup open={open} setOpen={setOpen}/>
          </Sheet>
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
                <Route
                    path="/photos"
                    element={
                      <Photos/>
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
