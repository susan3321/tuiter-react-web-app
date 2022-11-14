import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../services/tuits-thunks";

const TuitsStat = (input) => {
    let tuit = input.post
    const dispatch = useDispatch();


    return (
        <>
                <div className="row">
                    <div className="col-3"><i className="bi bi-chat"></i> {tuit.replies}</div>
                    <div className="col-3"><i className="bi bi-reply"></i> {tuit.retuits}</div>
                    <div className="col-3">
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes + 1
                        }))} className="bi bi-heart-fill me-2 text-danger"></i>{tuit.likes}</div>
                    <div className="col-3"><i className="bi bi-box-arrow-up"></i></div>

                </div>
        </>
    )
}

export default TuitsStat;