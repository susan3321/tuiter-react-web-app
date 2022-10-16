import NavigationSidebar from "../NavigationSidebar/index.js";
import FollowSidebar from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-ExploreScreen').append(`
          <div class="row mt-2">
           <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
           </div>
           <div class="col-10 col-lg-7 col-xl-6 text-white">
            ${ExploreComponent()}
           </div>
           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">

            ${FollowSidebar()}
           </div>
          </div>
    `);

    $(".wd-highlight-nav").removeClass('wd-highlight-nav');
    $("#explore-nav").addClass('wd-highlight-nav');
}



$(exploreComponent);