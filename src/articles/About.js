import React, { useState, useEffect } from 'react';
import '@fontsource/inter';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import './about.css';
//import image from "./";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Divider from '@mui/joy/Divider';
import Skeleton from '@mui/joy/Skeleton';
import AspectRatio from '@mui/joy/AspectRatio';
import AboutIcon from '@mui/icons-material/EmojiPeopleRounded';

export default function About() {
  const [loading, setLoading] = React.useState(true);
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
      <Stack direction='row'><AboutIcon/><Typography level='h1'>About</Typography></Stack>
      <Sheet sx={{width:'100%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Sheet sx={{width:'50%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', alignItems:'start'}}>
          <Typography level='h3'>Background</Typography>
          <Typography level='body-md'>Hi, I'm John Girgis. I have a passion for bringing ideas to life, whether through physical/mechanical and electrical design or through programming. Most of my physical projects have focused on being innovative solutions to modern problems (see self-tightening sneakers and ghost chessboard). For my programming projects, I also try to focus on solving problems in new ways, as the internet provides an amazing platform to share things through (see Coptic Wordle and Coptic Language/Learning Project).</Typography>
          <AspectRatio variant="plain" sx={{ width:'80%', my:'1em' }}>
            <Skeleton loading={true}>

            </Skeleton>
          </AspectRatio>
        </Sheet>
        <Divider orientation="vertical" />
        <Sheet sx={{width:'50%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Typography level='h3'>Skills</Typography>
          <div id="chart">
            <div className="chartItem"><p className="c1 r1">.</p></div>
            <div className="chartItem"><p className="c2 r1">.</p></div>
            <div className="chartItem"><p className="c3 r1">.</p></div>
            <div className="chartItem"><p className="c1 r2">.</p></div>
            <div className="chartItem"><p className="c2 r2">.</p></div>
            <div className="chartItem"><p className="c3 r2">.</p></div>
            <div className="chartItem"><p className="c1 r3">.</p></div>
            <div className="chartItem"><p className="c2 r3">.</p></div>
            <div className="chartItem"><p className="c3 r3">.</p></div>
          </div>
        </Sheet>
      </Sheet>
    </Sheet>
  );
}