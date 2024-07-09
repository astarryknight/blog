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
import hero from "./assets/tetris2.png";


export default function Tetris() {
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
            <Typography level='h1'>Tetris</Typography>
            <Typography level='body-md'>The classic tetris game, now (almost) fully automated!</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | MAY 2024</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(0,0,255,0.4)'}}>Virtual Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                </Stack>
                <Stack direction='row' spacing={0}>
                    <IconButton onClick={()=>{window.open('https://github.com/astarryknight/tetris-bot', '_blank')}}><GitHubIcon/></IconButton>
                    <IconButton onClick={()=>{window.open('https://astarryknight.github.io/tetris-bot/', '_blank')}}><LaunchIcon/></IconButton>
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
            <Typography level='body-sm' sx={{my:'.5em'}}>Tetris game window</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Idea</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>Following the Snake game, I wanted to continue on my classic canvas journey. I decided that 
              tetris would be my next target, as I had attempted and failed in the past, but felt that my current knowledge would be enough to create the game 
              fully this time.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>The Game</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">This game was the most complex of the 3 I created (see the other 2 in the "Virtual Projects tab"). I created a custom class for 
              each piece, holding its base position (0,0 of the piece itself), along with its current rotated configuration (piece positions based off of the base position) 
              and color/type. Collisions were a bit difficult, but not too bad in the end as it was just a simple check of where the piece would be in the next frame and a 
              check for overlapping squares. Since tetris is played on a gird, this made it MUCH easier. Lastly, cleared lines. I created an array that held where pieces were 
              and checked if a full row was empty; if it was, it would clear it out from each piece object and move any pieces that were above down by 1 row. Phew, that was a lot, 
              but I did it!
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>The Bot</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">And nooow, for the bot. This was the most complex part of this project by FAR. It was a heuristic algorithm, meaning it ranked 
              each piece move based off of a few characteristics (number of holes, number of lines cleared, overall height, etc) and decided which one was the best move. 
              The bot then played that best move and did the next piece. This sounds simple in theory, but trying to fine tune the values for this is quite a difficult ask. 
              For example, if you make the algorithm prefer less holes, you might get a really tall overall height and end up stacking up too much. So, trying to balance every part 
              of the bot was quite a feat, and I got it down pretty well I think. It was able to go for hundreds of lines before failing. While not perfect, it was definitely still 
              very good for a tetris bot!
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md"></Typography>
        </Sheet>
    </Sheet>
  );
}