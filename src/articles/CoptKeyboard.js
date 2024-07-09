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
import hero from "./assets/ckeyboard.jpg";
import idea from "./assets/ckeyboard_idea.jpg";


export default function CoptKeyboard() {
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
            <Typography level='h1'>Coptic Keyboard</Typography>
            <Typography level='body-md'>A clean modern look for an ancient language.</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | MARCH 2024</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(150,0,255,0.4)'}}>Physical Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                </Stack>
            </Sheet>
        </Sheet>
        <Divider sx={{marginBottom:'1em', marginTop:'.35em'}}/>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Skeleton loading={loading}>
                    <img style={{ width:'100%', maxWidth:'800px' }} src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : hero
                }
                />
                </Skeleton>
            <Typography level='body-sm' sx={{my:'.5em'}}>A picture of the completed keyboard</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Idea</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>Inspired by my previous project in the custom keybaord space (check it out 
              <a href="astarryknight.github.io/blog#/keyboard">here</a>), I decided to make a new keyboard design. This time, it would have not only 
              the English legends on the keycaps, but also feature another language, Coptic, which is the ancient language of Egypt that is preserved 
              in the Coptic Church.
            </Typography>
        </Sheet>
        
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Build</Typography>
            <Divider/>
            <Skeleton loading={loading}>
                    <img style={{ width:'100%', maxWidth:'350px', marginTop: "0.5em" }} src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : idea
                }
                />
            </Skeleton>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>The build process was very similar to my previous keyboard. I used a 3d printed case and plate, 
              but this time I bought blank keycaps to use. I initially was going to use a process called dye sublimation to apply the ink to the keycaps and 
              give them a more professional finish, but I decided against it due to the lack of materials and the cost. I explored other ideas and ultimately 
              landed on a sticker-like finish that I could print in a regular printer and place onto each keycap. This worked pretty well, being mostly flush with 
              the keycap and giving it a more glossy finish.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">This was a very cool project for me, as I had been wanting to make a Coptic-themed keyboard for a while. Although the 
              keycaps weren't exactly as I had envisioned, they still turned out pretty good and held up well through my initial testing. The purchased keycaps 
              definitely gave the keyboard a more professional feel and aesthetic, so I am very happy with how that turned out. In the future, I want to explore 
              making my own PCB for a keyboard so I don't have to handwire every single switch, taking a few hours of very laborious and tiring work.
            </Typography>
        </Sheet>
    </Sheet>
  );
}