import React from "react";
import "./index.css";

const TuitsItem = (
    {
        tuit = {
              "topic": "Space",
              "userName": "SpaceX",
              "time": "2h",
              "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
              "image": "spacex.png",
              "liked": true,
              "replies": 123,
              "retuits": 432,
              "likes": 2345,
              "handle": "@spacex",
              "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
  ) => {
    return (
      <li className="list-group-item">
        <div className="row">
            <div className="col-2">
                   <img className="rounded-circle" height={48} src={`/images/${tuit.userImg}`}/>
            </div>
            <div className="col-10 container">
                <span className="fw-bolder">{tuit.userName}</span>
                <span className="m-1 bi bi-patch-check-fill icon-blue"></span>
                <span>@{tuit.handle}·{tuit.time}</span>
                <span className="col-2">
                 <i className="bi bi-three-dots float-end"></i>
                </span>
                <div> {tuit.content}</div>
                <div className="d-flex">
                    <div className="mt-3 col-3">
                     <i className="bi bi-chat"></i>
                     <span className="m-2">{tuit.replies}</span></div>
                    <div className="mt-3 col-3">
                     <i className="bi bi-recycle"></i>
                     <span className="m-2">{tuit.retuits}</span></div>
                     <div className="mt-3 col-3">
                      <i className="bi bi-heart"></i>
                      <span className="m-2">{tuit.likes}</span></div>
                     <div className="mt-3 col-3">
                      <i className="bi bi-download"></i></div>
                </div>
            </div>
       </div>
     </li>
  );
};

export default TuitsItemt;