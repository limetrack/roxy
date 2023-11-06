'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import TelegramIcon from '@mui/icons-material/Telegram';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';

const DRAWER_WIDTH = 240;

const navItems = [
  {
    title: 'С чем я работаю',
    props: {
      href: '#cases',
    },
  },
  {
    title: 'Как мы работаем',
    props: {
      href: '#plan',
    },
  },
  {
    title: 'Вариант проведения',
    props: {
      href: '#variant',
    },
  },
  {
    title: 'Записаться',
    props: {
      variant: 'outlined',
      color: 'primary',
      size: 'large',
      target: '_blank',
      href: 'https://t.me/RoksolanaMik',
      endIcon: <TelegramIcon color="primary" />,
    },
  },
];

const WIDE_AREA_PARAMS = {
  xs: 0,
  sm: 5,
  md: 10,
  lg: 20,
  xl: 40,
};

export default function RootLayout(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        PSYCHOLOGIST
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar
            component="nav"
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              px: WIDE_AREA_PARAMS,
              position: 'absolute',
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { color: 'initial' } }}
              >
                PSYCHOLOGIST
              </Typography>
              <IconButton
                color="initial"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    sx={{ color: 'initial', ml: { xs: 2, xl: 4 } }}
                    {...item.props}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: DRAWER_WIDTH,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Box
            component="main"
            sx={{
              // flexGrow: 1,
              bgcolor: 'background.default',
              // mt: ['48px', '56px', '64px'],
              // p: 3,
              // mx: WIDE_AREA_PARAMS,
            }}
          >
            {props.children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
