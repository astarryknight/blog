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
import Study from "./articles/Study.js";

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
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


//Theme toggle support
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

//Responsive support
import MediaQuery, { useMediaQuery } from 'react-responsive'

export default function MobileNav({nav, setNav}) {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <CssVarsProvider>
      <Sheet sx={{width:'100%', height:'100vh', display:'flex', flexDirection:'column', alignItems:'left', justifyContent:'flex-start'}}>
        <IconButton sx={{width:'1em', my:'1em', mx:'1em'}} onClick={()=>{setNav(!nav)}}><MenuOpenIcon/></IconButton>
        <Sheet sx={{ flexGrow:'1', width:'100%', overflowY:'auto', overflowX:'hidden'}}>
            <Navbar nav={nav} setNav={setNav}/>
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
}