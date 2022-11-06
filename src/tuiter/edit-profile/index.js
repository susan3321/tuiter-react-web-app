import React from "react";
import EditItem from "./editItem";
import {useSelector} from "react-redux";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profiles)
    return (
        <EditItem key={profile._id}  post={profile}/>
    );
};

export default EditProfileComponent;