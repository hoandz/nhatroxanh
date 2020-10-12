var searchNavbar = Vue.component('searchNavbar', {
  template: `
    <div class="search-bar-child">
      <div class="container">
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="input-group keywords">
              <div class="input-group-prepend">
                <span class="input-group-text color-search" id="basic-addon1">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </div>
              <input
              style="height: 40px;border: none;" 
              type="text" 
              class="form-control bg-light color-search" 
              placeholder="Từ khóa, Đường, Quận, Dự án hoặc địa danh ..." 
              />
            </div>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="form-group keywords">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Toàn quốc</option>
                <option>Hà nội</option>
                <option>HCM</option>
                <option>Thái bình</option>
                <option>Hưng yên</option>
                <option>Hải phòng</option>
              </select>
            </div>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="form-group keywords">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Loại bất động sản</option>
                <option>Nhà</option>
                <option>Căn hộ</option>
                <option>Phòng trọ</option>
                <option>Văn phòng</option>
                <option>Mặt bằng</option>
                <option>Nhà xưởng, đất</option>
              </select>
            </div>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="form-group keywords">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Giá thuê</option>
              </select>
            </div>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="form-group keywords">
              <button type="button" class="btn btn-primary">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})