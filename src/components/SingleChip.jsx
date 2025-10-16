import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { useState } from 'react';
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { blue } from '@mui/material/colors';

export const SingleChip = ({id,name, selectedGenres, setSelectedGenres}) => {
    const [isSelected, setIsSelected] = useState(false)
  const handleClick = () => {
    setIsSelected(!isSelected)
    if (selectedGenres.indexOf(id) == -1) {
      setSelectedGenres(prev => [...prev, id])
    }else {
      setSelectedGenres(prev => prev.filter(obj => obj != id))
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip style={{color:'lightblue'}}
        label={name}
        onClick={handleClick}
        icon={isSelected ? <MdOutlineRadioButtonChecked/>:<MdOutlineRadioButtonUnchecked/>}
        sx={{backgroundColor: isSelected? 'rgb(60,60,60)' : 'rgb(20,20,20)'}}
      />
    </Stack>
  );
}
