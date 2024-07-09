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
import hero from "./study.png";
import bt from "./airpods.gif";
import cal from "./calendar1.gif"


export default function Study() {
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
            <Typography level='h1'>Notchable</Typography>
            <Typography level='body-md'>A reimagined way to interact with the macOS Notch.</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | JULY 2024</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(0,0,255,0.4)'}}>Virtual Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                    <Chip sx={{backgroundColor:'#f05137'}}>Swift</Chip>
                </Stack>
                <Stack direction='row' spacing={0}>
                    <IconButton onClick={()=>{window.open('https://github.com/astarryknight/notchable', '_blank')}}><GitHubIcon/></IconButton>
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
            <Typography level='body-sm' sx={{my:'.5em'}}>Example notification through the Notch</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Beginning</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>This was my first project in Swift. Ever. So you can imagine that this was quite a difficult
                challenge to take on. During the first couple of days, I was still trying to get used the Swift language and structure, but I eventually
                warmed up to the language and was able to quickly and efficiently implement the notch I wanted to create. I'll outline some of the things I learned 
                about development in Swift, and then outline the features of the app.
            </Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Swift</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>As I mentioned, Swift was (and still is!) a very new language to me and it took me 
                a while to get used to the language. Here are some notable things I found in my Swift development:
            </Typography>
             <Sheet sx={{width:'100%', borderLeft:'1px solid rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.2)', marginTop:'1em'}}>
                <Sheet sx={{insetInlineStart:'2em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Files, Files, Files</Typography>
                    <Divider />
                    <Typography sx={{marginTop:'.3em'}}>This was one of the biggest things I had to get used to in Swift. While a lot of my
                        development, usually web focused, is not very abstracted (at least not of the same type, ie. Javascript), this Swift
                        project took on many different files. Firstly, there are AppDelegates, which create the app and handle any initial and 
                        final events. Next, there are Views. These are programmed parts of the swift project that can display something on the 
                        screen. Finally, there are View Controllers. These are files that are used to control the current view and run a lot 
                        of the main functions of the program. There are also specific handlers, error managers, etc but that is past the scope 
                        of my knowledge and this article!
                    </Typography>
                </Sheet>
                <Sheet sx={{insetInlineStart:'2em',my:'1em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Permissions</Typography>
                    <Divider/>
                    <Typography sx={{marginTop:'.3em'}}>I never realized how imortant permissions would be in my app. Although I've seen 
                        these permission prompts many times on my iPhone, I didn't realize that the developers needed to configure them in 
                        such a verbose way. To get calendar permissions, for example, you need to add a parameter to an app file and give 
                        a reason for accessing the calender. This will then prompt the user on the first run of the app if they will allow
                        the app to access their Calendar.
                    </Typography>
                </Sheet>
             </Sheet>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Features</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>Let's talk about the Notchable features. My app was built off of a project
                called DynamicNotchKit (which can be found <a href="https://github.com/MrKai77/DynamicNotchKit" target="_blank">here</a>). That library gives
                a perfect framework for displaying notifications from the notch. My task was to use that framework and apply it to some of 
                Apple's many APIs. Here are the ones I have completed so far:</Typography>
             <Sheet sx={{width:'100%', borderLeft:'1px solid rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.2)', marginTop:'1em'}}>
                <Sheet sx={{insetInlineStart:'2em',marginBottom:'1em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Bluetooth</Typography>
                    <Divider/>
                    <Skeleton loading={loading} sx={{marginTop:'.3em'}}>
                        <img style={{marginTop:'.6em'}} src={
                            loading 
                            ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                            : bt
                        }
                        />
                    </Skeleton>
                    <Typography sx={{marginTop:'.15em'}}>The Bluetooth implementation was the first feature on Notchable. The way it works is through a 
                        bluetooth polling function, which checks the list of connected devices and compares it to a previous list to determine if a new 
                        device has connected (or if an old one has disconnected). If a device is found to have connected or disconnected, a notification 
                        is sent to the notch, with the name of the device, its state (connected / disconnected), and its icon.
                    </Typography>
                </Sheet>
                <Sheet sx={{insetInlineStart:'2em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Calendar</Typography>
                    <Divider/>
                    <Skeleton loading={loading} sx={{marginTop:'.3em'}}>
                        <img style={{marginTop:'.6em'}} src={
                            loading 
                            ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                            : cal
                        }
                        />
                    </Skeleton>
                    <Typography sx={{marginTop:'.3em'}}>For the decentralized data approach, I used URL variables (query string). These are very versatile and are used 
                    in many applications such as session ids and information about a shared webpage. This required a little more intensive knowledge for encoding/decoding 
                    (although Javascript has built-in functions, atob() and bota()!) so that the set couldn't be easily modified, although there aren't any real security 
                    risks involved with the website.</Typography>
                </Sheet>
             </Sheet>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Bugs</Typography>
            <Divider sx={{my:'.2em'}}/>
             <Sheet sx={{width:'100%', borderLeft:'1px solid rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.2)', marginTop:'1em'}}>
                <Sheet sx={{insetInlineStart:'2em',marginBottom:'1em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Improper usage of hooks</Typography>
                    <Divider/>
                    <Typography sx={{marginTop:'.3em'}}>When editing an array, hooks do NOT update. Instead, you need to create a new array for the hook to trigger
                     and the page to rerender, which is a problem I encountered when trying to generate the builder page when a user creates a new node.</Typography>
                </Sheet>
                <Sheet sx={{insetInlineStart:'2em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Random generation and UIDs</Typography>
                    <Divider/>
                    <Typography sx={{marginTop:'.3em'}}>Another problem with the builder page and nodes is the unique identifier associated with it. Since I was 
                    using an arbitrary index property, deleting from the list would not work properly and would always delete the last element of the array. Instead, 
                    I used a random function (Math.random()) to generate a unique index for each node so that there is no confusion when deleting from the 
                    array.</Typography>
                </Sheet>
             </Sheet>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>Conclusion</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md"> This project was really fun to create. I learned a ton of new skills in web development that made it very easy to create a 
            cohesive and aesthetically pleasing website design. I was also pleased with how easy it was to create a responsive design, not needing to use any media 
            queries to get a decent design on both desktop and mobile devices. In addition, it is a useful tool to make basic flashcards that can be studied and 
            shared very easily.</Typography>
        </Sheet>
    </Sheet>
  );
}