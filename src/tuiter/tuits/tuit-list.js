import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import TuitItem from "./tuits-item.js";


const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    console.log(tuits)
    return(
        <ul className={'list-group mb-3'}>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
}

export default  TuitsList;

