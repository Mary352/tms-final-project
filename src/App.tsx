// import { Navigation } from "./Components/Navigation";
import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

export const App = () => {

  return (
    // <Navigation />
    // <></>

    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}

      <div>
        <Button variant="contained" sx={{ bgcolor: 'primary.main' }}>Hello World</Button>
      </div>

    </React.Fragment>
  );
};


export default App;
