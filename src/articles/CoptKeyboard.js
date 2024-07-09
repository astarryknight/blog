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
import solder from "./assets/keyboard_solder.jpg";


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
            <Typography level='h1'>3D Printed Custom Keyboard</Typography>
            <Typography level='body-md'>A cost effective way to get into the Custom Keyboard space.</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | DECEMBER 2023</Typography>
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
            <Typography level="body-md" sx={{marginTop:'.5em'}}>I was recently interested in intering into the mechanical keyboard space. But, after looking 
                at the prices of many of the keyboards, even at the lower end, I decided that it was quite expensive to try out. However, being inspired by 
                <a href="https://www.youtube.com/@joe_scotto" target="_blank">@Joe Scotto</a>, I decided to 3D print and wire my own keyboard. I also wanted 
                to have a knob, so I decided to make it a point to keep it in my design.
            </Typography>
        </Sheet>
        
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Build</Typography>
            <Divider/>
            <Skeleton loading={loading}>
                    <img style={{ width:'100%', maxWidth:'800px', marginTop: "0.5em" }} src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : solder
                }
                />
            </Skeleton>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>I started by 3D printing the plate, which held all of the switches in place. Once I placed all 
                of the switches into the plate, I laid out all the wires and got to soldering (oh boy, was that a LOT of soldering). Once I soldered all of the rows 
                and columns along with the diodes, I wired up each row and column to the KB2040 microcontroller, along with the knob. Once I had everything soldered, 
                I plugged in the KB2040 over USB and flashed the firmware I wrote using QMK to the microcontroller, enabling it to work as a regular keyboard! I also 
                added Via support and am working towards Vial support in the future.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">This keyboard probably costed me less than $60, while most 
                premium keyboards out there start at higher prices. I learned good soldering techniques (since I soldered close to 200 solder joints) and I learned a 
                lot about the QMK firmware system that is widely used in the keyboard industry, allowing me to have further control over how I can customize my keyboards. 
                I am able to use my design as I intended to use it, since it is fully wired and programmed as any keyboard that you can connect to pretty much any computer 
                you want. I think overall this project came out really well, and I am very happy with how it turned out in the end.
            </Typography>
        </Sheet>
    </Sheet>
  );
}