
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { BookShortProps } from '../types/types';
import { useNavigate } from 'react-router-dom';

export const BookShort = ({ book }: BookShortProps) => {
   // const BOOK_TEST = {
   //    "title": "Google SketchUp Cookbook",
   //    "subtitle": "Practical Recipes and Essential Techniques",
   //    "isbn13": "9780596155117",
   //    "price": "$8.88",
   //    "image": "https://itbook.store/img/books/9780596155117.png",
   //    "url": "https://itbook.store/books/9780596155117"
   // }

   // const BOOK_TEST_LONG_TITLE = {
   //    "title": "Professional SharePoint 2010 Branding and User Interface Design",
   //    "subtitle": "",
   //    "isbn13": "9780470584644",
   //    "price": "$3.98",
   //    "image": "https://itbook.store/img/books/9780470584644.png",
   //    "url": "https://itbook.store/books/9780470584644"
   // }

   const navigate = useNavigate()

   return (
      // <Grid item xs={12} md={3} sx={{
      //    mx: 4,
      //    my: 6,
      //    maxWidth: 300
      // }}>
      <Box
         sx={{
            my: { xs: '18px', md: 6 },
            mx: { md: 4 },
            width: {
               xs: '100%',
               md: 'calc(100%/2 - 32px)',
               xl: `calc(100%/3 - 32px)`
            }
         }}
      >
         <CardActionArea onClick={() => { navigate(`/books/${book.isbn13}`) }}
            sx={{
               height: '100%',
               width: '100%',
            }}>
            <Card
               sx={{
                  bgcolor: 'tertiary2.main',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column'
               }}
               key={book.isbn13}>
               {/* <CardActionArea
                  sx={{
                     display: 'flex',
                     flexDirection: 'column'

                  }}
               > */}
               <CardMedia
                  component="img"
                  // height="100%"
                  image={book.image}
                  alt="book"
                  sx={{
                     width: '65%',
                     marginX: 'auto',
                     marginY: '0',
                     // bgcolor: '#00ff00'
                  }}
               />
               <CardContent
                  sx={{
                     bgcolor: '#fff',
                     flexGrow: 1,
                     pt: 5,
                     pb: { xs: 8, md: 10 }
                  }}
               >
                  <Typography variant="h3" component="h3"
                     sx={{ pb: 2 }}
                  >
                     {book.title}
                  </Typography>
                  <Typography variant="body1" component='p' color="system.light">
                     {book.subtitle}
                  </Typography>
               </CardContent>
               <CardContent
                  sx={{
                     bgcolor: '#fff',
                     alignSelf: 'stretch',
                     paddingY: 0
                  }}
               >
                  <Typography variant="h3" component="h3"
                     sx={{}}>
                     {book.price}
                  </Typography>
               </CardContent>
               {/* </CardActionArea> */}
            </Card>
         </CardActionArea>
      </Box >

      // </Grid>
   );
}