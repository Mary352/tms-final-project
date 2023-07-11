import { Box, Typography } from "@mui/material"

export const Footer = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            marginX: 'auto',
            marginY: '0',
            paddingX: 10,
            paddingY: 9,
            borderTop: '1px solid',
            borderColor: 'bgColor.dark'
         }}
      >
         <Typography
            variant="body1"
            // noWrap
            component="p"
            sx={{
               // display: { xs: 'none', sm: 'block' } 
               color: 'system.light'
            }}
         >
            ©2022 Bookstore
         </Typography>
         <Typography
            variant="body1"
            // noWrap
            component="p"
            sx={{
               // display: { xs: 'none', sm: 'block' } 
               color: 'system.light'
            }}
         >
            All rights reserved
         </Typography>
      </Box>
   )
}