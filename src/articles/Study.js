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
import hero from "./assets/study.png";


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
            <Typography level='h1'>Study Buddy</Typography>
            <Typography level='body-md'>Simple flashcard website that decentralizes study sets</Typography>
            <Typography level='body-sm' sx={{my:'.15em'}}>JOHN GIRGIS | APRIL 2024</Typography>
            <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Stack direction='row' spacing={'.5em'} sx={{height:'fit-content'}}>
                    <Chip sx={{backgroundColor:'rgba(0,0,255,0.4)'}}>Virtual Project</Chip>
                    <Chip sx={{backgroundColor:'rgba(0,255,0,0.4)'}}>Completed</Chip>
                    <Chip sx={{backgroundColor:'#61dbfb'}}>React</Chip>
                </Stack>
                <Stack direction='row' spacing={0}>
                    <IconButton onClick={()=>{window.open('https://github.com/astarryknight/joyui', '_blank')}}><GitHubIcon/></IconButton>
                    <IconButton onClick={()=>{window.open('https://astarryknight.github.io/joyui/', '_blank')}}><LaunchIcon/></IconButton>
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
            <Typography level='body-sm' sx={{my:'.5em'}}>MAIN PAGE WITH AN EXAMPLE STUDY SET</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', marginTop:'4em', my:'1.5em'}}>
            <Typography level='h2'>The Beginning</Typography>
            <Divider/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>I started my design journey as a regular HTML/JS/CSS project. 
            I created a header and basic flashcard system, and was working on creating a builder page 
            in which sets could be built and shared with others. However, while I was working on this, 
            a friend brought to my attention Javascript frameworks that could help me make this project 
            much easier (ie. Svelte, React, etc). So, I decided to learn how to use React for this project.</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Starting out with React</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>Trying to learn a new framework for this project was definitely a challenge,
             as it is not something I am familiar with using. But, as time progressed, I gradually became more comfortable using react. 
             Here are a few of the main differences I found between React and a regular stack (HTML/JS/CSS):</Typography>
             <Sheet sx={{width:'100%', borderLeft:'1px solid rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.2)', marginTop:'1em'}}>
                <Sheet sx={{insetInlineStart:'2em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Hooks</Typography>
                    <Divider />
                    <Typography sx={{marginTop:'.3em'}}>This is the main difference between the two in terms of logic. In a regular website, everything you want 
                        dynamically controlled is in the Javascript file, and has to be continuously updated in a function or an event listener. 
                        In React, you can use hooks, which continuously update the value of an element (such as a title, for example) without the 
                        need for lots of functions and other javascript code to aid.</Typography>
                </Sheet>
                <Sheet sx={{insetInlineStart:'2em',my:'1em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Components</Typography>
                    <Divider/>
                    <Typography sx={{marginTop:'.3em'}}>In a regular website, each page is an html file. In React, each file is called a "component". Components can be 
                        full pages, or they can be parts of pages (ie. header, footer, etc) that can persist through website links and other 
                        events that happen on the website.</Typography>
                </Sheet>
                <Sheet sx={{insetInlineStart:'2em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>Code Structure</Typography>
                    <Divider/>
                    <Typography sx={{marginTop:'.3em'}}>In a regular website, everything is separated into different files. In react, however, the javascript, HTML, and 
                        CSS can all be controlled in a singular file, which helps to keep things clean and concise during development</Typography>
                </Sheet>
             </Sheet>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>JoyUI</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md"> I also decided to use a UI framework, which is basically a pre-built library of UI components that are easily configurable and
             add to a nice cohesive design without a lot of hassle. This was my first time trying one, and I really loved the ease of use with React. It was easy to 
             pick out colors, implement light/dark modes, and style each component as needed.</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em', marginBottom:'2em'}}>
            <Typography level='h2'>Flashcards</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">This is the main section of the website (at least for now!). It is the main form of studying which simulates how regular flashcards
             would work. I started out with a basic functionality that has an array of cards, and each button cycles either left or right in the set. By clicking on the 
             card itself, it will toggle if the term or the definition is being displayed. I created a custom class to manage these cards (called nodes), which stores the 
             term and definition in one array element, making it very easy to manipulate the flashcards.</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Builder</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md">This is the next part of the website that would be used. It is the place to create study sets that can be studied. The user can set
             a title and add as many cards as they want. This can then be shared with other users, as is explained in the next section.</Typography>
        </Sheet>
        <Sheet sx={{width:'100%', height:'fit-content', display:'flex', flexDirection:'column', alignItmems:'left', my:'1.5em'}}>
            <Typography level='h2'>Data Storage</Typography>
            <Divider sx={{my:'.2em'}}/>
            <Typography level="body-md" sx={{marginTop:'.5em'}}>For this project, I need some way to store data. There are 2 main ways of thinking for this. First would be
             a centralized database that can have contributors, and links could be built using this to link to sets from a database. The other way would be a more decentralized
              approach. By not requiring a login or having a database to store information, users could share links that would contain all the necessary information. I 
              explored both of these approaches, here is what I found:</Typography>
             <Sheet sx={{width:'100%', borderLeft:'1px solid rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.2)', marginTop:'1em'}}>
                <Sheet sx={{insetInlineStart:'2em',marginBottom:'1em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>JSON</Typography>
                    <Divider/>
                    <Typography sx={{marginTop:'.3em'}}>For the database approach, I chose to use JSON as it is a commonly used data storage format. I modeled it after
                     the card objects I had already created (see Flashcards Section above). This was good, although it required a static import in react that I did not know how to 
                     make dynamic.</Typography>
                </Sheet>
                <Sheet sx={{insetInlineStart:'2em', width:'calc(100% - 2em)'}}>
                    <Typography level='h3'>URL Data</Typography>
                    <Divider/>
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