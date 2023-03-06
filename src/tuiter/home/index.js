import React from "react";
import tweetsArray from './tweets.json';
import TweetItem
  from "./tweet-item";

const HomeComponent = () => {
 return(
   <ul className="list-group">
     {
       tweetsArray.map(tweet =>
         <TweetItem
           key={tweet._id} tweet={tweet}/> )
     }
   </ul>
 );
};
export default HomeComponent;