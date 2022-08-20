import Image from 'next/image';
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
            <div style={{ marginRight: 25, marginLeft: 7 }}>
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
                // data-toggle="modal"
                // data-target="#modalLogin"
                id="btn--login"
                data-bs-toggle="modal"
                data-bs-target="#login"
              >
                Đăng nhập
              </button>
              <button className="btn is-red" id="btn--register" data-bs-toggle="modal"
                data-bs-target="#register">
                Đăng ký
              </button>
            </div>
            {/* MODAL LOGIN  */}
            <div
              className="modal fade"
              id="login"
              aria-labelledby="login"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      ĐĂNG NHẬP
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Tên Đăng Nhập"
                        />
                        <small className="invalid-msg">
                          Vui lòng nhập tài khoản người chơi
                        </small>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Mật Khẩu"
                        />
                        <small className="invalid-msg">
                          Vui lòng nhập tài khoản người chơi
                        </small>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Mã Xác Minh"
                        />
                        <small className="invalid-msg">
                          Vui lòng nhập mã kiểm tra hiện trong hình.
                        </small>
                      </div>
                      <div className="mb-3 button">
                        <button title="" className="nrc-button" type="button">
                          Đăng Nhập
                        </button>
                      </div>
                      <div className="mb-3">
                        <div
                          className="signup-hint text-center"
                          style={{ marginTop: "15px" }}
                        >
                          <div className="fast-login-wrapper">
                            <div className="icons"></div>
                          </div>
                          <span className="no-account">
                            Bạn chưa có tài khoản?{" "}
                          </span>
                          <span
                            className="highlight-color"
                            style={{ cursor: "pointer" }}
                          >
                            Đăng ký ngay
                          </span>
                        </div>
                        <div className="flex-right-bottom forget-options">
                          <span
                            className="highlight-color"
                            style={{cursor: 'pointer', textDecoration: 'underline', fontSize: '16px'}}
                          >
                            Quên tên đăng nhập
                          </span>
                          <span
                            className="highlight-color"
                            style={{cursor: 'pointer', textDecoration: 'underline', fontSize: '16px'}}
                          >
                            Quên mật khẩu
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='image-form'>
                        <img src="https://csi.20icipp.com/img/static/789bet/custom/banner/banner-modal.png" 
                          width={200}
                          height={600}
                          alt="image 789bet"
                        />
                    </div>
              </div>
            </div>
            {/* end modal  LOGIN*/}
              {/* MODAL REGISTER  */}
               <div
              className="modal fade"
              id="register"
              aria-labelledby="register"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content register">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      ĐĂNG KÝ
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Tên Đăng Nhập"
                        />
                        <small className="invalid-msg">
                          Vui lòng nhập tài khoản người chơi
                        </small>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Mật Khẩu"
                        />
                        <small className="invalid-msg">
                          Vui lòng nhập tài khoản người chơi
                        </small>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Họ Và Tên"
                        />
                        <small className="invalid-msg">
                          Bắt buộc có
                        </small>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Địa Chỉ E-Mail"
                        />
                        <small className="invalid-msg">
                          Điền chính xác email để nhận khuyến mãi và khôi phục lại khi quên
                        </small>
                      </div>
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Số điện thoại: +84"
                        />
                        <small className="invalid-msg">
                          Bắt buộc có
                        </small>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Mã xác minh"
                        />
                        <small className="invalid-msg">
                          Vui lòng nhập mã kiểm tra hiện trong hình.
                        </small>
                      </div>
                      <div className="mb-3 button">
                        <button title="" className="nrc-button" type="button">
                          Đăng ký ngay
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='image-form'>
                        <img src="https://csi.20icipp.com/img/static/789bet/custom/banner/banner-modal.png" 
                          width={200}
                          height={700}
                          alt="image 789bet"
                        />
                    </div>
              </div>
            </div>
            {/* end modal  REGISTER*/}
          </div>
        </div>
      </div>
    </div>
  );
}
