import React from "react";
import PageLayout from "../components/PageLayout";
import { CircularProgress, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { getData } from "../../utils";
import MyCard from "../components/MyCard";
import { useState } from "react";

const Movies = () => {
  const [page, setPage] = React.useState(1);
    const [selectedGenres, setSelectedGenres] = useState([])
  const { data, isLoading, isError } = useQuery({
    queryKey: ["moviesdata", "movie", page,selectedGenres],
    queryFn: getData,
  });
  const columns = [[], [], [], []];

  data && console.log(data);

  console.log(page);
  

  return (
    <PageLayout title="Movies" page={page} setPage={setPage} type='movie' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}>
      {isLoading && <CircularProgress />}

      {data && data.results.forEach((obj, index) => {
    columns[index % 4].push(<MyCard key={index} {...obj} type='movie'/>);
  })}

  
      <div className="card-flex" style={{justifyContent:'center'}}>
        <div className="els">{columns[0]}</div>
        <div className="mas">{columns[1]}</div>
        <div className="har">{columns[2]}</div>
        <div className="neg">{columns[3]}</div>
      </div>

    </PageLayout>
  );
};

export default Movies;