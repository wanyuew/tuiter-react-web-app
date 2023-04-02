import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const TuitStats = (
    {
        liked, likes, replies, retuits
    }
) => {
    const [likedFlag, setLiked] = useState(liked);
    const changeLiked = () => {
        setLiked(!likedFlag);
    };

    let [likeCount, setLikeCount] = useState(likes);
    let incrementLike = () => {
        setLikeCount(likeCount++);
    };

    return (
        <div className="d-flex">
                   <div className="mt-3 col-3">
                       <i className="bi bi-chat"></i>
                       <span className="m-2">{replies}</span>
                    </div>
                   <div className="mt-3 col-3">
                       <i className="bi bi-recycle"></i>
                       <span className="m-2">{retuits}</span>
                    </div>
                    <div className="mt-3 col-3">
                       <Link onClick= {() => {
                            changeLiked();
                            incrementLike();
                       }}>
                       <i className= {`${likedFlag ? "bi bi-heart-fill text-danger": "bi bi-heart"}`}></i>
                       <span className="m-2">{likes}</span></Link>
                     </div>
                     <div className="mt-3 col-3">
                       <i className="bi bi-share"></i>
                     </div>
               </div>
);};
export default TuitStats;