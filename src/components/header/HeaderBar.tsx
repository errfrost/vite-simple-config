import { useState } from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Container,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
    Menu as MenuIcon,
    Home,
    SelfImprovement,
    Schedule,
    Groups,
    FollowTheSigns,
    CurrencyBitcoin,
    Call,
} from '@mui/icons-material';
import MUIIcon from '../../helpers/icons';

const pages = [
    { id: 1, desc: 'Главная', link: '/', icon: Home },
    { id: 2, desc: 'Студия', link: '/space', icon: SelfImprovement },
    { id: 3, desc: 'Расписание', link: '/schedule', icon: Schedule },
    { id: 4, desc: 'Инструкторы', link: '/teachers', icon: Groups },
    { id: 5, desc: 'Направления', link: '/classes', icon: FollowTheSigns },
    { id: 6, desc: 'Цены', link: '/price', icon: CurrencyBitcoin },
    { id: 7, desc: 'Контакты', link: '/contacts', icon: Call },
];

function gotoFooter(
    link: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    isBurger: boolean
) {
    if (link === '/contacts') {
        event.preventDefault();
        const params = isBurger ? 'auto' : 'smooth';
        document.getElementById('contacts')?.scrollIntoView({
            behavior: params,
        });
    }
}

function DefaultMenu() {
    return (
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
            }}
        >
            {pages.map((page) => (
                <Button
                    disableRipple
                    key={page.id}
                    component={NavLink}
                    to={page.link}
                    onClick={(e) => {
                        gotoFooter(page.link, e, false);
                    }}
                    sx={{
                        my: 2,
                        mx: 1,
                        color: 'black',
                        display: 'block',
                        ':hover': {
                            bgcolor: '#f9fafb',
                            color: '#69b1cf',
                            transition: 'all 0.5s',
                        },
                        '&.active': {
                            color: '#69b1cf',
                        },
                    }}
                >
                    {page.desc}
                </Button>
            ))}
        </Box>
    );
}

function BurgerMenu() {
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setDrawerState(open);
        };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    '& .MuiListItemButton-root:hover': {
                        '&, & .MuiListItemText-root': {
                            color: '#69b1cf',
                            transition: 'all 0.5s',
                        },
                    },
                }}
            >
                {pages.map((page) => (
                    <ListItem key={page.id} disablePadding>
                        <ListItemButton
                            component={NavLink}
                            to={page.link}
                            onClick={(e) => {
                                gotoFooter(page.link, e, true);
                            }}
                        >
                            <ListItemIcon>
                                <MUIIcon iconType={page.icon} />
                            </ListItemIcon>
                            <ListItemText
                                disableTypography
                                primary={page.desc}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                }}
            >
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ color: '#4d4d4d', ml: 0 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                anchor="right"
                open={drawerState}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: '#f1f4f5',
                    },
                }}
            >
                {list()}
            </Drawer>
        </>
    );
}

export default function HeaderBar() {
    return (
        <>
            <div id="back-to-top-anchor" />
            <AppBar position="sticky" sx={{ bgcolor: '#f9fafb' }}>
                <Toolbar>
                    <Container sx={{ display: 'flex', alignItems: 'center' }}>
                        <DefaultMenu />
                        <BurgerMenu />
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}
