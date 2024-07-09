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
import hero from "./assets/dark_mode.png";


export default function OldPortfolio() {
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
            <Typography level='h1'>Old Portfolio Website</Typography>
            <Typography level='body-md'>My old website to display my work in fun way</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | JANUARY 2024</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(0,0,255,0.4)'}}>Virtual Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                </Stack>
                <Stack direction='row' spacing={0}>
                    <IconButton onClick={()=>{window.open('https://github.com/astarryknight/webpageTesting', '_blank')}}><GitHubIcon/></IconButton>
                    <IconButton onClick={()=>{window.open('https://astarryknight.github.io/webpageTesting/', '_blank')}}><LaunchIcon/></IconButton>
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
            <Typography level='body-sm' sx={{my:'.5em'}}>Main page with an example study set</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Idea</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>I wanted to have a website where I could host all of my projects and achievements,
                like a more fun version of a resume in essence that could fully showcase all of the work I have put into my personal projects. I didn't 
                want it to end up like every other person's website, and I wanted to add some dynamic elements to it, so I started playing around with designs 
                in Figma until I found something that looked cool.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>The Design</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">I designed it to have different blocks where content could be put. Each block would change depeding on the 
                page of the site (about, projects, contact) and would move dynamically to add a fun movement to the website instead of just static 
                text. I added arrows on the sides in addition to the navbar on the bottom to have a more versatile experience when moving between 
                pages. On the projects page, I created dialogs that pop up when you click on the item to reveal more information about the project in 
                question. Those were styled in a macOS window esque design, although they really could like however I like.</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">I really loved how unique but vibrant my website was. However, when I started moving between devices, especially 
                to mobile, I realized that my design wasn't really responsive. I was trying to fit too much information into the screen and it wasn't 
                easily organizable. That's the reason I decided to move to a more blog style website, because it's pretty easy to design for both mobile 
                and desktop (and everything in between!). Although I'm a little sad about abandoning this cool design, I learned a lot (WebGL/three.js, 
                shaders, dialogs, etc) and will carry a ton of this knowledge to my future web development projects.</Typography>
        </Sheet>
    </Sheet>
  );
}