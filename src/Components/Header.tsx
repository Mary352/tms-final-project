import React, { useState } from 'react';
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
import { Button, Drawer, SvgIcon, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/store';
import { searchBooksThunk, setSearchInput } from '../store/bookSlice';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import CloseIcon from '@mui/icons-material/Close';

// const Search = styled('div')(({ theme }) => ({
//    display: 'flex',
//    justifyContent: 'center',
//    width: '100%',
//    // backgroundColor: '#00ff00',
//    [theme.breakpoints.down('xl')]: {
//       display: 'none',
//    }


//    // [theme.breakpoints.down('xl')]: {
//    //    // width: '20ch',

//    // },
//    // position: 'relative',
//    // margin: '0 auto',
//    // marginTop: 0,
//    // marginBottom: 0,
//    // marginRight: 'auto',
//    // marginLeft: 'auto',

//    // marginY: 0,
//    // justifyContent: 'center',
//    // borderRadius: theme.shape.borderRadius,
//    // backgroundColor: alpha(theme.palette.common.white, 0.15),
//    // '&:hover': {
//    //    backgroundColor: alpha(theme.palette.common.white, 0.25),
//    // },
//    // marginRight: theme.spacing(2),
//    // marginLeft: 0,
//    // [theme.breakpoints.up('md')]: {
//    //    // marginLeft: theme.spacing(3),
//    //    // width: 'auto',
//    // },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//    padding: theme.spacing(0, 2),
//    height: '100%',
//    position: 'absolute',
//    pointerEvents: 'none',
//    display: 'flex',
//    alignItems: 'center',
//    justifyContent: 'center',
//    border: 'none'
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//    color: 'inherit',
//    border: '1px solid',
//    borderRight: 'none',
//    borderColor: theme.palette.bgColor.dark,
//    // height: '56px',
//    width: '35%',
//    padding: 0,
//    // margin: '0 auto',
//    '& .MuiInputBase-input': {
//       // padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       // !
//       // paddingLeft: `${theme.spacing(4)}`,
//       padding: `${theme.spacing(3)} 0px ${theme.spacing(3)} ${theme.spacing(5)}`,
//       // transition: theme.transitions.create('width'),
//       // !
//       width: '100%',
//       // [theme.breakpoints.up('md')]: {
//       //    // width: '20ch',

//       // },
//    },
// }));




export const Header = () => {
   // const searchInputValue = useAppSelector(state => state.books.searchInputValue)
   // const dispatch = useAppDispatch()
   // const navigate = useNavigate()

   // const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   //    if (searchInputValue) {
   //       navigate(`/search/${searchInputValue}`)
   //       dispatch(setSearchInput(''))
   //    }
   //    else navigate('/')
   // }

   // const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

   //    dispatch(setSearchInput(e.target.value))
   // }

   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const toggleDrawer = (isOpen: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
         if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
               (event as React.KeyboardEvent).key === 'Shift')
         ) {
            return;
         }

         setIsMenuOpen(isOpen);
      };

   const SideBar = (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100vw', md: '50vw' },
            paddingX: { xs: '25px', md: '40px' }
         }}
         role="presentation"
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
      >
         <Box
            sx={{
               display: 'flex',
               justifyContent: { xs: 'space-between', md: 'flex-end' },
               borderBottom: '1px solid',
               borderColor: 'bgColor.dark',
               paddingY: 7
            }}>
            <Box sx={{
               display: { xs: 'block', md: 'none' },
               alignSelf: 'center'
            }}>
               <svg width="122" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.89116 0.279328C7.90219 0.279328 9.36907 0.744877 10.2918 1.67598C11.2145 2.5838 11.6758 3.99208 11.6758 5.90084V6.77374C11.6758 9.28771 10.8359 10.9288 9.15613 11.6969C11.0962 12.4418 12.0662 14.1876 12.0662 16.9344V18.9246C12.0662 20.8101 11.5575 22.2533 10.5402 23.2542C9.54651 24.2318 8.07964 24.7207 6.13958 24.7207H0V0.279328H5.89116ZM5.64273 13.7221H3.90378V21.2291H6.13958C6.8257 21.2291 7.33437 21.0545 7.6656 20.7053C7.99683 20.3329 8.16245 19.7044 8.16245 18.8198V16.6899C8.16245 15.5726 7.96134 14.8045 7.55913 14.3855C7.18059 13.9432 6.54179 13.7221 5.64273 13.7221ZM5.78469 3.77095H3.90378V10.2304H5.4298C6.21056 10.2304 6.79021 10.0326 7.16876 9.63687C7.57096 9.24115 7.77207 8.57775 7.77207 7.64665V6.28492C7.77207 4.60894 7.10961 3.77095 5.78469 3.77095Z" fill="#313037" />
                  <path d="M18.0017 5.90084V19.0992C18.0017 20.7053 18.676 21.5084 20.0246 21.5084C21.3732 21.5084 22.0475 20.7053 22.0475 19.0992V5.90084C22.0475 4.29469 21.3732 3.49162 20.0246 3.49162C18.676 3.49162 18.0017 4.29469 18.0017 5.90084ZM14.098 18.8547V6.14525C14.098 4.18994 14.6066 2.67691 15.624 1.60614C16.6413 0.535381 18.1082 0 20.0246 0C21.941 0 23.4079 0.535381 24.4252 1.60614C25.4426 2.67691 25.9513 4.18994 25.9513 6.14525V18.8547C25.9513 20.8101 25.4426 22.3231 24.4252 23.3939C23.4079 24.4646 21.941 25 20.0246 25C18.1082 25 16.6413 24.4646 15.624 23.3939C14.6066 22.3231 14.098 20.8101 14.098 18.8547Z" fill="#313037" />
                  <path d="M32.0725 5.90084V19.0992C32.0725 20.7053 32.7468 21.5084 34.0954 21.5084C35.444 21.5084 36.1183 20.7053 36.1183 19.0992V5.90084C36.1183 4.29469 35.444 3.49162 34.0954 3.49162C32.7468 3.49162 32.0725 4.29469 32.0725 5.90084ZM28.1688 18.8547V6.14525C28.1688 4.18994 28.6774 2.67691 29.6948 1.60614C30.7121 0.535381 32.179 0 34.0954 0C36.0118 0 37.4787 0.535381 38.496 1.60614C39.5134 2.67691 40.022 4.18994 40.022 6.14525V18.8547C40.022 20.8101 39.5134 22.3231 38.496 23.3939C37.4787 24.4646 36.0118 25 34.0954 25C32.179 25 30.7121 24.4646 29.6948 23.3939C28.6774 22.3231 28.1688 20.8101 28.1688 18.8547Z" fill="#313037" />
                  <path d="M51.4667 24.7207L47.6693 14.9791L46.4627 17.2137V24.7207H42.5589V0.279328H46.4627V10.9288L51.5731 0.279328H55.4769L50.0471 11.1732L55.4769 24.7207H51.4667Z" fill="#313037" />
                  <path d="M56.5834 6.14525C56.5834 4.16667 57.0685 2.65363 58.0385 1.60614C59.0085 0.535381 60.4399 0 62.3326 0C64.2254 0 65.6568 0.535381 66.6268 1.60614C67.5968 2.65363 68.0818 4.16667 68.0818 6.14525V6.91341H64.391V5.90084C64.391 4.29469 63.7404 3.49162 62.4391 3.49162C61.1378 3.49162 60.4872 4.29469 60.4872 5.90084C60.4872 6.57588 60.6292 7.21601 60.9131 7.82123C61.197 8.42644 61.5637 8.97346 62.0132 9.46229C62.4628 9.95112 62.9596 10.4399 63.5038 10.9288C64.0479 11.3943 64.5803 11.8948 65.1008 12.4302C65.6449 12.9423 66.1418 13.5009 66.5913 14.1061C67.0408 14.6881 67.4075 15.3864 67.6915 16.2011C67.9754 17.0158 68.1173 17.9004 68.1173 18.8547C68.1173 20.8333 67.6205 22.358 66.6268 23.4288C65.6331 24.4763 64.1899 25 62.2971 25C60.4044 25 58.9612 24.4763 57.9675 23.4288C56.9738 22.358 56.477 20.8333 56.477 18.8547V17.3534H60.1678V19.0992C60.1678 20.682 60.8421 21.4735 62.1907 21.4735C63.5393 21.4735 64.2135 20.682 64.2135 19.0992C64.2135 18.1913 63.9533 17.3417 63.4328 16.5503C62.9123 15.7356 62.2735 15.0023 61.5164 14.3506C60.783 13.6988 60.0377 13.0237 59.2806 12.3254C58.5235 11.6038 57.8847 10.7193 57.3642 9.67179C56.8437 8.60102 56.5834 7.42551 56.5834 6.14525Z" fill="#313037" />
                  <path d="M69.2183 3.77095V0.279328H81.2845V3.77095H77.2033V24.7207H73.2995V3.77095H69.2183Z" fill="#313037" />
                  <path d="M86.5882 5.90084V19.0992C86.5882 20.7053 87.2625 21.5084 88.611 21.5084C89.9596 21.5084 90.6339 20.7053 90.6339 19.0992V5.90084C90.6339 4.29469 89.9596 3.49162 88.611 3.49162C87.2625 3.49162 86.5882 4.29469 86.5882 5.90084ZM82.6844 18.8547V6.14525C82.6844 4.18994 83.1931 2.67691 84.2104 1.60614C85.2278 0.535381 86.6946 0 88.611 0C90.5275 0 91.9943 0.535381 93.0117 1.60614C94.029 2.67691 94.5377 4.18994 94.5377 6.14525V18.8547C94.5377 20.8101 94.029 22.3231 93.0117 23.3939C91.9943 24.4646 90.5275 25 88.611 25C86.6946 25 85.2278 24.4646 84.2104 23.3939C83.1931 22.3231 82.6844 20.8101 82.6844 18.8547Z" fill="#313037" />
                  <path d="M109.212 24.7207H105.237C105 24.0223 104.882 23.0214 104.882 21.7179V17.8771C104.882 16.7598 104.681 15.9683 104.279 15.5028C103.877 15.014 103.226 14.7696 102.327 14.7696H100.978V24.7207H97.0746V0.279328H102.966C104.977 0.279328 106.444 0.744877 107.366 1.67598C108.289 2.5838 108.75 3.99208 108.75 5.90084V7.82123C108.75 10.3352 107.899 11.9879 106.195 12.7793C107.922 13.5009 108.786 15.2351 108.786 17.9818V21.7528C108.786 23.0796 108.928 24.0689 109.212 24.7207ZM102.859 3.77095H100.978V11.2779H102.504C103.285 11.2779 103.865 11.0801 104.243 10.6844C104.646 10.2886 104.847 9.62523 104.847 8.69413V6.28492C104.847 4.60894 104.184 3.77095 102.859 3.77095Z" fill="#313037" />
                  <path d="M115.257 3.77095V10.5796H120.616V14.0712H115.257V21.2291H122V24.7207H111.353V0.279328H122V3.77095H115.257Z" fill="#313037" />
               </svg>
            </Box>
            <Button onClick={toggleDrawer(false)}>
               <CloseIcon sx={{ fill: '#313037' }} />
            </Button>
         </Box>

         {/* <Box> */}
         <SearchInput tablet onSideBarClick={toggleDrawer(false)} />
         {/* </Box> */}
      </Box>
   );

   return (
      <Box sx={{
         display: 'flex',
         justifyContent: { xs: 'space-between', xl: 'normal' },
         maxWidth: '1200px',
         marginX: 'auto',
         marginY: '0',
         paddingX: { xs: '25px', md: '35px', xl: '40px' },
         borderBottom: '1px solid',
         borderColor: 'bgColor.dark',
         paddingY: 6
      }}
      >
         {/* <SvgIcon> */}
         <Box sx={{ alignSelf: 'center' }}>
            <svg width="138" height="29" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M6.64 0.319998C8.90667 0.319998 10.56 0.853331 11.6 1.92C12.64 2.96 13.16 4.57333 13.16 6.76V7.76C13.16 10.64 12.2133 12.52 10.32 13.4C12.5067 14.2533 13.6 16.2533 13.6 19.4V21.68C13.6 23.84 13.0267 25.4933 11.88 26.64C10.76 27.76 9.10667 28.32 6.92 28.32H0V0.319998H6.64ZM6.36 15.72H4.4V24.32H6.92C7.69333 24.32 8.26667 24.12 8.64 23.72C9.01333 23.2933 9.2 22.5733 9.2 21.56V19.12C9.2 17.84 8.97333 16.96 8.52 16.48C8.09333 15.9733 7.37333 15.72 6.36 15.72ZM6.52 4.32H4.4V11.72H6.12C7 11.72 7.65333 11.4933 8.08 11.04C8.53333 10.5867 8.76 9.82666 8.76 8.76V7.2C8.76 5.28 8.01333 4.32 6.52 4.32Z" fill="#313037" />
               <path d="M20.29 6.76V21.88C20.29 23.72 21.05 24.64 22.57 24.64C24.09 24.64 24.85 23.72 24.85 21.88V6.76C24.85 4.92 24.09 4 22.57 4C21.05 4 20.29 4.92 20.29 6.76ZM15.89 21.6V7.04C15.89 4.8 16.4633 3.06666 17.61 1.84C18.7567 0.613332 20.41 0 22.57 0C24.73 0 26.3833 0.613332 27.53 1.84C28.6767 3.06666 29.25 4.8 29.25 7.04V21.6C29.25 23.84 28.6767 25.5733 27.53 26.8C26.3833 28.0267 24.73 28.64 22.57 28.64C20.41 28.64 18.7567 28.0267 17.61 26.8C16.4633 25.5733 15.89 23.84 15.89 21.6Z" fill="#313037" />
               <path d="M36.1494 6.76V21.88C36.1494 23.72 36.9094 24.64 38.4294 24.64C39.9494 24.64 40.7094 23.72 40.7094 21.88V6.76C40.7094 4.92 39.9494 4 38.4294 4C36.9094 4 36.1494 4.92 36.1494 6.76ZM31.7494 21.6V7.04C31.7494 4.8 32.3227 3.06666 33.4694 1.84C34.616 0.613332 36.2694 0 38.4294 0C40.5894 0 42.2427 0.613332 43.3894 1.84C44.536 3.06666 45.1094 4.8 45.1094 7.04V21.6C45.1094 23.84 44.536 25.5733 43.3894 26.8C42.2427 28.0267 40.5894 28.64 38.4294 28.64C36.2694 28.64 34.616 28.0267 33.4694 26.8C32.3227 25.5733 31.7494 23.84 31.7494 21.6Z" fill="#313037" />
               <path d="M58.0088 28.32L53.7288 17.16L52.3688 19.72V28.32H47.9688V0.319998H52.3688V12.52L58.1287 0.319998H62.5288L56.4088 12.8L62.5288 28.32H58.0088Z" fill="#313037" />
               <path d="M63.7759 7.04C63.7759 4.77333 64.3226 3.04 65.4159 1.84C66.5093 0.613332 68.1226 0 70.2559 0C72.3893 0 74.0026 0.613332 75.0959 1.84C76.1893 3.04 76.7359 4.77333 76.7359 7.04V7.92H72.5759V6.76C72.5759 4.92 71.8426 4 70.3759 4C68.9093 4 68.1759 4.92 68.1759 6.76C68.1759 7.53333 68.3359 8.26667 68.6559 8.96C68.9759 9.65333 69.3893 10.28 69.8959 10.84C70.4026 11.4 70.9626 11.96 71.5759 12.52C72.1893 13.0533 72.7893 13.6267 73.3759 14.24C73.9893 14.8267 74.5493 15.4667 75.0559 16.16C75.5626 16.8267 75.9759 17.6267 76.2959 18.56C76.6159 19.4933 76.7759 20.5067 76.7759 21.6C76.7759 23.8667 76.2159 25.6133 75.0959 26.84C73.9759 28.04 72.3493 28.64 70.2159 28.64C68.0826 28.64 66.4559 28.04 65.3359 26.84C64.2159 25.6133 63.6559 23.8667 63.6559 21.6V19.88H67.8159V21.88C67.8159 23.6933 68.5759 24.6 70.0959 24.6C71.6159 24.6 72.3759 23.6933 72.3759 21.88C72.3759 20.84 72.0826 19.8667 71.4959 18.96C70.9093 18.0267 70.1893 17.1867 69.3359 16.44C68.5093 15.6933 67.6693 14.92 66.8159 14.12C65.9626 13.2933 65.2426 12.28 64.6559 11.08C64.0693 9.85333 63.7759 8.50667 63.7759 7.04Z" fill="#313037" />
               <path d="M78.0169 4.32V0.319998H91.6169V4.32H87.0169V28.32H82.6169V4.32H78.0169Z" fill="#313037" />
               <path d="M97.5947 6.76V21.88C97.5947 23.72 98.3547 24.64 99.8747 24.64C101.395 24.64 102.155 23.72 102.155 21.88V6.76C102.155 4.92 101.395 4 99.8747 4C98.3547 4 97.5947 4.92 97.5947 6.76ZM93.1947 21.6V7.04C93.1947 4.8 93.768 3.06666 94.9147 1.84C96.0614 0.613332 97.7147 0 99.8747 0C102.035 0 103.688 0.613332 104.835 1.84C105.981 3.06666 106.555 4.8 106.555 7.04V21.6C106.555 23.84 105.981 25.5733 104.835 26.8C103.688 28.0267 102.035 28.64 99.8747 28.64C97.7147 28.64 96.0614 28.0267 94.9147 26.8C93.768 25.5733 93.1947 23.84 93.1947 21.6Z" fill="#313037" />
               <path d="M123.094 28.32H118.614C118.347 27.52 118.214 26.3733 118.214 24.88V20.48C118.214 19.2 117.987 18.2933 117.534 17.76C117.081 17.2 116.347 16.92 115.334 16.92H113.814V28.32H109.414V0.319998H116.054C118.321 0.319998 119.974 0.853331 121.014 1.92C122.054 2.96 122.574 4.57333 122.574 6.76V8.96C122.574 11.84 121.614 13.7333 119.694 14.64C121.641 15.4667 122.614 17.4533 122.614 20.6V24.92C122.614 26.44 122.774 27.5733 123.094 28.32ZM115.934 4.32H113.814V12.92H115.534C116.414 12.92 117.067 12.6933 117.494 12.24C117.947 11.7867 118.174 11.0267 118.174 9.96V7.2C118.174 5.28 117.427 4.32 115.934 4.32Z" fill="#313037" />
               <path d="M129.908 4.32V12.12H135.948V16.12H129.908V24.32H137.508V28.32H125.508V0.319998H137.508V4.32H129.908Z" fill="#313037" />
            </svg>
         </Box>
         {/* </SvgIcon> */}
         <SearchInput />

         <Box sx={{
            display: {
               xs: 'block',
               xl: 'none'
            },

            alignSelf: 'center'
         }}
         >
            <Button onClick={toggleDrawer(true)}>
               <MenuIcon sx={{ fill: '#313037' }} />
            </Button>
            <Drawer
               anchor='right'
               open={isMenuOpen}
               onClose={toggleDrawer(false)}
            >
               {SideBar}
            </Drawer>
         </Box>
         {/* <Search>
            <StyledInputBase
               placeholder="Search…"
               inputProps={{ 'aria-label': 'search' }}
               onChange={handleInput}
               value={searchInputValue}
            />
            <Button onClick={handleSearch}
               sx={{
                  border: '1px solid',
                  borderLeft: 'none',
                  borderColor: 'bgColor.dark',
                  borderRadius: '0px',
                  padding: '3px',
                  height: 1,
                  width: '5%',
               }}
            >
               <SearchIcon sx={{ fill: '#4C4B5E' }} />
            </Button>

         </Search> */}
      </Box>
   );
}
