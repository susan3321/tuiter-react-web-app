import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks.js";
import TuitsStat from "./tuits-stat";


const TuitItem = (input) => {
    const tuit = input.post;
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <img width={40} className={"rounded-circle"} src={`Images/${tuit.image}`} alt=""/>
                    </div>
                    <div className="col-11">
                        <div> {tuit.userName} <i className="bi bi-patch-check-fill text-primary"></i>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                            <a href="/#" className="text-secondary wd-remove-underline"> {tuit.handle} • {tuit.time}</a>
                        </div>
                        <div>
                            <div>{tuit.tuit}</div>
                        </div>
                        <div className={"mt-2"}>
                            <TuitsStat post={tuit}/>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};


export default TuitItem;