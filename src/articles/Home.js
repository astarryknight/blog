//Global imports
import React, { useState, useEffect } from 'react';
import '@fontsource/inter';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {useNavigate, useSearchParams} from 'react-router-dom';

//file imports
import './articleStyles.css';

//image imports
import keyboard from "./assets/webp/ckeyboard.webp"

//component imports
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Skeleton from '@mui/joy/Skeleton';
import AspectRatio from '@mui/joy/AspectRatio';
import View from '@mui/icons-material/Visibility';

//responsive imports
import MediaQuery, { useMediaQuery } from 'react-responsive'

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const navigate=useNavigate();
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  //ON LOAD CODE FROM: https://stackoverflow.com/questions/57729504/is-there-a-way-to-tell-when-your-react-app-page-is-done-loading-the-page-asset
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setLoading(false);
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  return(
    <Sheet sx={{width:'100%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Sheet sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Typography level='h1'>Home</Typography>
      </Sheet>
      <Sheet id='content' sx={{width:isDesktopOrLaptop?'100%':'80vw', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Sheet id='leftContent' sx={{width:'40%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', alignItems:'start'}}>
          <Typography level='h3'>Welcome!</Typography>
          <Typography level='body-md'>Hi, I'm John Girgis. I'm a freelance developer, photographer, and engineer, and this is my new portfolio site, where I will document the design and creation of each of my projects. Feel free to visit the <a href="https://astarryknight.github.io/blog#/about">About Me</a> page for more infromation about me, or click on the featured project to see some of my work!</Typography>
        </Sheet>
        <Divider orientation="vertical" />
        <Sheet sx={{width:'60%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginInline:'auto'}}>
          <Typography level='h3'>Featured Project:</Typography>
          <Typography level='body-sm'>COPTIC KEYBOARD</Typography>
          <AspectRatio variant="plain" sx={{ width:'80%', maxWidth:'500px', minWidth:'325px', my:'1em' }}>
            <Skeleton loading={loading}>
              <img src={
                loading 
                ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                : keyboard
              }
            />
            </Skeleton>
          </AspectRatio>
          <Button startDecorator={<View />} onClick={()=>{navigate('/copt_keyboard')}}>View Project</Button>
        </Sheet>
      </Sheet>
    </Sheet>
  );
}