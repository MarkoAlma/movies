import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdMovie } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export const MyBottomNav=()=> {
  const currentUrl = window.location.pathname
  const initialValue = currentUrl.includes('tvseries') ? 1 : currentUrl.includes('search') ? 2 : 0
  const [value, setValue] = React.useState(initialValue);
  const navigate = useNavigate()

  const handleChange = (e, newValue) => {
    setValue(newValue)
    if (newValue == 0) navigate('/')
    else if (newValue == 1) navigate('/tvseries')
    else if (newValue == 2) navigate('/search')
  }



  return (
    <Box sx={{ width: '100vw',  position:'fixed', bottom:0, display:'flex', zIndex:'100'}}>
      <BottomNavigation
        sx={{backgroundColor:'rgb(20,20,80)'}}
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction className='aktiv' sx={{color:'white'}} style={{ fontSize:'larger'  }} label="Movies" icon={<MdMovie />} />
        <BottomNavigationAction className='aktiv' sx={{color:'white'}} label="TVSeries" style={{ fontSize:'larger'}} icon={<MdOutlineLiveTv />} />
        <BottomNavigationAction className='aktiv' sx={{color:'white'}} label="Search" icon={<FaSearch />} style={{ fontSize:'larger'}} />
      </BottomNavigation>
    </Box>
  );
}
