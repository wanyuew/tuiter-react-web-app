import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active = ''}) => {
 return (
    <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>Home</Link>
        <Link to="/tuiter/explore_updated" className={`list-group-item ${active === 'explore_updated'?'active':''}`}>Explore</Link>

        <a className={`list-group-item
                            ${active === 'notifications'?'active':''}`}>
               Notifications
             </a>
             <a className={`list-group-item
                            ${active === 'messages'?'active':''}`}>
               Messages
             </a>
             <a className={`list-group-item
                            ${active === 'bookmarks'?'active':''}`}>
               Bookmarks
             </a>
             <a className={`list-group-item
                            ${active === 'lists'?'active':''}`}>
               Lists
             </a>
           <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>Profile</Link>
           <Link to="/tuiter/edit-profile" className={`list-group-item ${active === 'edit profile'?'active':''}`}>Edit Profile</Link>
              <a className={`list-group-item
                             ${active === 'more'?'active':''}`}>
                More
              </a>
    </div>
 );
};
export default NavigationSidebar;