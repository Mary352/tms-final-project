import { Box, Typography } from "@mui/material"

export const LoadingInfo = () => {
   return (
      <Box sx={{
         maxWidth: '1200px',
         marginX: 'auto',
         marginY: '0',
         paddingX: { xs: '25px', md: '35px', xl: '40px' },
      }}
      >
         <Typography variant="h1" component='h1'
            sx={{
               pt: { xs: 6, md: 8 },
               pb: { xs: 9, md: 12 },
               opacity: 0.7
            }}
         >
            Loading...
         </Typography>
      </Box>)
}