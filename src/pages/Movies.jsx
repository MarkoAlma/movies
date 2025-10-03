import React from 'react'
import PageLayout from '../components/PageLayout'
import { CircularProgress, Grid } from '@mui/material'
import { useQuery } from 'react-query'
import { getData } from '../../utils'
import MyCard from '../components/MyCard'

const Movies = () => {
  const {data, isLoading, isError} = useQuery({queryKey:['moviesdata', 'movie'], queryFn:getData})
  data && console.log(data);
  
  return (
    <PageLayout title="Movies">
      {isLoading && <CircularProgress /> }
      <div style={{display:'grid', alignItems:'center', width:'1500px', gridTemplateColumns:'repeat(4,1fr)'}}>
        {data && data.results.map(obj =>
          <MyCard {...obj} key={obj.id}/>
        )}
      </div>
    </PageLayout>
  )
}

export default Movies
