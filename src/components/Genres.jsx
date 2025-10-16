import React from 'react'
import { useQuery } from 'react-query'
import { getGenres } from '../../utils'
import { Stack } from '@mui/material'
import { SingleChip } from './SingleChip'
import { useContext } from 'react'
import { CategContext } from '../context/CategContext'


const Genres = ({type, selectedGenres, setSelectedGenres}) => {

    const {genreMovie, genreTV} = useContext(CategContext)

    genreMovie && console.log(genreMovie);
    genreTV && console.log(genreTV);
    
    

    const {data, isLoading, isError} = useQuery({queryKey:['genres', type], queryFn:getGenres})
    data && console.log(data);
    console.log(selectedGenres);
    
  return (
    <Stack direction={'row'} gap={1} flexWrap={'wrap'} justifyContent={'center'}>
        {data && data.genres.map(obj => 
            <SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        )}
    </Stack>
  )
}

export default Genres
