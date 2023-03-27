import React from "react";
import tuitsArray from '../tuits/tuit-list/tuitsItems.json';
import TuitsItem
  from "../tuits/tuit-list/tuits-item.js";

const HomeComponent = () => {
 return(
   <ul className="list-group">
     {
       tuitsArray.map(tuit =>
         <TuitsItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};
export default HomeComponent;