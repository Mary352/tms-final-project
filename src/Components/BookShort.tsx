
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { BookShortProps } from '../types/types';

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

   return (
      <Grid item xs={12} md={4} sx={{
         px: 4,
         my: 6
      }}>
         <Card onClick={() => {
            console.log('Card click');
         }} sx={{
            height: '100%',
            maxWidth: 345,
            p: 1,
            // mx: 4,

         }}>
            <CardActionArea>
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
               </CardContent>
               <Typography gutterBottom variant="h3" component="h3">
                  {book.price}
               </Typography>
            </CardActionArea>
         </Card>
      </Grid>
   );
}