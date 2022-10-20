import React from "react";
import parse from 'html-react-parser';
import "./index.css";

const PostListItem = (
    {
        post =  { "icon": "../Images/elonMusk.png",
            "userName": "Elon Musk",
            "userNameSmall": "@elonmusk",
            "userNameTime": "23h",
            "title": "Amazing show about <a class=\"text-primary wd-remove-underline\">@Inspiration4x</a> mission!",
            "picture": "../Images/inspiration.png",
            "contentTitle": "Countdown\": Inspiration4 Mission to Space | Netflix Official Site",
            "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "link": "<i class=\"fa-solid fa-link\"></i> netflix.com",
            "reply": "4.2K",
            "retweet": "3.5K",
            "like": "37.5k"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={40} className={"rounded-circle"} src ={post.icon} alt="" />
                </div>
                <div className="col-10">
                    <div>{post.userName} <i className="bi bi-patch-check-fill bg-color-blue"></i> <a href="/#" className="text-secondary wd-remove-underline">{post.userNameSmall} • {post.userNameTime}</a></div>
                    <div>{parse(post.title)}</div>
                    <div>

                        <div>{post.contentTitle}</div>
                        <div className={"text-secondary"}>{post.content}</div>
                        <img className={"rounded"} src={post.picture} width="100%" alt="" />
                        <div className={"text-secondary"}>{parse(post.link)}</div>
                    </div>
                    <div className={"mt-2"}>
                        <div className={"row"}>
                            <div className={"col-3"}><i className="bi bi-chat"></i> {post.reply}</div>
                            <div className={"col-3"}><i className="bi bi-reply"></i> {post.retweet}</div>
                            <div className={"col-3"}><i className="bi bi-heart"></i> {post.like}</div>
                            <div className={"col-3"}><i className="bi bi-box-arrow-up"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PostListItem;