import React,{useEffect} from "react";
import TuitItem from "./tuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id} post={tuit} /> )
            }
        </ul>
    );
};

export default TuitsList;