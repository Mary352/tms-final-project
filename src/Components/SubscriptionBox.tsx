import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

export const SubscriptionBox = () => {

   const [email, setEmail] = useState('');

   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setEmail(e.target.value)
   }

   const handleSubscribe = () => {
      setEmail('')
   }

   return (
      <Box
         sx={{
            paddingX: { xs: 6, md: 14 },
            paddingY: { xs: 6, md: 16 },
            bgcolor: 'tertiary.light',
            marginY: { xs: 14, md: 18 }
         }}
      >
         <Typography
            variant="h2"
            // noWrap
            component="h2"
            sx={{
               pb: { xs: 3, md: 6 },
               textTransform: 'uppercase'
            }}
         >
            Subscribe to Newsletter
         </Typography>
         <Typography
            variant="subtitle1"
            // noWrap
            component="p"
            sx={{
               // display: { xs: 'none', sm: 'block' } 
               pb: { xs: 6, md: 8 },
               color: 'system.light',
               fontWeight: 400
            }}
         >
            Be the first to know about new IT books, upcoming releases, exclusive offers and more.
         </Typography>
         <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
            <TextField sx={{
               width: { xs: '100%', md: '80%' },
               bgcolor: '#fff',
               marginBottom: { xs: 6, md: 0 }
            }}
               label="Your email" variant="outlined" value={email} onChange={handleEmailChange} />

            <Button variant='contained' sx={{
               width: { xs: '100%', md: '20%' },
               paddingY: { xs: 4, md: 'inherit' },
               bgcolor: 'system.main',
               color: '#fff',
               textTransform: 'uppercase',
               '&:hover': {
                  bgcolor: 'system.dark'
               }
            }}
               onClick={handleSubscribe}
            >Subscribe</Button>
         </Box>
      </Box>
   )
}