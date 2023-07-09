import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/store';
import { searchBooksThunk, setSearchInput } from '../store/bookSlice';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   border: 'none'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      // !
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      // transition: theme.transitions.create('width'),
      // !
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
}));



export const Header = () => {
   const searchInputValue = useAppSelector(state => state.books.searchInputValue)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (searchInputValue) {
         navigate(`/search/${searchInputValue}`)
         // dispatch(setSearchInput(''))
      }
   }

   const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

      dispatch(setSearchInput(e.target.value))
   }


   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static" sx={{ bgcolor: 'bgColor.dark', color: 'system.main' }}>
            <Toolbar>
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
               >
                  BOOKSTORE
               </Typography>
               <Search>
                  <Button onClick={handleSearch}>
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                  </Button>
                  <StyledInputBase
                     placeholder="Search…"
                     inputProps={{ 'aria-label': 'search' }}
                     onChange={handleInput}
                  />
               </Search>
               <Box sx={{ flexGrow: 1 }} />

               {/* space between left part and right part */}
               {/* <Box sx={{ flexGrow: 1 }} /> */}

               {/* three icons */}
               {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                     <Badge badgeContent={4} color="error">
                        <MailIcon />
                     </Badge>
                  </IconButton>
                  <IconButton
                     size="large"
                     aria-label="show 17 new notifications"
                     color="inherit"
                  >
                     <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                     </Badge>
                  </IconButton>
                  <IconButton
                     size="large"
                     edge="end"
                     aria-label="account of current user"
                     aria-controls={menuId}
                     aria-haspopup="true"
                     onClick={handleProfileMenuOpen}
                     color="inherit"
                  >
                     <AccountCircle />
                  </IconButton>
               </Box> */}
               {/* show more btn on mobile */}
               {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="show more"
                     aria-controls={mobileMenuId}
                     aria-haspopup="true"
                     onClick={handleMobileMenuOpen}
                     color="inherit"
                  >
                     <MoreIcon />
                  </IconButton>
               </Box> */}
            </Toolbar>
         </AppBar>
         {/* {renderMobileMenu} */}
         {/* {renderMenu} */}
      </Box>
   );
}
