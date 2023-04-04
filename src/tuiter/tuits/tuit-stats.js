import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
   { tuit
      }) => {
    const dispatch = useDispatch();
    const clickLike = () => {
            tuit.liked ?  dispatch(updateTuitThunk({
                     ...tuit,
                      likes: tuit.likes - 1,
                      liked: false

            })) :  dispatch(updateTuitThunk({
                       ...tuit,
                       likes: tuit.likes + 1,
                       liked: true
                    }))

        }


   const clickDislike = () => {
        tuit.disliked ?  dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes - 1,
                    disliked: false,

        })) : dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1,
                    disliked: true

        }))
    }
    return (
        <div className="d-flex">
                   <div className="mt-2 col-2">
                       <i className="bi bi-chat"></i>
                       <span className="m-2">{tuit.replies}</span>
                    </div>
                   <div className="mt-2 col-2">
                       <i className="bi bi-recycle"></i>
                       <span className="m-2">{tuit.retuits}</span>
                    </div>
                     <a  onClick= {clickLike} href= "#" className="text-decoration-none mt-2 col-2" >
                          {tuit.liked && <i className= "bi bi-heart-fill text-danger"></i>
                          }
                          {!tuit.liked && <i className= "bi bi-heart"></i>
                          }
                          <span>{tuit.likes}</span>
                     </a>

                      <a onClick= {clickDislike} href="#" className="text-decoration-none mt-2 col-2">
                            {tuit.disliked && <i className= "bi bi-hand-thumbs-down-fill"></i>}
                            {!tuit.disliked && <i className = "bi bi-hand-thumbs-down"></i>}
                            <span>{tuit.dislikes}</span>
                        </a>
                     <div className="mt-2 col-2">
                       <i className="bi bi-share"></i>
                     </div>
               </div>
);};
export default TuitStats;