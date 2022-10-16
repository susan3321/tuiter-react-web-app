import whos from "./whos.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
                    
              <li class="list-group-item bg-secondary">
                  <div class="row mt-1">
                    <div class="fw-bolder">Who to follow</div>
                  </div>
              </li>
            
              ${whos.map(who => {
                return (WhoToFollowListItem(who));
                }).join('')
                }
            
              </ul>
           `);
}
export default WhoToFollowList;