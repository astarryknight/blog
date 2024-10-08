import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/EmojiPeopleRounded';
import PhotoIcon from '@mui/icons-material/PhotoLibrary';
import BugIcon from '@mui/icons-material/BugReport';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';

import MediaQuery, { useMediaQuery } from 'react-responsive'
import MobileNav from './MobileNav.js';

export default function Navbar({nav, setNav}) {
    const navigate=useNavigate();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    return (
      <Box
        sx={{
          width: 'calc(100% - 24px)',
          pl: '24px',
        }}
      >
        <List
          size="sm"
          sx={(theme) => ({
            '--List-insetStart': '32px',
            '--ListItem-paddingY': '0px',
            '--ListItem-paddingRight': '16px',
            '--ListItem-paddingLeft': '21px',
            '--ListItem-startActionWidth': '0px',
            '--ListItem-startActionTranslateX': '-50%',
  
            [`& .${listItemButtonClasses.root}`]: {
              borderLeftColor: 'divider',
            },
            [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
              borderLeftColor: 'currentColor',
            },
            '& [class*="startAction"]': {
              color: 'var(--joy-palette-text-tertiary)',
            },
          })}
        >
          <ListItem className="normWrap" sx={{ my: .5 }} onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/')}} ><ListItemButton className="norm"><HomeIcon/>Home</ListItemButton></ListItem>
          <ListItem className="normWrap" sx={{ my: .5 }} onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/about')}}><ListItemButton className="norm"><AboutIcon/>About Me</ListItemButton></ListItem>
          <ListItem nested sx={{ my: .5 }} startAction={ <IconButton variant="plain" size="sm" color="neutral" onClick={() => setOpen2((bool) => !bool)}>
            <KeyboardArrowDown sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}/>
              </IconButton>
            }
          >
            <ListItem>
              <Typography level="inherit" sx={{ fontWeight: open2 ? 'bold' : undefined, color: open2 ? 'text.primary' : 'inherit',}}>
                Physical Projects
              </Typography>
              <Typography component="span" level="body-xs">
                4
              </Typography>
            </ListItem>
            {open2 && (
              <List sx={{ '--ListItem-paddingY': '8px' }}>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/tbl')}}>Tennis Ball Launcher</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/sts')}}>Self-Tightening Sneakers</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/keyboard')}}>Custom Keyboard</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/copt_keyboard')}}>Coptic Keyboard</ListItemButton>
                </ListItem>
              </List>
            )}
          </ListItem>
          <ListItem nested sx={{ my: .5 }} startAction={ <IconButton variant="plain" size="sm" color="neutral" onClick={() => setOpen3((bool) => !bool)}>
            <KeyboardArrowDown sx={{ transform: open3 ? 'initial' : 'rotate(-90deg)' }}/>
              </IconButton>
            }
          >
            <ListItem>
              <Typography level="inherit" sx={{ fontWeight: open3 ? 'bold' : undefined, color: open3 ? 'text.primary' : 'inherit',}}>
                Virtual Projects
              </Typography>
              <Typography component="span" level="body-xs">
                8
              </Typography>
            </ListItem>
            {open3 && (
              <List sx={{ '--ListItem-paddingY': '8px' }}>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/portfolio_old')}}>(Old) Portfolio Website</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/snake')}}>Snake Game & Bot</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/tetris')}}>Tetris Game & Bot</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/minesweeper')}}>Minesweeper</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/study')}}>Study Buddy</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/wordle')}}>Coptic Wordle</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{isTabletOrMobile&&setNav(false);navigate('/notchable')}}>Notchable</ListItemButton>
                </ListItem>
              </List>
            )}
          </ListItem>
        </List>
      </Box>
    );
}