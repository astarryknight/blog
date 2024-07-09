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
import hero from "./assets/minesweeper.png";


export default function Minesweeper() {
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
            <Typography level='h1'>Minesweeper</Typography>
            <Typography level='body-md'>The classic minesweeper game... - yeah, thats it.</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | MAY 2024</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(0,0,255,0.4)'}}>Virtual Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                </Stack>
                <Stack direction='row' spacing={0}>
                    <IconButton onClick={()=>{window.open('https://github.com/astarryknight/minesweeper', '_blank')}}><GitHubIcon/></IconButton>
                    <IconButton onClick={()=>{window.open('https://astarryknight.github.io/minesweeper', '_blank')}}><LaunchIcon/></IconButton>
                </Stack>
            </Sheet>
        </Sheet>
        <Divider sx={{marginBottom:'1em', marginTop:'.35em'}}/>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Skeleton loading={loading}>
                    <img style={{ width:'100%', maxWidth:'750px' }} src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : hero
                }
                />
                </Skeleton>
            <Typography level='body-sm' sx={{my:'.5em'}}>Minesweeper game window</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Idea</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>Following the Snake and Tetris games, I wanted to finish my classic canvas journey. I've loved 
              playing minesweeper on google, and so that is what inspired this project.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>The Game</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">I was expecting this game to be a piece of cake. I was able to mock-up a board and generate all the numbers within about 1 hour. 
              However, the big roadblock came when it was time to show the clicked tiles. For tiles that have a number, this isn't a challenge at all, because it just 
              shows that tile. However, for empty tiles, it shows chain of empty tiles around it, ending off with tiles that have numbers. This was a difficult task to 
              solve, but I found an algorithm that did just the trick. It is called the flood flow algorithm. Essentially, you "flood" out from the central tile, and 
              keep going until you've reached a certain edge parameter. This worked perfectly for me, and I was able to implement it in the game easily. I also added 
              a flagging feature, although there is no automatic clear function when you middle/right click like in the google game.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">I was expecting this project to be easy, but I had a good challenge figuring out each part of the project. I learned a new 
              algorithm and also had tons of fun, both building and playing the game. In the end, I am proud of all of my classic games and hope I can continue to 
              make even more in the future!
            </Typography>
        </Sheet>
    </Sheet>
  );
}