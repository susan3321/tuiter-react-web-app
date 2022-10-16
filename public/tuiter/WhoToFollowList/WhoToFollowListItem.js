const WhoToFollowListItem = (who) => {
    return (` 
          <li class="list-group-item bg-secondary" >
          <div class="row">
            <div class="col-2">
              <img height="40px" class="rounded-circle"  src="${who.avatarIcon}">
            </div>
            <div class="col-6">
              <div class="fw-bolder">${who.userName}<i class="fa-solid fa-circle-check"></i></div>
              <div>@${who.handle}</div>
            </div>
            <div class="col-4 text-end text-center">
              <button class="btn btn-light w-200 mt-1 rounded-pill">Follow</button>
            </div>
          </div>
         </li>`
    );
}

export default WhoToFollowListItem;
