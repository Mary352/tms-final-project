// import styled from "@mui/styled";
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { setSearchInput } from "../store/bookSlice";
import { useAppSelector, useAppDispatch } from "../store/store";
import { SearchInputProps } from '../types/types';

const SearchWrapperDesktop = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   width: '100%',
   // backgroundColor: '#00ff00',
   [theme.breakpoints.down('xl')]: {
      display: 'none',
   }


   // [theme.breakpoints.down('xl')]: {
   //    // width: '20ch',

   // },
   // position: 'relative',
   // margin: '0 auto',
   // marginTop: 0,
   // marginBottom: 0,
   // marginRight: 'auto',
   // marginLeft: 'auto',

   // marginY: 0,
   // justifyContent: 'center',
   // borderRadius: theme.shape.borderRadius,
   // backgroundColor: alpha(theme.palette.common.white, 0.15),
   // '&:hover': {
   //    backgroundColor: alpha(theme.palette.common.white, 0.25),
   // },
   // marginRight: theme.spacing(2),
   // marginLeft: 0,
   // [theme.breakpoints.up('md')]: {
   //    // marginLeft: theme.spacing(3),
   //    // width: 'auto',
   // },
}));

const SearchWrapperTablet = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   width: '100%',
   // backgroundColor: '#00ff00',
   // [theme.breakpoints.down('xl')]: {
   //    display: 'none',
   // }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   border: '1px solid',
   borderRight: 'none',
   borderColor: theme.palette.bgColor.dark,
   // height: '56px',
   width: '35%',
   padding: 0,
   // margin: '0 auto',
   '& .MuiInputBase-input': {
      padding: `${theme.spacing(3)} 0px ${theme.spacing(3)} ${theme.spacing(5)}`,
      // !
      width: '100%',
   },
}));

export const SearchInput = ({ tablet }: SearchInputProps) => {

   const searchInputValue = useAppSelector(state => state.books.searchInputValue)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (searchInputValue) {
         navigate(`/search/${searchInputValue}`)
         dispatch(setSearchInput(''))
      }
      else navigate('/')
   }

   const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

      dispatch(setSearchInput(e.target.value))
   }

   const SearchField = (<StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleInput}
      value={searchInputValue}
   />)

   const SearchButton = (
      <Button onClick={handleSearch}
         sx={{
            border: '1px solid',
            borderLeft: 'none',
            borderColor: 'bgColor.dark',
            borderRadius: '0px',
            padding: '3px',
            height: 1,
            width: '5%',
            // margin: '0 auto'
            // height: '56px'
         }}
      >
         {/* <SearchIconWrapper> */}
         <SearchIcon sx={{ fill: '#4C4B5E' }} />
         {/* </SearchIconWrapper> */}
      </Button>
   )

   // if (tablet) {
   //    return ()
   // }

   return (
      <SearchWrapperDesktop>
         {SearchField}
         {SearchButton}
      </SearchWrapperDesktop>
   )
}