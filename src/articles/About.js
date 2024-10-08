import React, { useState, useEffect } from 'react';
import '@fontsource/inter';
import 'charts.css';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import './articleStyles.css';
//import image from "./";
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
import AboutIcon from '@mui/icons-material/EmojiPeopleRounded';

import hero from "./assets/about.jpg";

export default function About() {
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
        <Typography level='h1'>About</Typography>
      </Sheet>
      <Sheet id="content" sx={{width:'100%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Sheet id="leftContent" sx={{width:'45%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', alignItems:'start'}}>
          <Typography level='h3'>Background</Typography>
          <Typography level='body-md'>Hi, I'm John Girgis. I have a passion for bringing ideas to life, whether through physical/mechanical and electrical design or through programming. 
            Most of my physical projects have focused on being innovative solutions to modern problems (see <a href="https://astarryknight.github.io/blog/#/sts">self-tightening sneakers</a>). 
            For my programming projects, I also try to focus on solving problems in new ways, as the internet provides an amazing platform to share things through (see <a href="https://astarryknight.github.io/blog/#/wordle">Coptic Wordle</a>).</Typography>
          {/*<<Divider sx={{my:'2em'}}/>
          Typography level='h3'>Skills</Typography>
          <div style={{width:"100%"}}>
            <table class="charts-css column hide-data show-4-secondary-axes show-primary-axis show-labels">
              <caption> Descriptive Line Chart Heading </caption>
              <tbody>
                <tr>
                  <th scope="row"> Photoshop </th>
                  <td id="" style={{ "--start": 0.2, "--size":0.4, backgroundColor:'#5aa5ffbf'}}> <span class="data"> $ 40K </span> </td>
                </tr>
                <tr>
                  <th scope="row"> AD Inventor </th>
                  <td style={{ "--start": 0.4, "--size":0.8 }}> <span class="data"> $ 40K </span> </td>
                </tr>
                <tr>
                  <th scope="row"> Javascript </th>
                  <td style={{ "--start": 0.8, "--size":0.6 }}> <span class="data"> $ 40K </span> </td>
                </tr>
                <tr>
                  <th scope="row"> Java </th>
                  <td style={{ "--start": 0.6, "--size":1.0 }}> <span class="data"> $ 40K </span> </td>
                </tr>
                <tr>
                  <th scope="row"> CSS </th>
                  <td style={{ "--start": 1.0, "--size":0.3 }}> <span class="data"> $ 40K </span> </td>
                </tr>
                <tr>
                  <th scope="row"> React </th>
                  <td style={{ "--start": 0.6, "--size":1.0 }}> <span class="data"> $ 40K </span> </td>
                </tr>
                <tr>
                  <th scope="row">  </th>
                  <td style={{ "--start": 1.0, "--size":0.3 }}> <span class="data"> $ 40K </span> </td>
                </tr>
              </tbody>
            </table>
          </div>*/}
        </Sheet>
        <Divider orientation="vertical" />
        <Sheet sx={{width:'35%', height:'fit-content', my:'1em', mx:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItmes:'center' }}>
          <AspectRatio ratio="3/4" variant="plain" sx={{ width:'100%', my:'1em', display:'flex', flexDirection:'column', justifyContent:'center', alignItmes:'center' }}>
            <Skeleton loading={loading}>
              <img src={
                    loading 
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                    : hero
                }
                />
            </Skeleton>
          </AspectRatio>
        </Sheet>
      </Sheet>
    </Sheet>
  );
}