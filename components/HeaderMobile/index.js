import React from 'react'

export default function HeaderMobile() {
  return (
    <div className="app-body nav-bar">
      <div className="app-home">
        <header className="home-header" style={{ top: "52px" }}>
          <div className="logo">
            <img
              src="https://csi.20icipp.com/img/static/mobile/brand/789bet/logo.png"
              alt=""
            />
          </div>
          <div className="tools">
            <a href="/signup">
              <div className="tools-item" style={{ padding: "0px" }}>
                <i className="mps-bnav-user" style={{ fontSize: "16px" }}></i>
                <b>Đăng ký</b>
              </div>
            </a>
            <a href="/login">
              <div className="tools-item" id="login-btn">
                <i className="mps-login" style={{ paddingBottom: "2px" }}></i>
                <b>Đăng nhập</b>
              </div>
            </a>
            <div className="country-select">
              <div className="flag-icon flag-icon-squared flag-icon-vn"></div>
              <select>
                <option value="vi-VN">Tiếng Việt</option>
                <option value="en-US">English</option>
              </select>
            </div>
          </div>
          
        </header>
        <a href="/news">
          <div className="home-news">
            <div className="marquee-wrap news">
              <div className="visible-area">
                <div
                  className="marquee-content scrollLeft"
                  style={{animationDelay: '2s', animationDuration: '55.9s'}}
                >
                  <span className="marquee-item" data-nosnippet="true">
                    Chào mừng quý khách đến với 789BET - nhà cái uy tín hàng đầu
                    Việt Nam,với các tựa game mới thật sự lôi cuốn, chương trình
                    khuyến mãi siêu hấp dẫn,tặng ngay cho lần nạp đầu tiên,mỗi
                    lần nạp mỗi lần tặng,khuyến mãi hoàn trả không giới hạn,quý
                    khách còn chần chừ gì nữa hãy là người đầu tiên đến với
                    chúng tôi để được trải nghiệm cảm giác giải trí tuyệt vời
                    !!! Chúc quý khách có một ngày đặt cược may mắn và vui vẻ
                    !!!
                  </span>
                </div>
              </div>
            </div>
            <span className="news-title">
              <i className="mps-news"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
