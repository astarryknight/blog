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
import hero from "./assets/webp/sneaker.webp";
import sketch from "./assets/sneaker_sketch.jpg"


export default function SelfTighteningSneakers() {
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
            <Typography level='h1'>Self Tightening Sneakers</Typography>
            <Typography level='body-md'>A new way to wear shoes.</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | OCTOBER 2023</Typography>
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
                    <img style={{ width:'100%', maxWidth:'350px' }} src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : hero
                }
                />
                </Skeleton>
            <Typography level='body-sm' sx={{my:'.5em'}}>A picture of the inner workings of the sneaker</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Idea</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>This project came about from a <a href="https://www.youtube.com/watch?v=1kj5N67J2aE" target="_blank">
            Hacksmith Video</a>, where they created Self Lacing Sneakers. However, one thing I noticed from the video was that they had all the electronic components 
            on the bottom of the shoe, being exposed to whatever elements you would be walking over. I wanted to see if I could fully conceal these elements inside 
            the shoe for a better structure and durability of the project.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Design</Typography>
            <Divider/>
                <Skeleton loading={loading} >
                    <img style={{width:"100%", maxWidth: "500px", marginTop: ".5em"}} src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : sketch
                }
                />
                </Skeleton>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>Following the hacksmith video, the laces are controlled by a central shaft that turns to roll up the 
                laces and tighten the shoe and also unravel the laces to loosen the shoe. I added indicator lights similar to those on the hacksmith shoe to indicate 
                what state the shoe was in (tightening, idle, etc). However, one very unique element of my shoe is the actuation mechanism. While the hacksmith shoe used 
                a button to actuate the shoes, I wanted to have a "magic" element to it. So, I used a property of aluminum foil called "capacitive touch". Essentially, the 
                circuit is wired in such a way that by putting your hand near the aluminum foil, you create a temporary ground and create a longer delay in the circuit. Once 
                this is detected by the arduino, it will actuate the shoes.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">Overall, this project was very much experimental and I am happy with the level I was able to acheive with all the electronics in the shoe.
                 I learned a lot about CAD as I had to create models for each individual part in the entire assembly, which I was not used to. I also learned some cool new scientific
                  principles, such as capacitive touch. However, I'm not fully able to use the shoe in the capacities I had expected, not being able to easily procure a battery that 
                  would fit, and also due to size and time constraints. If I worked on this project more, I think I could make it much more reliable by adding a closed loop system for 
                  sensing if the shoe is tied or not, permanently mounting components and laces, among other things. However, I am extremely pleased with how this project turned out.
            </Typography>
        </Sheet>
    </Sheet>
  );
}