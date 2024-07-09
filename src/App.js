//Global imports
import * as React from 'react';
import '@fontsource/inter';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

//Article imports
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./articles/Home.js";
import About from "./articles/About.js";
import Photos from "./articles/Photos.js";
import Template from "./articles/Template.js";
import TennisLauncher from "./articles/TennisLauncher.js";
import SelfTighteningSneakers from "./articles/SelfTighteningSneakers.js";
import CoptKeyboard from "./articles/CoptKeyboard.js";
import Keyboard from "./articles/Keyboard.js";
import Study from "./articles/Study.js";
import Notchable from "./articles/Notchable.js";

//Component imports
import Sheet from '@mui/joy/Sheet';
import { Stack } from '@mui/joy';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Moon from '@mui/icons-material/DarkMode';
import Sun from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ReturnIcon from '@mui/icons-material/KeyboardReturn';
import MenuIcon from '@mui/icons-material/Menu';

//Theme toggle support
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

//Responsive support
import MediaQuery, { useMediaQuery } from 'react-responsive'
import MobileNav from './MobileNav.js';


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
  const [nav, setNav] = React.useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <CssVarsProvider>
      <Router>
        <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Input size="md" placeholder="Site Search..." startDecorator={<SearchIcon />} endDecorator={<Button sx={{height:'80%', width:'3em'}}><ReturnIcon/></Button>} sx={{width:'60%', maxWidth:'700px', height:'3em'}}></Input>
        </Modal>
        <Sheet variant="solid" sx={{backgroundColor:'background.body', display:'flex', flexDirection:'row'}}>
          <MediaQuery minWidth={1224}>
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
          </MediaQuery>
          <MediaQuery maxWidth={1224}>
            <IconButton sx={{position:'absolute', width:'1em', top:'1em', left:'1em', zIndex:'1'}} onClick={()=>{setNav(!nav)}}>{<MenuIcon/>}</IconButton>
            <Modal open={nav} onClose={() => setNav(false)}>
              <MobileNav nav={nav} setNav={setNav}/>
            </Modal>
          </MediaQuery>
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
                <Route
                    path="/template"
                    element={
                      <Template/>
                    }
                ></Route>
                <Route
                    path="/study"
                    element={
                      <Study/>
                    }
                ></Route>
                <Route
                    path="/notchable"
                    element={
                      <Notchable/>
                    }
                ></Route>
                <Route
                    path="/tbl"
                    element={
                      <TennisLauncher/>
                    }
                ></Route>
                <Route
                    path="/sts"
                    element={
                      <SelfTighteningSneakers/>
                    }
                ></Route>
                <Route
                    path="/keyboard"
                    element={
                      <Keyboard/>
                    }
                ></Route>
                <Route
                    path="/copt_keyboard"
                    element={
                      <CoptssKeyboard/>
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
