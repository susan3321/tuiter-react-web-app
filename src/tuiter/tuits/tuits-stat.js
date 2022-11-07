import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { updateTuiteLike } from "./tuits-reducer";

const TuitsStat = (input) => {
    let tuit = input.post
    const dispatch = useDispatch();
    const updateTuitelikeHangler = () => {
        dispatch(updateTuiteLike(tuit._id));
    }


    return (
        <>
                <div className={"row"}>
                    <div className={"col-3"}><i className="bi bi-chat"></i> {tuit.replies}</div>
                    <div className={"col-3"}><i className="bi bi-reply"></i> {tuit.retuits}</div>
                    <div className={"col-3"}>
                        <i className={ tuit.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart-fill" }
                            onClick={() => updateTuitelikeHangler()} />
                         {tuit.likes}</div>
                    <div className={"col-3"}><i className="bi bi-box-arrow-up"></i></div>

                </div>
        </>
    )
}

export default TuitsStat;