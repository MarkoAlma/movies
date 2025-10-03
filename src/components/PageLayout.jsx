import { Box, colors, Container, Typography } from '@mui/material'
import React from 'react'

const PageLayout = ({title, children}) => {
  return (
    <Container maxWidth={false} sx={{background:'linear-gradient(to right,#3730a3,#4f46e5)', color:'white', paddingBottom:'50px', minHeight:'100vh'}}>
        <Typography variant='h3' sx={{textTransform:'uppercase', fontWeight:'bold', letterSpacing:3, textAlign:'center', p:'5px', background:'linear-gradient(to right,#38bdf8,#dbeafe)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>{title}</Typography>
        <Box>{children}</Box>
    </Container>
  )
}

export default PageLayout
