import React from 'react'
import Link from 'next/link'
export default function SignUp() {
  return (
    <div className="app-body">
      <section
        id="sign-up-section-id"
        className="hover-container signup"
        style={{minheight: '851px', height: '851px'}}
      >
        <div
          id="top-ad-banner-wrapper"
          className="mobile-top-ad-wrapper"
          style={{minHeight: '70px'}}
        >
          <div className="top-ad-close-button">
            <i className="mps-close"></i>
          </div>
          <img
            id="top-banner-img-id"
            src="https://csi.20icipp.com/img/789bet/floatingads/2196c4a3-37d6-447a-80d0-af8a2cea234a.gif"
            alt="mobile-top-ad"
          />
        </div>
        {/* <div
          id="static-page-detail-modal"
          className="policy-modal top-ad sign-popup"
        >
          <div className="header-actions">
            <div className="text-right">
              <div className="btn-close">
                <i className="mps-close"></i>
              </div>
            </div>
          </div>
          <h2 className="title-center">Nhớ Quay Lại Vào Ngày Hôm Sau</h2>
          <div className="policy-container">
            <div className="content">
              <div>
                <p style={{textalign: 'center'}}>
                  <span style={{color: '#000000'}}>Tặng</span>
                  <span style={{color: '#ff0000'}}>38 điểm</span>
                  <span style={{color: '#000000'}}> cho thành viên mới. </span>
                  <span style={{color: '#3366ff'}}>
                    <a
                      href="https://www.022789.com/promotions/b5ac9ca0-ddb2-4086-9e34-09f6637805f6"
                      style={{color: '#3366ff'}}
                    >
                      Chi tiết khuyến mãi
                    </a>
                  </span>
                </p>
                <p>
                  <span style={{color: '#000000'}}>
                    + Điền chính xác thông tin Họ và Tên
                  </span>
                </p>
                <p>
                  <span style={{color: '#000000'}}>
                    + Điền chính xác số điện thoại, email
                  </span>
                </p>
                <p>
                  <span style={{color: '#000000'}}>
                    + Thêm thông tin ngân hàng chính xác
                  </span>
                </p>
                <p>
                  <span style={{color: '#ff0034'}}>
                    ※ Chú ý: Thành viên đăng ký sai thông tin Họ tên và số tài
                    khoản ngân hàng sẽ bị thu hồi tiền tặng miễn phí &amp; tiền
                    thắng phát sinh ( nếu có)
                  </span>
                </p>
                <p>
                  <span style={{color: '#000000'}}>
                    Tuyển dụng đại lý hoa hồng tới 60% chi tiết liên hệ
                  </span>{" "}
                  <span style={{color: '#3366ff'}}>
                    <a style={{color: '#3366ff'}} href="https://t.me/Cskh789bet">
                      Telegram @Cskh789bet
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <button title="" className="nrc-button" type="button">
              OK
            </button>
          </div>
        </div> */}
        <div className="container" style={{flexbasis: '731px'}}>
          <div className="container-inner">
            <div className="header-actions">
            <Link href="./" >
              <img
                className="close"
                alt="close"
                src="https://csi.20icipp.com/img/static/ic-cancel.svg"
              />
              </Link>
            </div>
            <form className="nrc-form nrc-form-block signup-form">
              <div className="steps-wrapper">
                <h2>Thông Tin Đăng ký</h2>
              </div>
              <div className="nrc-form-item input-group signup prefix">
                <div className="nrc-form-label ">
                  <label className="form-require">
                    Tên đăng nhập
                  </label>
                </div>
                <div className="nrc-form-input nrc-u-1-1 ">
                  <input
                    type="text"
                    placeholder=""
                    id="playerid"
                    className=""
                    maxLength="13"
                  />
                  <small className="info-msg">Vui lòng nhập Id Đăng ký</small>
                </div>
              </div>
              <div className="nrc-form-item input-group signup">
                <div className="nrc-form-label ">
                  <label  className="form-require">
                    Mật khẩu
                  </label>
                </div>
                <div className="nrc-form-input nrc-u-1-1 nrc-form-password">
                  <div>
                    <input
                      placeholder=""
                      type="password"
                      id="password"
                      className=""
                      maxLength="20"
                    />
                    <i className="mps-readable"></i>
                  </div>
                  <small className="info-msg">
                    Mật khẩu từ 8-20 ký tự bao gồm chữ và số
                  </small>
                </div>
              </div>
              <div className="nrc-form-item input-group signup">
                <div className="nrc-form-label ">
                  <label  className="form-require">
                    Họ Và Tên
                  </label>
                </div>
                <div className="nrc-form-input nrc-u-1-1 ">
                  <input type="text" id="firstname" className=""  />
                  <small className="info-msg">
                    Họ và tên cần trung khớp với tên trong ngân hàng
                  </small>
                </div>
              </div>
              <div className="nrc-form-item input-group signup">
                <div className="nrc-form-label ">
                  <label  className="">
                    Địa chỉ E-mail
                  </label>
                </div>
                <div className="nrc-form-input nrc-u-1-1 ">
                  <input type="email" id="email" className=""  />
                  <small className="info-msg">
                    Điền chính xác email để nhận khuyến mãi và khôi phục lại khi
                    quên
                  </small>
                </div>
              </div>
              <div className="nrc-form-item input-group signup">
                <div className="nrc-form-label ">
                  <label  className="form-require">
                    Số điện thoại
                  </label>
                </div>
                <div className="nrc-form-input nrc-u-1-1">
                  <div
                    className="react-tel-input"
                    data-test-id="src_reacttelephoneinput_test_id_4"
                  >
                    <div
                      className="flag-dropdown"
                      data-test-id="src_reacttelephoneinput_test_id_6"
                    >
                      <button
                        className="selected-flag"
                        title="Vietnam (Việt Nam): + 84"
                        data-test-id="src_reacttelephoneinput_test_id_7"
                        type="button"
                      >
                        <div
                          className="flag vn"
                          data-test-id="src_reacttelephoneinput_test_id_8"
                          style={{backgroundImage: `url("https://d1lzoljld5a2bc.cloudfront.net/ea19c953a07bc914958eb35ab850a429/static/media/flags.5bc53ca7..png")`}}
                        >
                          <div
                            className="arrow"
                            data-test-id="src_reacttelephoneinput_test_id_9"
                          ></div>
                        </div>
                      </button>
                    </div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+86 12-34567"
                      data-test-id="src_reacttelephoneinput_test_id_5"
                      value={'+84'}
                    />
                  </div>
                  <small className="info-msg">
                    Điền chính xác số để khôi phục mật khẩu
                  </small>
                  <input type="hidden" className="nrc-invisible" />
                </div>
              </div>
              <div className="nrc-form-item input-group signup">
                <div className="nrc-form-label ">
                  <label  className="form-require">
                    Mã xác minh
                  </label>
                </div>
                <div className="nrc-form-input secure">
                  <input
                    type="text"
                    pattern="[0-9]*"
                    placeholder=" "
                    name=""
                  />
                  <div>
                    <img alt="captcha" src="" />
                  </div>
                  <i className="mps-update"></i>
                </div>
                <div className="nrc-form-input captcha-msg">
                  <small className="info-msg"></small>
                </div>
              </div>
            </form>
            <div className="top25">
              <button title="" className="nrc-button" type="button">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
