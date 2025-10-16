import React, { createContext, useEffect, useState } from 'react';
import { getGenres } from '../../utils';
import { useQuery } from 'react-query';

export const CategContext = createContext();

export const CategProvider = ({ children }) => {
  //const [categories, setCategories] = useState(null);
  
    const {data:genreMovie, isLoading, isError} = useQuery({queryKey:['genres', 'movie'], queryFn:getGenres})
    const {data:genreTV, isLoading:isLoadingTV, isError:isErrorTV} = useQuery({queryKey:['genres', 'tv'], queryFn:getGenres})

    return (
    <CategContext.Provider value={{ genreMovie, genreTV}}>                               
      {children}
    </CategContext.Provider>
  );
};