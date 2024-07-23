import React from 'react';
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {NavLink, Outlet} from "react-router-dom";
import useMediaQuery from '../../hooks/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import BK from "/src/assets/bk.svg"
import styles from './styles.module.scss';
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar
} from "@mui/material";
import {routesMobile} from "./contants.ts";

export const Layout = () => {
    const isMobile = useMediaQuery(768);
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return isMobile ? <>
        <Header/>
        <div className={styles.outContainer}>
            <Outlet/>
        </div>
        <Footer/>
    </> : <Box>
        <AppBar position="fixed" sx={{backgroundColor: '#0C0C0D', height: '11vh', border: '1px solid white'}}>
            <Toolbar sx={{height: '100%', flexDirection: 'row-reverse'}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    sx={{mr: 2}}
                    edge="end"
                        >
                        <MenuIcon/>
                        </IconButton>
                        <div style={{
                        width: '67%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <NavLink to={'/'}>
                        <img className={styles.imageIcon} src={BK} alt={'home'}/>
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
            variant={'temporary'}
            anchor="right"
            open={open}
            onClick={handleDrawerClose}

        >
            <List onClick={handleDrawerClose} className={styles.customDrawer}>
                {routesMobile.map(({title, route}, index) => (
                    <NavLink to={route} key={index}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={title}/>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Drawer>
        <Box style={{marginTop: '9vh'}}>
            <Outlet/>
        </Box>
    </Box>

}