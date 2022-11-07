import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
import TuitsStat from "./tuits-stat";


const TuitItem = (input) => {
    const tuit = input.post;
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-auto">
                        <img width={40} className={"rounded-circle"} src={`Images/${tuit.image}`} alt=""/>
                    </div>
                    <div className="col-10">
                        <div>{tuit.userName} <i className="bi bi-patch-check-fill text-primary"></i>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                            <a href="/#" className="text-secondary wd-remove-underline">{tuit.handle} • {tuit.time}</a>
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