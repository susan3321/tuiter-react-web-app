import React from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {createTuit,deleteTuit} from "../tuits/tuits-reducer";


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
                            <a href="/#" className="text-secondary wd-remove-underline"></a> {tuit.handle} • {tuit.time}
                        </div>
                        <div>
                            <div>{tuit.tuit}</div>

                        </div>
                        <div className={"mt-2"}>
                            <div className={"row"}>
                                <div className={"col-3"}><i className="bi bi-chat"></i> {tuit.replies}</div>
                                <div className={"col-3"}><i className="bi bi-reply"></i> {tuit.retuits}</div>
                                <div className={"col-3"}><i className="bi bi-heart-fill text-danger"></i> {tuit.likes}</div>
                                <div className={"col-3"}><i className="bi bi-box-arrow-up"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};


export default TuitItem;