import React from "react";
import "./index.css";

const TweetItem = (
    {
        tweet = {
            "userName" : "The Verge",
            "time": "23h",
            "content": "Yes, Elon Musk created a special system for showing you all his tweets first. After his Super Bowl tweet did worse numbers than President Biden’s, Twitter’s CEO ordered major changes to the algorithm.",
            "handle": "theverge",
            "userImg": "verge.png",
            "tweetImg": "tweet1_image.png",
            "commentNo": "585",
            "retweetNo": "1160",
            "likes": "11.1K"
        }
    }
  ) => {
    return (
      <li className="list-group-item">
        <div className="row">
            <div className="col-2">
                   <img className="rounded-circle" height={48} src={`/images/${tweet.userImg}`}/>
            </div>
            <div className="col-10 container">
                <span className="fw-bolder">{tweet.userName}</span>
                <span className="m-1 bi bi-patch-check-fill icon-blue"></span>
                <span>@{tweet.handle}·{tweet.time}</span>
                <span className="col-2">
                 <i className="bi bi-three-dots float-end"></i>
                </span>
                <div> {tweet.content}</div>
                <img className="col-11 mt-3 rounded-2" height={300} src={`/images/${tweet.tweetImg}`}/>
                <div className="d-flex">
                    <div className="mt-3 col-3">
                     <i className="bi bi-chat"></i>
                     <span className="m-2">{tweet.commentNo}</span></div>
                    <div className="mt-3 col-3">
                     <i className="bi bi-recycle"></i>
                     <span className="m-2">{tweet.retweetNo}</span></div>
                     <div className="mt-3 col-3">
                      <i className="bi bi-heart"></i>
                      <span className="m-2">{tweet.likes}</span></div>
                     <div className="mt-3 col-3">
                      <i className="bi bi-download"></i></div>
                </div>
            </div>
       </div>
     </li>
  );
};

export default TweetItem;