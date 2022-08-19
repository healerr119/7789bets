import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomeTopMobile() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={50}
      slidesPerView={5}
      navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
            <div className='swiper-image'>
                <img src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/sports.png" width={30} height={30} />
            </div>
            <h3>THỂ THAO</h3>
      </SwiperSlide>
      <SwiperSlide>
            <div className='swiper-image'>
                <img src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/live.png" width={30} height={30} />
            </div>
            <h3>SÒNG BÀI</h3>
      </SwiperSlide>
      <SwiperSlide>
            <div className='swiper-image'>
                <img src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/egame.png" width={30} height={30} />
            </div>
            <h3>TRÒ CHƠI</h3>
      </SwiperSlide>
      <SwiperSlide>
            <div className='swiper-image'>
                <img src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/chess.png" width={30} height={30} />
            </div>
            <h3>GAME BÀI</h3>
      </SwiperSlide>
      <SwiperSlide>
            <div className='swiper-image'>
                <img src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/mpg.png" width={30} height={30} />
            </div>
            <h3>BẮN CÁ</h3>
      </SwiperSlide>
      <SwiperSlide>
            <div className='swiper-image'>
                <img src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/animal.png" width={30} height={30} />
            </div>
            <h3> ĐÁ GÀ</h3>
      </SwiperSlide>
      <SwiperSlide>
            <div className='swiper-image'>
                <img src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/lottery.png" width={30} height={30} />
            </div>
            <h3>XỔ SỐ</h3>
      </SwiperSlide>
      <SwiperSlide>
            <div className='swiper-image'>
                <img src="https://csi.20icipp.com/img/static/789bet/mobile/nav-icon/esports.png" width={30} height={30} />
            </div>
            <h3>ESPORTS</h3>
      </SwiperSlide>
      
    </Swiper>
  );
}
