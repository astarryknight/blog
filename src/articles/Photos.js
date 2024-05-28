import React, { useState, useEffect } from 'react';
import '@fontsource/inter';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Divider from '@mui/joy/Divider';
import Skeleton from '@mui/joy/Skeleton';
import AspectRatio from '@mui/joy/AspectRatio';
import View from '@mui/icons-material/Visibility';
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from '@mui/material';

import dog from "../images/g_dog.jpg";
import flower from "../images/g_flower.jpg";
import mug from "../images/g_mug.jpg";
import ocean from "../images/g_ocean.jpg";
import ramen from "../images/g_ramen.jpg";

export default function Photos() {
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
    <Sheet sx={{width:'100%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Sheet sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Typography level='h1'>Photo Gallery</Typography>
      </Sheet>
      <Sheet sx={{width:'100%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <AspectRatio variant="plain" sx={{ width:'80%', maxWidth:'600px', my:'1em' }}>
            <Skeleton loading={loading}>
              <img src={
                loading 
                ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                : dog
              }
            />
            </Skeleton>
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width:'80%', maxWidth:'600px', my:'1em' }}>
            <Skeleton loading={loading}>
              <img src={
                loading 
                ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                : flower
              }
            />
            </Skeleton>
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width:'80%', maxWidth:'600px', my:'1em' }}>
            <Skeleton loading={loading}>
              <img src={
                loading 
                ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                : mug
              }
            />
            </Skeleton>
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width:'80%', maxWidth:'600px', my:'1em' }}>
            <Skeleton loading={loading}>
              <img src={
                loading 
                ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                : ocean
              }
            />
            </Skeleton>
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width:'80%', maxWidth:'600px', my:'1em' }}>
            <Skeleton loading={loading}>
              <img src={
                loading 
                ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                : ramen
              }
            />
            </Skeleton>
          </AspectRatio>
        </Sheet>
      </Sheet>
  );
}