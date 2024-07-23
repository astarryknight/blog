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
import hero from "./assets/webp/tennis.webp";


export default function TennisLauncher() {
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
            <Typography level='h1'>Tennis Ball Launcher</Typography>
            <Typography level='body-md'>An innovative solution to a tennis dilemma.</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | SEPTEMBER 2023</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(150,0,255,0.4)'}}>Physical Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                </Stack>
            </Sheet>
        </Sheet>
        <Divider sx={{marginBottom:'1em', marginTop:'.35em'}}/>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <AspectRatio variant="plain" sx={{ width:'100%', maxWidth:'800px' }}>
                <Skeleton loading={loading}>
                    <img src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : hero
                }
                />
                </Skeleton>
            </AspectRatio>
            <Typography level='body-sm' sx={{my:'.5em'}}>A picture of the completed launcher</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Challenge</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>During the first week of my engineering class, my class was tasked with building a mechanism that 
                could launch a tennis ball the furthest. We were only given 2 weeks to complete this entire project, so I knew I wanted to keep my design simple. I 
                also didn't want to break the bank with the project, so I wanted a viable design that was both cheap and simple. Air cannons that had been done in years
                past were very effective, but also didn't meet either of my criteria for the launcher.
            </Typography>
        </Sheet>
        
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Design</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>So, as I mentioned above, I wanted a cheap and simple design to solve this problem. I came up with 
                a design that was inspired by another pvc crossbow on the internet. I thought it was an ingenious idea to use the big PVC pipe as a sort of 
                barrel for the ball and the smaller PVC as the actual bow, attached by a bungee cord. I also planned to have different angle adjustements so I could
                find the optimal angle (which in theory is 45 degrees, but not always in practice).
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>The Problem</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">For the first couple of days, I made a lot of progress on my design. I was able to succesfully create a channel in the large PVC pipe
                to allow the bungee cord to ride smoothly along. I also attached all of the pieces to a small piece of wood, and went outside for my first test. That's when I 
                realized the problem: the bungee cord was going underneath the tennis ball when there was a lot of tension, meaning the tennis ball wouldn't launch at all. I 
                was pretty annoyed, especially with the timed deadline, but got to work trying to fix this problem. Eventually, I landed on a solution that was just a 3d Printed 
                filler that would go in-between the ball and the bungeee cord, making sure the bungee cord could not go under the ball. This actually worked really well, and 
                made it much easier for the ball to shoot out of the PVC pipe. I also broke the small PVC pipe after sustained tension on the last day of testing, so I had to 
                replace it with some spare that I had lying around.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">In the end, I succeeded in my goal to make a cheap and simple design, although adding some extra innovation to it. My final launch went 
                about 45-50 yards, so I am pretty proud of its performance in only 2 weeks. It was definitely a challenging project for me, as I'm not a mechanically oriented 
                engineer, but it helped me grow my skills in that area for future projects.
            </Typography>
        </Sheet>
    </Sheet>
  );
}