import React from "react";
import {useDispatch} from "react-redux";
import "./index.css";
import { useNavigate } from "react-router";

const ProfileItem = (input) => {
    const profile = input.post;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>

                <div className="row">
                    <div className="col-1 h3 align-self-center">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="col-11">
                        <h4 className="font-weight-bold">{profile.firstName} {profile.lastName}</h4>
                        <div className="font-weight-light">{profile.tweets} Tweets</div>
                    </div>
                    <div className={"background_picture_pos"}>
                        <img width="100%" src={`Images/${profile.bannerPicture}`} alt=""/>
                        <div className="row">
                            <div className="col-9"><img className={"rounded-circle picture_pos"} src={`Images/${profile.profilePicture}`} alt=""/></div>
                            <div className="col-3"><button className="rounded-pill btn btn-light" onClick={() => navigate("../edit-profile")}>Edit Profile</button></div>
                         </div>


                    </div>
                    <h4 className="font-weight-bold">{profile.firstName} {profile.lastName}</h4>
                    <div>{profile.handle}</div>
                    <div className="mt-2">{profile.bio}</div>
                    <div className="row mt-2">
                        <div className="col-4"><i className="bi bi-geo-alt"></i> {profile.location}</div>
                        <div className="col-4"><i className="bi bi-balloon"></i> {profile.dateOfBirth}</div>
                        <div className="col-4"><i className="bi bi-calendar3"></i> {profile.dateJoined}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">{profile.followingCount} Following</div>
                        <div className="col-3">{profile.followersCount} Following</div>
                    </div>


            </div>

        </>
    );
};

export default ProfileItem;