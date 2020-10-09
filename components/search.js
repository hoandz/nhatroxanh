var search = Vue.component('search', {
  template: `
    <div class="search-bar-box">
      <h2>Đúng nhà, đúng giá, đúng thời điểm</h2>
      <div class="search-bar">
        <div class="services">
          <ul>
            <li>Mua</li>
            <li>Thuê</li>
          </ul>
        </div>
        <div class="search">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text color-search" id="basic-addon1"><i class="fas fa-search"></i></span>
            </div>
            <input type="text" class="form-control bg-light color-search" placeholder="Từ khóa, Đường, Quận, Dự án hoặc địa danh ..." aria-label="Username" aria-describedby="basic-addon1" />
            <div class="input-group-prepend">
              <span class="input-group-text color-search btn-search" id="basic-addon1">Tìm kiếm</span>
            </div>
          </div>
        </div>
        <div class="search-filter">

          
          
        </div>
      </div>
    </div>
  `
})