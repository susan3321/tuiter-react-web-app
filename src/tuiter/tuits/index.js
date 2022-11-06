import React from "react";
import TuitItem from "./tuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuits = useSelector(state => state.tuits);
    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id} post={tuit} /> )
            }
        </ul>
    );
};

export default TuitsList;