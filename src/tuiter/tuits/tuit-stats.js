import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
   {  replies,
      retuits,
      likes,
      liked,
      tuit,
      disliked,
      dislikes,
      }) => {
//     const [likedFlag, setLiked] = useState(liked);
//     const changeLiked = () => {
//         setLiked(!likedFlag);
//     };
    const dispatch = useDispatch();
//     const clickLike = () => {
//             tuit.liked === false ?  dispatch(updateTuitThunk({
//                 ...tuit,
//                 likes: tuit.likes + 1,
//                 liked: true
//             })) :  dispatch(updateTuitThunk({
//                         ...tuit,
//                         likes: tuit.likes - 1,
//                         liked: false
//                     }))
//
//         }

        const clickLike = () => {
            dispatch(
                          updateTuitThunk({
                            ...tuit,
                            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
                            liked: !tuit.liked,
                          })
               )

        }

        const clickDislike = () => {
            tuit.disliked === false ?  dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1,
                disliked: true
            })) : dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes - 1,
                        disliked: false,
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
                     <a href="#" className="mt-2 col-2">
                            <div
                              onClick= {()=>clickLike()}>
                              <i
                                className={tuit.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"}
                                aria-hidden={true}
                              ></i>
                              <span>{tuit.likes}</span>
                            </div>
                          </a>
                      <a href="#" className="mt-2 col-2">
                          <div
                            onClick= {()=>clickDislike()}>
                            <i
                              className={tuit.disliked? "bi bi-hand-thumbs-down-fill" : "bi bi-hand-thumbs-down"}
                              aria-hidden={true}
                            ></i>
                            <span>{tuit.dislikes}</span>
                          </div>
                        </a>
                     <div className="mt-2 col-2">
                       <i className="bi bi-share"></i>
                     </div>
               </div>
);};
export default TuitStats;