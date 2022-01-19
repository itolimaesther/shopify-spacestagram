import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const SpaceContext = createContext()

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_Key}&start_date=2019-01-19&end_date=2021-01-19`;


function SpaceContextProvider({children}) {
  
  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      axios.get(url)
        .then((res) => {
          const data = res.data;
          const newSpace = []
          newSpace.push(data);
          setIsLoading(false);
          localStorage.setItem('likes', JSON.stringify(newSpace))
          let newLocalSpace = JSON.parse(localStorage.getItem('likes'))
          setSpaceData(newLocalSpace);
        })
        .catch(function(error){
          console.log(error)
        })
    }
    getData()
  }, [])



  const value = {spaceData, likes, setLikes, isLoading}

  return (
      <SpaceContext.Provider value={value}>
        {children}
      </SpaceContext.Provider>
  );
}

export default SpaceContextProvider;
