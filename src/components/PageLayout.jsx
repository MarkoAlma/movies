import { Box, colors, Container, Typography } from '@mui/material'
import React from 'react'
import { ContentPagination } from './ContentPagination'
import Genres from './Genres'

const PageLayout = ({title, children, page, setPage, type, selectedGenres, setSelectedGenres}) => {
  return (
    <>
    <Container maxWidth={false} sx={{background:'linear-gradient(to right,#3730a3,#4f46e5)', color:'white', paddingBottom:'50px', minHeight:'100vh'}}> 
        <Typography variant='h3' sx={{textTransform:'uppercase', fontWeight:'bold', letterSpacing:3, textAlign:'center', p:'5px', background:'linear-gradient(to right,#38bdf8,#dbeafe)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>{title}</Typography>
          {title != "Search page" && <Genres type={type} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/> }
        <Box>{children}</Box>
          <Box display={'flex'} justifyContent={'center'} pb={'20px'}>
    <div style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
      <ContentPagination page={page} setPage={setPage}/>
    </div>
    </Box>
    </Container>

    </>
  )
}

export default PageLayout
