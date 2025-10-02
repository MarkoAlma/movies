import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdMovie } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router';

export const MyBottomNav=()=> {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  const handleChange = (e, newValue) => {
    setValue(newValue)
    if (newValue == 0) navigate('/')
    else if (newValue == 1) navigate('/tvseries')
    else if (newValue == 2) navigate('/search')
  }
  return (
    <Box sx={{ width: 500, position:'fixed', bottom:0, backgroundColor:'darkblue'}}>
      <BottomNavigation
        sx={{backgroundColor:'lightgray'}}
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Movies" icon={<MdMovie />} />
        <BottomNavigationAction label="TVSeries" icon={<MdOutlineLiveTv />} />
        <BottomNavigationAction label="Search" icon={<FaSearch />} />
      </BottomNavigation>
    </Box>
  );
}
