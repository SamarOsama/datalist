import { useState } from 'react';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Notification from '@mui/icons-material/Notifications';
import Help from '@mui/icons-material/Help';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Badge, Table } from '@mui/material';
import logo from '../logo.svg';
import { AccountCircle } from '@mui/icons-material';
import EventsAndAttachments from '../components/EventsAndAttachments';
import HeaderDetailsForm from '../components/HeaderDetailsForm';
import AppNavigation from '../navigation/AppNavigation';
const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,

    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,

        }),

    }),

}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


function Header() {

    const [openList, setOpenList] = useState(false);
    const [open, setOpen] = useState(false);
    const [ATMList, setATMList] = useState(false);
    const [BussniessList, setBussniessList] = useState(false);

    const [ListStyle, setListStyle] = useState(false);

    const handleClick = () => {
        setOpenList(!openList);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    const theme = useTheme();

    return (

        <>
            <Box sx={{ display: 'flex', }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar className=' d-flex justify-content-between' style={{ backgroundColor: 'white' }} >
                        <div className='d-flex justify-content-center align-items-center'>
                            <IconButton
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                                <p className='mb-0 px-2' style={{ fontSize: '14px', color: 'black' }}>Welcome! <span className='text-muted'>Muhammed</span></p>


                            </IconButton>
                        </div>
                        <div>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton size="small" color="primary">
                                    <Help />
                                </IconButton>
                                <IconButton size="small" color="primary">
                                    <Badge badgeContent={4} color="error">
                                        <Notification />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>

                        </div>


                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            height: '100%',
                            boxSizing: 'border-box',
                        },

                    }}

                    variant="persistent"
                    anchor="left"
                    height="100%"
                    open={open}
                >
                    <DrawerHeader
                        className='custom_drawer_color'>
                        <img src={logo} className="w-50 text-center" />
                        <IconButton onClick={handleDrawerClose}>
                            {theme?.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>

                    <Divider />
                    <List sx={{ width: '100%', maxWidth: 360 }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className='custom_drawer_color'
                    >


                        <ListItemButton className={ATMList ? `cutom-dropdown` : ``} >
                            <ListItemText >Create</ListItemText>
                            {ATMList ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <ListItemButton className={BussniessList ? `cutom-dropdown` : ``} >
                            <ListItemText >Manage</ListItemText>
                            {BussniessList ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <ListItemButton className={openList ? `cutom-dropdown` : ``} onClick={handleClick}>
                            <ListItemText  >Adminstrator</ListItemText>
                            {openList ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>



                    </List>
                    <Divider />

                </Drawer>
                <Main open={open} >
                    <DrawerHeader />
                    <Typography paragraph>
                        <AppNavigation />
                    </Typography>


                </Main>
            </Box></>
    )
}

export default Header