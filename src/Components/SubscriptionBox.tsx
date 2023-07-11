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
            paddingX: 14,
            paddingY: 16,
            bgcolor: 'tertiary.light',
            marginY: 18
         }}
      >
         <Typography
            variant="h2"
            // noWrap
            component="h2"
            sx={{
               // display: { xs: 'none', sm: 'block' } 
               // pt: 18,
               pb: 6,
               // pb: 6,
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
               pb: 8,
               color: 'system.light',
               fontWeight: 400
            }}
         >
            Be the first to know about new IT books, upcoming releases, exclusive offers and more.
         </Typography>
         <Box sx={{ display: 'flex', width: '100%' }}>
            <TextField sx={{ width: '80%' }} label="Your email" variant="outlined" value={email} onChange={handleEmailChange} />
            <Button variant='contained' sx={{
               width: '20%',
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