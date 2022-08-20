import React from 'react'
import ReactPlayer from 'react-player'
export default function MainHome() {
  return (
    <div className="container main-home">
      <div className="row">
        <div className="col-md-9">
          <div className="home-style">
            <div>
              <video
                src="https://789b.dev/videogioithieu"
                controls
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
                className="video-block"
                width={980}
              ></video>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row m-rl--1">
            <div className="col-sm-12 p-rl-1 p-b-2">
              <a href="#" data-toggle="modal" data-target="#modalLogin">
                <div className="hvr-float-shadow homebanner-lg-1">
                  <div className="homebanner-title">
                    <i className="icons cockfighting"></i>
                    <span className="v-main-title">SẢNH ĐÁ GÀ</span>
                  </div>
                  <div>
                    <img
                      src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/banner/daga.jpg"
                      className="card-img-top"
                      style={{height: '250px'}}
                    />
                  </div>
                  <div className="homebanner-overlay">
                    <h5 className="card-title">CƯỢC NGAY</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 p-rl-1 p-b-2"></div>

            <div className="col-sm-12 p-rl-1 p-b-2" style={{paddingTop: '0.8rem'}}>
              <a href="#" data-toggle="modal" data-target="#modalLogin">
                <div className="hvr-float-shadow homebanner-lg-1">
                  <div className="homebanner-title">
                    <i className="icons xoso"></i>
                    <span className="v-main-title">XỔ SỐ 1 ĂN 99.5</span>
                  </div>
                  <div>
                    <img
                      src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/banner/xoso.jpg"
                      className="card-img-top"
                      style={{height: '250px'}}
                    />
                  </div>
                  <div className="homebanner-overlay">
                    <h5 className="card-title">CƯỢC NGAY</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
