import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomePageMobile() {
  return (
    <div className="homepage">
      <div className="home-quicknav">
        <div className="quicknav-title">
          <img
            src="https://csi.20icipp.com/img/static/789bet/mobile/icon-hot.png"
            role="presentation"
          />
          tin tức hot
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        //   spaceBetween={50}
        slidesPerView={5}
        navigation
        //   pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/event.png"
              width={30}
              height={30}
            />
          </div>
          <h3>SỰ KIỆN</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/affiliate.png"
              width={30}
              height={30}
            />
          </div>
          <h3>KIẾM TIỀN</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/app.png"
              width={30}
              height={30}
            />
          </div>
          <h3>TẢI APP</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/thuong.png"
              width={30}
              height={30}
            />
          </div>
          <h3>NHIỆM VỤ</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/thuong.png"
              width={30}
              height={30}
            />
          </div>
          <h3>ĐẠI LÝ</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/daily.png"
              width={30}
              height={30}
            />
          </div>
          <h3> VIP</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/vip.png"
              width={30}
              height={30}
            />
          </div>
          <h3>HƯỚNG DẪN</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/deposit.png"
              width={30}
              height={30}
            />
          </div>
          <h3>GIẢI TRÍ</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image">
            <img
              src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/link.png"
              width={30}
              height={30}
            />
          </div>
          <h3>LINK MỚI</h3>
        </SwiperSlide>
      </Swiper>
      <div className="home-gametype">
        <div className="type-item active">
          <div
            className="type-cover"
            style={{
              backgroundImage: `url("https://csi.20icipp.com/img/static/789bet/mobile/gametype-sports.png")`,
            }}
          ></div>
          <div className="type-content">
            <div className="type-title">Tin tức THỂ THAO</div>
            <div className="group-btn">
              <div className="btn-news btn-signup">ĐẶT CƯỢC NGAY</div>
              <a
                href="http://thethao79.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-news btn-details"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
          <div className="badge-new">
            <p>Mới</p>
          </div>
          <div className="sliding-light"></div>
        </div>
        <div className="type-item">
          <div
            className="type-cover"
            style={{backgroundImage: `url("https://csi.20icipp.com/img/static/789bet/mobile/gametype-live.png")`}}
          ></div>
          <div className="type-content">
            <div className="type-title">Tin tức SÒNG BÀI</div>
            <div className="group-btn">
              <div className="btn-news btn-signup">ĐẶT CƯỢC NGAY</div>
              <a
                href="https://gameviet789.com/casino/baccarat/"
                target="_blank"
                rel="noreferrer"
                className="btn-news btn-details"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
          <div className="badge-new">
            <p>Mới</p>
          </div>
          <div className="sliding-light"></div>
        </div>
        <div className="type-item">
          <div
            className="type-cover"
            style={{backgroundImage: `url("https://csi.20icipp.com/img/static/789bet/mobile/gametype-animal.png")`}}
          ></div>
          <div className="type-content">
            <div className="type-title">Tin tức Live ĐÁ GÀ</div>
            <div className="group-btn">
              <div className="btn-news btn-signup">ĐẶT CƯỢC NGAY</div>
              <a
                href="https://gameviet789.com/casino/baccarat/"
                target="_blank"
                rel="noreferrer"
                className="btn-news btn-details"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
          <div className="badge-new">
            <p>Mới</p>
          </div>
          <div className="sliding-light"></div>
        </div>
      </div>
    </div>
  );
}
