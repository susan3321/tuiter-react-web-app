const NavigationSidebar = () => {
    return(`
           <div class="list-group ">
          <li class="list-group-item bg-secondary">
            <span><i class="fa-brands fa-twitter"></i></span>
          </li>

          <li class="list-group-item bg-secondary wd-highlight-nav" id="home-nav">
            <div class="row">
              <div class="col-2">
                <span><i class="fa-solid fa-house"></i></span>
              </div>
              <div class="col-10 d-none d-xl-block">
                <a href="../HomeScreen/index.html" class="text-white wd-remove-underline">Home</a>
              </div>
            </div>
          </li>

          <li class="list-group-item bg-secondary" id="explore-nav">
            <div class="row">
              <div class="col-2">
                <span><i class="fa-solid fa-hashtag"></i></span>
              </div>
              <div class="col-10 d-none d-xl-block">
                <a href="../ExploreScreen/index-A5.html" class="text-white wd-remove-underline">Explore</a>
              </div>
            </div>
          </li>

          <li class="list-group-item bg-secondary">
            <div class="row">
              <div class="col-2">
                <span><i class="fa-sharp fa-solid fa-bell"></i></span>
              </div>
              <div class="col-10 d-none d-xl-block">
                Notifications
              </div>
            </div>
          </li>

          <li class="list-group-item bg-secondary">
            <div class="row">
              <div class="col-2">
                <span><i class="fa-sharp fa-solid fa-envelope"></i></span>
              </div>
              <div class="col-10 d-none d-xl-block">
                Message
              </div>
            </div>
          </li>

          <li class="list-group-item bg-secondary">
            <div class="row">
              <div class="col-2">
                <span><i class="fa-solid fa-bookmark"></i></span>
              </div>
              <div class="col-10 d-none d-xl-block">
                Bookmarks
              </div>
            </div>
          </li>

          <li class="list-group-item bg-secondary">
            <div class="row">
              <div class="col-2">
                <span><i class="fa-solid fa-list"></i></span>
              </div>
              <div class="col-10 d-none d-xl-block">
                Lists
              </div>
            </div>
          </li>

          <li class="list-group-item bg-secondary">
            <div class="row">
              <div class="col-2">
                <span><i class="fa-solid fa-user"></i></span>
              </div>
              <div class="col-10 d-none d-xl-block">
                Profile
              </div>
            </div>
          </li>

          <li class="list-group-item bg-secondary">
            <div class="row">
              <div class="col-2">
                <span><i class="fa-solid fa-comment-dots"></i></span>
              </div>
              <div class="col-10 d-none d-xl-block">
                More
              </div>
            </div>
          </li>

          <div class="d-grid mt-2">
             <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
            </div>
        </div>

 `);
}

export default NavigationSidebar;