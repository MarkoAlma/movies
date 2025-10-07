import React from 'react'
import PageLayout from '../components/PageLayout'
import { CircularProgress, Grid } from '@mui/material'
import { useQuery } from 'react-query'
import { getData } from '../../utils'
import MyCard from '../components/MyCard'

const Movies = () => {
    const [page, setPage] = React.useState(1);
  const {data, isLoading, isError} = useQuery({queryKey:['moviesdata', 'movie',page], queryFn:getData})
  data && console.log(data);
  console.log(page);
  
  
  return (
    <PageLayout title="Movies" page={page} setPage={setPage}>
      {isLoading && <CircularProgress /> }
      <div className='card-grid'>
        {data && data.results.map(obj =>
        <div key={obj.id} style={{flexBasis:'25%'}}>
          <MyCard {...obj}/>
        </div>
        )}
      </div>
    </PageLayout>
  )
}

export default Movies
