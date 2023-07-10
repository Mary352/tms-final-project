import { useNavigate, useParams } from "react-router-dom";
import { OneBookPageProps } from "../types/types";
import { useAppSelector, useAppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { getBookByISBNThunk } from "../store/bookSlice";
import { Box, Button, Card, CardContent, CardMedia, Rating, Tab, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const OneBookPage = () => {
   const { isbn13 } = useParams();

   const [value, setValue] = useState('1')

   const book = useAppSelector((state) => state.books.bookDetailed)
   const dispatch = useAppDispatch()

   const navigate = useNavigate()

   useEffect(() => {
      isbn13 && dispatch(getBookByISBNThunk(isbn13))

   }, [isbn13])

   const handleChange = (e: React.SyntheticEvent, newVal: string) => {
      setValue(newVal)
   }

   const handleClickBack = () => {
      navigate(-1)
   }

   if (!book.title) return (<Typography variant="h1" component='h1'>Book not found</Typography>)

   return (
      <Box sx={{
         maxWidth: '1120px',
         marginX: 'auto',
         marginY: '0',
         paddingX: '40px'
      }}>
         <Button onClick={handleClickBack} sx={{ mt: '70px' }}>
            <KeyboardBackspaceIcon fontSize="large" sx={{ color: "system.main" }} />
         </Button>

         <Typography variant="h1" component='h1' sx={{ pt: '30px', pb: '50px' }}>{book.title}</Typography>

         <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
         }}>
            <Card
               // sx={{ width: '545px' }}
               sx={{ bgcolor: 'tertiary2.light', width: '440px' }}
            >
               <CardMedia
                  component="img"
                  image={book.image}
                  alt="book"
                  sx={{ width: '80%', marginX: 'auto', marginY: '0' }}
               />
            </Card>
            <Card sx={{ width: '450px' }}>
               <CardContent>
                  {/* <Typography gutterBottom variant="h3" component="h3">
                  {book.title}
               </Typography>
               <Typography variant="body1" color="system.light">
                  {book.subtitle}
               </Typography> */}
                  {/* <TableContainer>
                  <Table aria-label="book props table">
                     <TableBody>
                        <TableRow >
                           <TableCell>Author</TableCell>
                           <TableCell>{book.authors}</TableCell>
                        </TableRow>
                     </TableBody>
                  </Table>
               </TableContainer> */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                     <Typography gutterBottom variant="h2" component="h2">
                        {book.price}
                     </Typography>
                     <Rating value={Number(book.rating)}
                        sx={{
                           pr: '10px',
                           alignSelf: 'center'
                           // fontSize: '40px'
                        }} />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                     <Typography gutterBottom variant="body1" component="p" sx={{ color: 'system.light' }}>
                        Authors
                     </Typography>
                     <Typography maxWidth='125px' gutterBottom variant="body1" component="p">
                        {book.authors}
                     </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                     <Typography gutterBottom variant="body1" component="p" sx={{ color: 'system.light' }}>
                        Publisher
                     </Typography>
                     <Typography maxWidth='125px' gutterBottom variant="body1" component="p">
                        {book.publisher}
                     </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                     <Typography gutterBottom variant="body1" component="p" sx={{ color: 'system.light' }}>
                        Language
                     </Typography>
                     <Typography maxWidth='125px' gutterBottom variant="body1" component="p">
                        {book.language}
                     </Typography>
                  </Box>
               </CardContent>
            </Card>
         </Box>

         <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', pt: '70px' }}>
               <TabList aria-label="Tabs for book props" onChange={handleChange} textColor="secondary" indicatorColor="secondary" >
                  <Tab sx={{ color: 'system.light', fontSize: '16px', textTransform: 'capitalize' }} label='Description' value='1' />
                  <Tab sx={{ color: 'system.light', fontSize: '16px', textTransform: 'capitalize' }} label='Authors' value='2' />
                  {/* <Tab label='Reviews' value='3' /> */}
               </TabList>
            </Box>
            <TabPanel value='1' sx={{ pt: '50px', pb: '70px', fontSize: '16px' }}>{book.desc}</TabPanel>
            <TabPanel value='2' sx={{ pt: '50px', pb: '70px', fontSize: '16px' }}>{book.authors}</TabPanel>
         </TabContext>
      </Box>)
}
