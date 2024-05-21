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

export default function Home() {
  return(
    <Sheet sx={{width:'100%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Typography level='h1'>Welcome!</Typography>
    </Sheet>
  );
}