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
import hero from "./assets/wordle.png";


export default function Wordle() {
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
            <Typography level='h1'>Coptic Wordle</Typography>
            <Typography level='body-md'>The hit game turned Coptic!</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | AUGUST 2023</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(0,0,255,0.4)'}}>Virtual Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                </Stack>
                <Stack direction='row' spacing={0}>
                    <IconButton onClick={()=>{window.open('https://github.com/thecopticwordle/coptic-wordle', '_blank')}}><GitHubIcon/></IconButton>
                    <IconButton onClick={()=>{window.open('https://wordle.thecopticlanguage.com/', '_blank')}}><LaunchIcon/></IconButton>
                </Stack>
            </Sheet>
        </Sheet>
        <Divider sx={{marginBottom:'1em', marginTop:'.35em'}}/>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Skeleton loading={loading}>
                    <img style={{ width:'100%', maxWidth:'400px' }} src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : hero
                }
                />
                </Skeleton>
            <Typography level='body-sm' sx={{my:'.5em'}}>Wordle game window</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Idea</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>This was one of my biggest passion projects. It started from learning about the lack of Coptic 
              knowledge in the Coptic Orthodox Church, despite having Coptic as one of the main language in prayer and liturgical services. So, I wanted to think 
              of creative ways to have people learn Coptic vocabulary. And then Wordle came to my mind. I remember seeing Wordle ports in other languages and thought 
              I could do the same thing here. So it began!
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>The Game</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">The actual mechanics of the game weren't very hard to create, since I had done many javacsript projects in the past and was 
              very familiar with the language. With some help from family members, I was able to get all the functionality up and running. But, here comes the hard 
              part. There is no database of Coptic words I could pull from. And, having the goal of Coptic literacy, I also wanted to include more information about the 
              word in the results summary. So, I had to hand-pick each word, its meaning, part of speech, and use in context. This was a very painstaking process, and I 
              still don't have a clear solution to this problem. However, there have been some promising developments with others in the Coptic community coming close to 
              achieving a sort of Coptic dictionary database, so I will likely update this project when that is fully operational.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">After it's official release, this app was a success! It reached hundreds of users all over the globe, and many people played it 
              consistently! I am super happy with all the progress I made with this project so far and I hope to continue working to grow Coptic literacy in the future. 
              I have a couple more ideas up my sleeve, so they will probably end up here once they are finished.
            </Typography>
        </Sheet>
    </Sheet>
  );
}