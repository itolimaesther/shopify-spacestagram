import React, { useState, useContext } from 'react';
import { SpaceContext } from '../context/SpaceContext'; 
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareAlt} from '@fortawesome/free-solid-svg-icons'


const SpacesCard = () => {

    const { spaceData, isLoading } = useContext(SpaceContext)

    const [like, setLike] = useState(false)
    
    
    const override = css`
        display: block;
        margin: 0 auto;
        text-align: center;
        border-color: #ffffff;
    `;

    const addLike = (title) => {

        let newLike = JSON.parse(localStorage.getItem("likes"))
            if(newLike === null){
                let newLikeArr = []
                newLikeArr.push(title)
                localStorage.setItem("likes", JSON.stringify(newLikeArr))
                setLike(true)
            }else{
                let result = [...newLike, title]
                localStorage.setItem("likes", JSON.stringify(result))
                console.log(result)
                setLike(false)
            }
        
    }

    

  return (
    <div className='cards-container'>
        {isLoading ? (
        <ClipLoader loading={isLoading} css={override} size={50} />
      ) : (<div className='space-cards'>
            {spaceData[0] && spaceData[0].map((item, index) => {
            return (
            <div className='space-wrapper' key={index}>
                <img className='space-img' src={item.hdurl} alt={item.title} />
                <div className='space-info'>
                    <h1>{item.copyright}</h1>
                    <p>{item.date}</p>
                    <p>{item.explanation}</p>
                    <div className='icons'>
                        
                        <div>
                            {
                                JSON.parse(localStorage.getItem("likes")) && JSON.parse(localStorage.getItem("likes")).includes(item.title) ? (
                                    <FontAwesomeIcon  onClick={() => addLike(item.title)}  className="heart" icon={faHeart} style={{color: "black", borderColor: "black"}} />) : (<FontAwesomeIcon onClick={() => addLike(item.title)} className='heart' icon={faHeart} style={{color: "red", borderColor: "red"}} /> )
                            }
                        </div>
                        <div>
                            <FontAwesomeIcon  className='share' icon={faShareAlt} />
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
        </div>)}
    </div>
  );
};

export default SpacesCard;
