import React, { useState, useEffect, createContext, useMemo } from 'react';
import axios from 'axios';


export const SpaceContext = createContext()

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_Key}&start_date=2022-01-1&end_date=2022-01-19`;


function SpaceContextProvider({children}) {

  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  // const [likes, setLikes] = useState(0)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      axios.get(url)
        .then((res) => {
          const data = res.data;
          const newSpace = []
          newSpace.push(data);
          
          // console.log(newSpace)
          setIsLoading(false);
          setSpaceData(newSpace);
        })
        .catch(function(error){
          console.log(error)
        })
    }
    getData()
  }, [])

  useEffect(() => {
    let newLocalLikes = JSON.parse(localStorage.getItem('likes'))
    if(newLocalLikes.length > 0){
      
    }
  })



  const value = {spaceData, isLoading}

  return (
      <SpaceContext.Provider value={value}>
        {children}
      </SpaceContext.Provider>
  );
}

export default SpaceContextProvider;
