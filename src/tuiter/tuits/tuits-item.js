import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitsItem = ( {tuit = {"_id": "1",
                               "topic": "Space",
                               "userName": "SpaceX",
                               "time": "2h",
                               "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
                               "image": "spacex.png",
                               "liked": false,
                               "replies": 0,
                               "retuits": 0,
                               "likes": 0,
                               "handle": "@spacex",
                               "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    } }) => { const dispatch = useDispatch();
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
                <TuitStats tuit = {tuit}></TuitStats>
            </div>
       </div>
     </li>
  );
};

export default TuitsItem;