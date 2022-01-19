import React, { useContext } from 'react';
import { SpaceContext } from '../context/SpaceContext'; 
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareAlt} from '@fortawesome/free-solid-svg-icons'
import addNotification from 'react-push-notification';


const SpacesCard = () => {

    const { spaceData, isLoading, likes, setLikes } = useContext(SpaceContext)
    
    const override = css`
        display: block;
        margin: 0 auto;
        text-align: center;
        border-color: #ffffff;
    `;

    const addLike = () => {
        let newLike = JSON.parse(localStorage.getItem("likes"))
        newLike = likes + 1
        localStorage.setItem("likes", JSON.stringify(newLike))
        setLikes({
            likes: newLike
        })
        addNotification({
            message: `${likes}`,
            theme:'red',
            duration: 1000,
            native: true
        })
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
                    <p>{item.explanation}</p>
                </div>
                <div className='icons'>
                    <div>
                        <FontAwesomeIcon onClick={addLike()} className='heart' icon={faHeart} />
                        <p>{likes}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon  className='share' icon={faShareAlt} />
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
