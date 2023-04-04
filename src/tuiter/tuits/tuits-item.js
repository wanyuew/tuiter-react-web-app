import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitsItem = ( {tuit}) => { const dispatch = useDispatch();
            const deleteTuitHandler = (id) => {
                 dispatch(deleteTuitThunk(id));
            }
    return (
      <li className="list-group-item">
        <div className="row">
            <div className="col-2">
                   <img className="rounded-circle" height={48} src={`/images/${tuit.image}`}/>
            </div>
            <div className="col-10 container">
                <span className="fw-bolder">{tuit.userName}</span>
                <span className="m-1 bi bi-patch-check-fill icon-blue"></span>
                <span>{tuit.handle}·{tuit.time}</span>
                <span className="col-2">
                 <i className="bi bi-three-dots float-end"></i>
                </span>
                <i className="bi bi-x-lg float-end wd-tuit-delete" onClick={() => deleteTuitHandler(tuit._id)}> </i>
                <div> {tuit.tuit}</div>
                <TuitStats  liked={tuit.liked} likes={tuit.likes} replies={tuit.replies} retuits={tuit.retuits} tuit={tuit}></TuitStats>
            </div>
       </div>
     </li>
  );
};

export default TuitsItem;