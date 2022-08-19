import React from 'react'

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-block" style={{display: 'block'}}>
        <div className="marquee-news">
          <div className="marquee-wrap news home-page-position">
            <div className="visible-area">
              <div
                className="marquee-content scrollLeft"
                style={{animationDelay: '2s', animationDuration: '80.26s',animationPlayState: 'running'}}
              >
                <span
                  className="marquee-item"
                  data-content="Thông tin bảo trì"
                  data-nosnippet="true"
                >
                  <span className="maintenances-item">
                    <span className="maintenances-item-name">AE_LOTTO-Xổ số</span>
                    <span className="maintenances-item-date">
                      2022-08-22 08:40 ~ 2022-08-22 09:50
                    </span>
                    <span></span>
                  </span>
                </span>
                <span
                  className="marquee-item"
                  data-content="Thông tin bảo trì"
                  data-nosnippet="true"
                >
                  <span className="maintenances-item">
                    <span className="maintenances-item-name">CMDBET-Thể thao</span>
                    <span className="maintenances-item-date">
                      2022-08-19 12:15 ~ 2022-08-19 16:15
                    </span>
                    <span></span>
                  </span>
                </span>
                <span
                  className="marquee-item"
                  data-content="Thông tin bảo trì"
                  data-nosnippet="true"
                >
                  <span className="maintenances-item">
                    <span className="maintenances-item-name">SA-Live casino</span>
                    <span className="maintenances-item-date">
                      2022-08-22 09:00 ~ 2022-08-22 11:30
                    </span>
                    <span></span>
                  </span>
                </span>
                <span
                  className="marquee-item"
                  data-content="Thông tin bảo trì"
                  data-nosnippet="true"
                >
                  <span className="maintenances-item">
                    <span className="maintenances-item-name">SABA-Game bài</span>
                    <span className="maintenances-item-date">
                      2022-04-06 23:49:17 ~ Thông báo sau khi hoàn tất
                    </span>
                    <span></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <span className="news-title">
            <i className="mps-news"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
