import React from "react";
import {useSelector} from "react-redux";
import TuitsItem
  from "./tuits-item";
import './index.css';

const TuitList = () => {
 const tuitArray = useSelector((state) => state.tuits);
 return(
   <ul className="list-group">
     {tuitArray.map(tuit =>
         <TuitsItem
           key={tuit._id}
           tuit={tuit}/>
       )
     }
   </ul>
 );
};

export default TuitList;