import React from 'react'
import PageLayout from '../components/PageLayout'
import { Grid, Tab, Tabs, TextField } from '@mui/material'
import { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getSearchedData } from '../../utils';
import MyCard from '../components/MyCard';

const SearchPage = () => {
  const [page, setPage] = React.useState(1);
  const [txt, setTxt] = useState('')
  const [value, setValue] = useState(0)
  const {data, isLoading, isError} = useQuery({queryKey:['results', value==0?'movie':'tv',txt, page], queryFn:getSearchedData, enabled:!!txt})
  const inputRef = useRef()
  console.log(txt);
  console.log(value);
  data && console.log(data);
    const columns = [[], [], [], []];
  
  
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <PageLayout title="Search page"  page={page} setPage={setPage}>
      <div style={{display:'flex', flexDirection:'column'}}> <br />
      <div style={{display:'flex', alignItems:'center', gap:'20px', paddingBottom:'12px', justifyContent:'center'}}><TextField  id="standard-basic" label="Search" variant="standard" inputRef={inputRef}/> <FaSearch fontSize={'x-large'} onClick={()=>setTxt(inputRef.current.value)} style={{cursor:'pointer' }}/> </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Tabs style={{paddingBottom:'20px'}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{color:'lightblue'}} label="Movies"/>
          <Tab style={{color:'lightblue'}} label="TV Series"/>
        </Tabs>
      </div>


    {data && data.results.forEach((obj, index) => {
      value==0?
    columns[index % 4].push(<MyCard key={index} {...obj} type='movie'/>)
    :columns[index % 4].push(<MyCard key={index} {...obj} title={obj.name} type='tv'/>)
  })}

  
      <div className="card-flex" style={{justifyContent:'center'}}>
        <div className="els">{columns[0]}</div>
        <div className="mas">{columns[1]}</div>
        <div className="har">{columns[2]}</div>
        <div className="neg">{columns[3]}</div>
      </div>
      </div>
    </PageLayout>
  )
}

export default SearchPage
