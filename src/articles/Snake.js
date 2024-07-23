//Global imports
import React, { useState, useEffect } from 'react';
import '@fontsource/inter';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

//Component imports
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Skeleton from '@mui/joy/Skeleton';
import AspectRatio from '@mui/joy/AspectRatio';
import Chip from '@mui/joy/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

//Images
import hero from "./assets/webp/snake.webp";


export default function Snake() {
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
    <Sheet sx={{width:'75%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'left'}}>
            <Typography level='h1'>Snake Infinity</Typography>
            <Typography level='body-md'>My take on a classic game - with a new way to play!</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | APRIL 2024</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(0,0,255,0.4)'}}>Virtual Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                </Stack>
                <Stack direction='row' spacing={0}>
                    <IconButton onClick={()=>{window.open('https://github.com/astarryknight/snake-infinity', '_blank')}}><GitHubIcon/></IconButton>
                    <IconButton onClick={()=>{window.open('https://astarryknight.github.io/snake-infinity/', '_blank')}}><LaunchIcon/></IconButton>
                </Stack>
            </Sheet>
        </Sheet>
        <Divider sx={{marginBottom:'1em', marginTop:'.35em'}}/>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Skeleton loading={loading}>
                    <img style={{ width:'100%', maxWidth:'500px' }} src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : hero
                }
                />
                </Skeleton>
            <Typography level='body-sm' sx={{my:'.5em'}}>Snake game window</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Idea</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>Classic computer games have always captivated me. Whether it be minesweeper, solitaire, 
              snake, or pacman, I've always enjoyed playing these simple yet enjoyable games. I wanted to see if I could recreate some of these games using 
              my javascript knowledge and learn about the javascript canvas interface. So, the first game I attempted was snake.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>The Game</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">This game was the simplest of the 3 I created (see the other 2 below in the "Virtual Projects tab"). It utilized 
              a list for the snake, which was drawn every tick, and the apple was randomly generated throughout the map, making sure not to overlap the snake. 
              I made a dynamic game speed so I could control how fast the snake moves, and I fine tuned it to a perfect speed for the player to play at, although 
              they themseles cannot control it. One thing I did not implement was collisions. This was partly due to my laziness, but also partly due to the fact 
              that I wanted the snake to wrap around the canvas. So, when you hit a wall, you wrap around to the other side.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>The Bot</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">After I finished creating the game, I wanted to see how simple it would be to create a bot that could autonomously play the 
              snake game. And, not to my surprise, it was a very simple algorithm. All I had to do was calculate the x and y deltas from the snake's head to the apple,
              and then tell the snake to move in those directions until it reached the apple and a new one was generated. Like I said, extremely simple (foreshadowing 
              to the tetris bot...).
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">This was a really fun intro into Javascript canvas. Not really knowing much going in, I learned a ton of 
              useful functions to use in the canvas, and I'm ready to apply them to many future projects in canvas. Its also a fun game to 
              play in my free time!</Typography>
        </Sheet>
    </Sheet>
  );
}