import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {editProfile} from "../profile/profile-reducer";
import { useNavigate } from "react-router";
import './index.css'


const EditItem = (input) => {
    let data = JSON.parse(JSON.stringify(input.post));
    const [profile, update] = useState(data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const editProfileHandler = () => {
        dispatch(editProfile(profile));
    };


    return (
        <>
            <div className="list-group-item mt-2">
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => navigate("../profile")}></i>
                    </div>
                    <div className="col-9">
                        Edit Profile
                    </div>
                    <div className="col-1"><button className="btn btn-dark rounded-pill" onClick={() => editProfileHandler()}>Save</button>
                    </div>
                </div>
            </div>
            <div className={"background_picture_pos mt-2"}>
                <img className="img-gray" width="100%" src={`Images/${profile.bannerPicture}`} alt=""/>
                <img className={"rounded-circle picture_pos img-gray"} src={`Images/${profile.profilePicture}`} alt=""/>
            </div>
            <div className="border mt-3">
                <div className="text-secondary ps-2">First Name</div>
                <input type="text" className="ps-2 input-no-border" value={profile.firstName}
                onChange={(e) => update({
                    ...profile,
                    firstName: e.target.value
                })}/>
            </div>
            <div className="border mt-3">
                <div className="text-secondary ps-2">Last Name</div>
                <input className="ps-2 input-no-border" value={profile.lastName}
                       onChange={(e) => update({
                           ...profile,
                           lastName: e.target.value
                       })}
                />
            </div>
            <div className="border mt-3">
                <div className="text-secondary ps-2">Bio</div>
                <input className="ps-2 input-no-border input-box-bigger" value={profile.bio}
                       onChange={(e) => update({
                           ...profile,
                           bio: e.target.value
                       })}
                />
            </div>
            <div className="border mt-3">
                <div className="text-secondary ps-2">Location</div>
                <input className="ps-2 input-no-border" value={profile.location}
                       onChange={(e) => update({
                           ...profile,
                           location: e.target.value
                       })}
                />
            </div>
            <div className="border mt-3">
                <div className="text-secondary ps-2 input-box-bigger">Website</div>
                <input className="ps-2 input-no-border" placeholder={profile.website}
                       onChange={(e) => update({
                           ...profile,
                           website: e.target.value
                       })}
                />
            </div>
            <div className="mt-3">
                <div className="text-secondary">Birth date • Edit</div>
                <input className="input-no-border" value={profile.dateOfBirth}
                       onChange={(e) => update({
                           ...profile,
                           dateOfBirth: e.target.value
                       })}
                />
            </div>

            <div className="mt-3 row">
                <div className="ps-2 col-11">Switch to professional</div>
                <div className="col-1"><i className="bi bi-chevron-right"></i></div>
            </div>


        </>
    )
}

export default EditItem;