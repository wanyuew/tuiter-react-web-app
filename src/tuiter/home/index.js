import React from "react";
// import tuitsArray from '../tuits/tuit-list/tuitsItems.json';
// import TuitsItem
//   from "../tuits/tuit-list/tuits-item.js";

import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening"

const HomeComponent = () => {
 return(
   <>
    <h4>Home</h4>
    <WhatsHappening/>
    <TuitList/>
   </>
 );
};
export default HomeComponent;