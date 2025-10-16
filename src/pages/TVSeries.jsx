

import React from "react";
import PageLayout from "../components/PageLayout";
import { CircularProgress, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { getData } from "../../utils";
import MyCard from "../components/MyCard";
import { useState } from "react";

const TVSeries = () => {

    const [page, setPage] = React.useState(1);
      const [selectedGenres, setSelectedGenres] = useState([])
    const columns = [[], [], [], []];
      const { data, isLoading, isError } = useQuery({
        queryKey: ["tvdata", "tv", page,selectedGenres],
        queryFn: getData,
      });

  return (
    <PageLayout title="TV Series" page={page} setPage={setPage} type='tv' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}>
      {isLoading && <CircularProgress />}

      {data && data.results.forEach((obj, index) => {
    columns[index % 4].push(<MyCard type='tv' key={index} {...obj} title={obj.name}/>);
  })}

  
      <div className="card-flex" style={{justifyContent:'center'}}>
        <div className="els">{columns[0]}</div>
        <div className="mas">{columns[1]}</div>
        <div className="har">{columns[2]}</div>
        <div className="neg">{columns[3]}</div>
      </div>

    </PageLayout>
  )
}

export default TVSeries
