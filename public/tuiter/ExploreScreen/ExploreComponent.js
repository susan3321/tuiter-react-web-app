import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
          <div>
              <div class="row mt-1">
                <div class="col-10 ps-3">
                  <div class="position-relative">
                    <input class="ps-5 form-control rounded-pill bg-white" placeholder="Search Tuiter"/>
                    <span class="position-absolute wd-search-tuiter text-secondary"><i class="fa-solid fa-magnifying-glass"></i></span>
                  </div>
                </div>
                <div class="col-2 align-middle text-end pe-5">
                    <span class="text-primary" style="font-size:x-large"><i class="fa-solid fa-gear"></i></span>
                </div>
              </div>

              <ul class="nav nav-tabs mt-2 wd-selected">
                <li class="nav-item">
                  <a class="nav-link text-white" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="news.html">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                  <a class="nav-link text-white" href="entertainment.html">Entertainment</a>
                </li>
              </ul>
        </div>

        <div class="position-relative ">
          <img src="../Images/starship.jpg" width="100%">
          <h1 class="position-absolute bottom-0 left-0 text-secondary ms-2 display-5">SpaceX's Starship</h1>
        </div>
        
        <div>
            ${PostSummaryList()}
        </div>

          
    `);
}
export default ExploreComponent;
