import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import * as React from 'react';
import {RouteNames} from '../../routes';
import {useNavigate} from 'react-router-dom';
import {MenuList} from '@mui/material';
import {useAuth} from "../../redux/hooks/use-auth";
import {useAppDispatch} from '../../redux/hooks/redux-hooks';
import {logOut} from '../../redux/slices/state/authSlice';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {isAuth, userType, isRoleTeacher} = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return isAuth ? (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"></Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button
                            onClick={() => navigate(RouteNames.STUDY)}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Главная
                        </Button>
                        {isRoleTeacher &&
                            <Button
                                onClick={() => navigate(RouteNames.RESULTS)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                Результаты
                            </Button>}
                        {isRoleTeacher &&
                            <Button
                                onClick={() => navigate(RouteNames.CREATE_QUIZ)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                Новый тест
                            </Button>
                        }
                        <Button
                            onClick={() => navigate(RouteNames.RESULTS_CURRENT_USER)}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Мои результаты
                        </Button>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open menu">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    sx={{mr: 2}}
                                >{userType}</Typography>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuList>
                                {/*<MenuItem style={{ display: 'block' }} onClick={handleCloseUserMenu}>*/}
                                {/*  <Button style={{ color: 'black' }}>*/}
                                {/*    Профиль*/}
                                {/*  </Button>*/}
                                {/*</MenuItem>*/}
                                <MenuItem
                                    style={{display: 'block'}}
                                    onClick={handleCloseUserMenu}>
                                    <Button onClick={() => dispatch(logOut())}
                                            style={{color: 'black', backgroundColor: 'none'}}>
                                        Выйти
                                    </Button>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    ) : (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button
                            onClick={() => navigate(RouteNames.LOGIN)}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Войти
                        </Button>
                        <Button
                            onClick={() => navigate(RouteNames.REGISTRATION)}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Зарегистрироваться
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
