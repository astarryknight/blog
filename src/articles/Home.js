import * as React from 'react';
import '@fontsource/inter';
import Sheet from '@mui/joy/Sheet';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { Stack } from '@mui/joy';
import Divider from '@mui/joy/Divider';
import Skeleton from '@mui/joy/Skeleton';
import AspectRatio from '@mui/joy/AspectRatio';

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  return(
    <Sheet sx={{width:'100%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Typography level='h1'>Home</Typography>
      <Sheet sx={{width:'100%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Sheet sx={{width:'50%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', alignItems:'start'}}>
          <Typography level='h3'>Welcome!</Typography>
          <Typography level='body-md'>Hi, I'm John Girgis. This is my new portfolio site, where I will go through the process of each of my projects. Feel free to check the about me page for more infromation, or click on the featured project to see some of my work!</Typography>
        </Sheet>
        <Divider orientation="vertical" />
        <Sheet sx={{width:'50%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Typography level='h3'>Featured Project:</Typography>
          <Typography level='body-sm'>SUBHEADER EXAMPLE</Typography>
          <AspectRatio variant="plain" sx={{ width:'80%', my:'2em' }}>
            <Skeleton loading={loading}>
              <img
                src={
                  loading
                    ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                    : './keyboard.png'
                }
                alt=""
              />
              <img src={'../src/keyboard.png'} alt=""/>
            </Skeleton>
          </AspectRatio>
        </Sheet>
      </Sheet>
    </Sheet>
  );
}