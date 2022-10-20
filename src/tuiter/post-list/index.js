import React from "react";
import postsArray from './posts.json';
import PostListItem from "./post-list-item";

const PostsList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostListItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};

export default PostsList;