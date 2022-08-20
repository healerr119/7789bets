import React from 'react'
import Link from 'next/link'
export default function Login() {
  return (
    <div className="app-body">
      <section className="hover-container login">
        <div className="container">
          <div className="container-inner">
            <div className="text-right">
              <img
                alt="close"
                src="https://csi.20icipp.com/img/static/ic-cancel.svg"
              />
            </div>
            <h2 className="title-center">Đăng nhập</h2>
            <div style={{marginBottom: '10px'}}>
              <form className="nrc-form nrc-form-block ">
                <div className="nrc-form-item input-group">
                  <div className="nrc-form-label ">
                    <label  className="form-require">
                      Tên Đăng Nhập
                    </label>
                  </div>
                  <div className="nrc-form-input nrc-u-1-1 ">
                    <input
                      placeholder="Vui lòng nhập tài khoản"
                      type="text"
                      id="login"
                      className=""
                      maxLength="13"
                      value=""
                    />
                    <small className="info-msg"></small>
                  </div>
                </div>
                <div className="nrc-form-item input-group">
                  <div className="nrc-form-label ">
                    <label className="form-require">
                      Mật Khẩu
                    </label>
                  </div>
                  <div className="nrc-form-input nrc-u-1-1 nrc-form-password">
                    <div>
                      <input
                        placeholder="Vui lòng nhập mật mã"
                        type="password"
                        id="password"
                        className=""
                        maxLength="20"
                        value=""
                      />
                      <i className="mps-readable"></i>
                    </div>
                    <small className="info-msg"></small>
                  </div>
                </div>
                <div className="nrc-form-item input-group">
                  <div className="nrc-form-label ">
                    <label  className="form-require">
                      Mã xác minh
                    </label>
                  </div>
                  <div className="nrc-form-input secure">
                    <input
                      type="text"
                      pattern="[0-9]*"
                      placeholder="Mã xác minh"
                      name=""
                    />
                    <div>
                      <img alt="captcha" src="" />
                    </div>
                    <i className="mps-update"></i>
                  </div>
                </div>
                <div className="login-btn-group" style={{marginTop: '40px'}}>
                  <button title="" className="nrc-button" type="button">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
            <p className="bottom-text">
              Tham gia 789BET ngay!
              <Link className="signup-hint account-link" href="/signup">
                Đăng ký
              </Link>
            </p>
            <div className="text-center forget-options">
              <a href="/forgetusername">
                <span>Quên tên đăng nhập</span>
              </a>{" "}
              <a href="/forgetpassword">
                <span>Quên mật khẩu</span>
              </a>
            </div>
          </div>
          <div className="fast-login-wrapper"><div className="icons"></div></div>
          <h5 className="stagingversion text-center">789bet rel/3.45</h5>
        </div>
      </section>
    </div>
  );
}
