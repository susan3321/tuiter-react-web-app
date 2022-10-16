const PostItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img src="${post.icon}" width="40px" class="rounded-circle">
                </div>
                <div class="col-10">
                    <a>${post.userName} <i class="fa-sharp fa-solid fa-circle-check"></i> <a class="text-secondary wd-remove-underline">${post.userNameSmall} • ${post.userNameTime}</a> </a>
                    <div>${post.title}</div>
                    <div class="border border-secondary rounded">
                        <img src="${post.picture}" width="100%">
                        <div>${post.contentTitle}</div>
                        <div class="text-secondary">${post.content}</div>
                        <div class="text-secondary">${post.link}</div>
                    </div>
                    <div class="mt-2">
                        <a class="text-secondary wd-comments" style="text-decoration: none;"><i class="fa-regular fa-comment"></i> ${post.reply}</a>
                        <a class="text-secondary wd-comments" style="text-decoration: none;"><i class="fas fa-retweet"></i> ${post.retweet}</a>
                        <a class="text-secondary wd-comments" style="text-decoration: none;"><i class="fa-regular fa-heart"></i> ${post.like}</a>
                        <a class="text-secondary wd-comments" style="text-decoration: none;"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
                    </div>
                </div>
            </div>
        </li>
    `)
}

export default  PostItem