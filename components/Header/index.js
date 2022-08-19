import React from 'react'

export default function Header() {
  return (
    <div className="quick-nav">
      <div className="main-header">
        <div className="left">
          <div className="logo"></div>
        </div>
        <div className="right">
          <div className="col" id="digital-clock">
            19/08/2022 10:35:46
          </div>
          <div className="primary-quick">
            <div style={{marginRight: 25, marginLeft: 7}}>
              <input type="checkbox" className="checkbox" id="chk" />
              <div className="headerSelect">
                <a
                  href="#"
                  className="selectText"
                  alt="lan"
                  id="lan"
                  ng-bind-html="langueCurrent"
                >
                  <div
                    className="allicon headerTool icon_Language_VI"
                    langue="zh-VI"
                  ></div>
                  <span>Tiếng việt</span>
                </a>
                <div className="selectBox">
                  <a href="#">
                    <div
                      className="allicon headerTool icon_Language_EN"
                      langue="EN"
                    ></div>
                    <span>English</span>
                  </a>
                  <a href="#">
                    <div
                      className="allicon headerTool icon_Language_VI"
                      langue="VI"
                    ></div>
                    <span>Tiếng việt</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="header__form">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modalLogin"
                id="btn--login"
              >
                Đăng nhập
              </button>
              <button
                className="btn is-red"
                id="btn--register"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
