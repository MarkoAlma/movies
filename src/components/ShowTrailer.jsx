import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FaYoutube } from "react-icons/fa";
import { getDetailsData, no_image } from '../../utils';
import { useQuery } from 'react-query';

export const ShowTrailer = ({type, id}) => {

 const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
 const youtubeUrl = "https://www.youtube.com/watch?v="
const {data, isLoading, isError} = useQuery({queryKey:['details', urlVideos], queryFn:getDetailsData}) 
data && console.log(data);

  return (
    <div style={{paddingTop:'30px'}}>
    <Button
      variant="contained"
      startIcon={<FaYoutube />}
      href={data && data?.results[0]?.key ? youtubeUrl+data.results[0].key : no_image}
      target='_blank'
    >
      Watch Trailer
    </Button>
    </div>
  );
}
