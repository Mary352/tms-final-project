
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
            my: 6,
            mx: 4,
            // `calc(1em + ${theme.spacing(4)})`
            // !
            width: `calc(100%/3 - 32px)`
            // ...sx,
         }}
      // {...other}
      >
         <Card onClick={() => {
            console.log('Card click');
         }}
            sx={{
               height: '100%',
               width: '100%',
               p: 1,
            }}
            key={book.isbn13}>
            <CardActionArea onClick={() => { navigate(`/books/${book.isbn13}`) }}>
               <CardMedia
                  component="img"
                  // height="100%"
                  image={book.image}
                  alt="book"
               // sx={{ maxWidth: 0.8 }}
               />
               <CardContent>
                  <Typography gutterBottom variant="h3" component="h3">
                     {book.title}
                  </Typography>
                  <Typography variant="body1" color="system.light">
                     {book.subtitle}
                  </Typography>
                  <Typography gutterBottom variant="h3" component="h3">
                     {book.price}
                  </Typography>
               </CardContent>

            </CardActionArea>
         </Card>

      </Box>

      // </Grid>
   );
}