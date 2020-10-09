var areaReview = Vue.component('areaReview', {
  template: `
    <div class="ward-review">
      <h2 class="title">Review khu vực</h2>
      <div class="row ward-review-list">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="ward-review-item">
              <img src="img/ho-chi-minh-city.jpg" alt="" />
              <div class="caption">
                Khám phá 154 khu vực ở
                <span>TPHCM</span>
              </div>  
              <a href="#" class="link-overlay">
                <span>Xem review</span>
              </a>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="ward-review-item">
              <img src="img/hanoi-city.jpg" alt="" />
              <div class="caption">
                Khám phá 124 khu vực ở
                <span>Hà Nội</span>
              </div>  
              <a href="#" class="link-overlay">
                <span>Xem review</span>
              </a>
            </div>
          </div>
      </div>
    </div>
  `
})