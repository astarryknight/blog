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

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
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
          <ListItem className="normWrap"><ListItemButton className="norm"><HomeIcon/>Home</ListItemButton></ListItem>
          <ListItem nested sx={{ my: 1 }} startAction={ <IconButton variant="plain" size="sm" color="neutral" onClick={() => setOpen(!open)}>
                <KeyboardArrowDown
                  sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                />
              </IconButton>
            }
          >
            <ListItem>
              <Typography level="inherit" sx={{ fontWeight: open ? 'bold' : undefined, color: open ? 'text.primary' : 'inherit',}}>
                Tutorial
              </Typography>
              <Typography component="span" level="body-xs">
                9
              </Typography>
            </ListItem>
            {open && (
              <List sx={{ '--ListItem-paddingY': '8px' }}>
                <ListItem>
                  <ListItemButton>Overview</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    0. Set Up Your Development Environment
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    1. Create and Deploy Your First Gatsby Site
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>2. Use and Style React components</ListItemButton>
                </ListItem>
              </List>
            )}
          </ListItem>
          <ListItem nested sx={{ my: 1 }} startAction={ <IconButton variant="plain" size="sm" color="neutral" onClick={() => setOpen2((bool) => !bool)}>
            <KeyboardArrowDown sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}/>
              </IconButton>
            }
          >
            <ListItem>
              <Typography level="inherit" sx={{ fontWeight: open2 ? 'bold' : undefined, color: open2 ? 'text.primary' : 'inherit',}}>
                How-to Guides
              </Typography>
              <Typography component="span" level="body-xs">
                39
              </Typography>
            </ListItem>
            {open2 && (
              <List sx={{ '--ListItem-paddingY': '8px' }}>
                <ListItem>
                  <ListItemButton>Overview</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Local Development</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Routing</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Styling</ListItemButton>
                </ListItem>
              </List>
            )}
          </ListItem>
        </List>
      </Box>
    );
  }