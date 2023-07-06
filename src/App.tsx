// import { Navigation } from "./Components/Navigation";
import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { NewBookList } from './Components/NewBooksList';
import { Navigation } from './Components/Navigation';

export const App = () => {

  return (
    // <></>

    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}


      <Navigation />
      {/* <NewBookList></NewBookList> */}
      {/* <Button variant="contained" sx={{ bgcolor: 'primary.main' }}>Hello World</Button> */}


    </React.Fragment>
  );
};
