import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const SpaceContext = createContext()

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_Key}&start_date=2019-01-19&end_date=2020-01-19`;


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
          setSpaceData(newSpace);
          localStorage.setItem('likes', JSON.stringify(likes))
          let newLocalLikes = JSON.parse(localStorage.getItem('likes'))
          setLikes(newLocalLikes)
        })
        .catch(function(error){
          console.log(error)
        })
    }
    getData()
  }, [likes])



  const value = {spaceData, likes, setLikes, isLoading}

  return (
      <SpaceContext.Provider value={value}>
        {children}
      </SpaceContext.Provider>
  );
}

export default SpaceContextProvider;
