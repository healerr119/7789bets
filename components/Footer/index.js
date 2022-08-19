import Image from 'next/image';
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-4" style={{ textAlign: 'center' }}>
              <img
                className="mb-2"
                src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo-65.webp"
                alt=""
              />
              <span
                className="d-block mb-3"
                style={{ fontSize: "16px", textAlign: "justify" }}
              >
                789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được
                cấp thông qua Khu kinh tế Isle of Man &amp; Cagayan Economic
                Zone and Free Port. Mục tiêu của 789BET Online Entertainment
                là đảm bảo sự công bằng giữa Khách Hàng và Công Ty, đồng thời
                thể hiện đầy đủ các phẩm chất và năng lực khách quan của
                <span id="dots">...</span>
                <span id="more">
                  Là một nhà cái trực thuộc tập đoàn M.A.N Entertainment, có trụ
                  sở chính đặt tại thủ đô Manila, Philippines. Đây là tập đoàn
                  được đánh giá là lớn mạnh nhất châu Á về thị trường cá cược
                  trực tuyến với đội ngũ nhân viên khổng lồ. Với sự tin cậy cao
                  đã được kiểm chứng, 789bet hiện tại là một trong những nhà cái
                  được xác thực rõ ràng và có giấy phép được hiệp hội cá cược
                  trực tuyến quốc tế chứng nhận.
                </span>
                <a  id="myBtn">
                  Xem thêm
                </a>
              </span>
              <div className="footer-logo-list">
                <Image
                  src="https://gic.x8gdkt99.com/img/static/789bet/custom/footerlogo_1.png"
                  width={50}
                  height={50}
                  alt=""
                />
               <Image
                  src="https://gic.x8gdkt99.com/img/static/789bet/custom/footerlogo_2.png"
                  alt=""
                  width={50}
                  height={50}
                />
               <Image
                  src="https://gic.x8gdkt99.com/img/static/789bet/custom/footerlogo_3.png"
                  alt=""
                  width={50}
                  height={50}
                />
               <Image
                  src="https://gic.x8gdkt99.com/img/static/789bet/custom/footerlogo_4.png"
                  alt=""
                  width={150}
                  height={50}
                />
              </div>
            </div>
            <div className="col-4" style={{ paddingLeft: "55px" }}>
              <div className="footer-header1">
                <h5>Thông Tin</h5>
              </div>
              <div className="row">
                <div className="col-md-6 themed-grid-col">
                  <ul className="list-unstyled text-small">
                    <li>
                      <a
                        href="https://www.7789bet.com/info/aboutUs"
                        className="link-secondary"
                      >
                        Về 789Bet
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.7789bet.com/info/userAgreement"
                        className="link-secondary"
                      >
                        Điều khoản và điều kiện
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.7789bet.com/info/responsibleGambling"
                        className="link-secondary"
                      >
                        Chơi có trách nhiệm
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.7789bet.com/info/commonProblem"
                        className="link-secondary"
                      >
                        Câu hỏi thường gặp
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 themed-grid-col">
                  <ul className="list-unstyled text-small">
                    <li>
                      <a
                        href="https://www.7789bet.com/info/depositHelp"
                        className="link-secondary"
                      >
                        Hướng dẫn nạp tiền
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.7789bet.com/info/withdrawalHelp"
                        className="link-secondary"
                      >
                        Hướng dẫn rút tiền
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.7789bet.com/info/partner"
                        className="link-secondary"
                      >
                        Đăng ký đại lý
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.7789bet.com/info/contactUs"
                        className="link-secondary"
                      >
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="footer-header1">
                <h5>Phương thức thanh toán</h5>
              </div>
              <ul className="logo-bank">
                <li>
                  <Image
                    className="img-card"
                    alt="Vietcombank"
                    src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo/vietcombank-logo.png"
                    width={80}
                    height={35}
                  />
                </li>
                <li>
                <Image
                    className="img-card"
                    alt="Bidv"
                    src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo/bidv-logo.png"
                    width={90}
                    height={40}
                  />
                </li>
                <li>
                <Image
                    className="img-card"
                    alt="ACB"
                    src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo/acb-logo.png"
                    width={80}
                    height={35}
                  />
                </li>
                <li>
                  <Image
                    className="img-card"
                    alt="Techcombank"
                    src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo/techcombank-logo.png"
                    width={140}
                    height={40}
                  />
                </li>
                <li>
                  <Image
                    className="img-card"
                    alt="VietinBank"
                    src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo/vietinbank-logo.png"
                    width={160}
                    height={40}
                  />
                </li>
                <li>
                  <Image
                    className="img-card"
                    alt="Sacombank"
                    src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo/sacombank-logo.png"
                    width={160}
                    height={40}
                  />
                </li>
                <li>
                  <Image
                    className="img-card"
                    alt="zalopay"
                    src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo/zalopay-logo.png"
                    width={60}
                    height={60}
                  />
                </li>
                <li>
                  <Image
                    className="img-card"
                    alt="momo"
                    src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/logo/momo-logo.png"
                    width={60}
                    height={60}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <h5>Nhà cung cấp</h5>

          <div style={{ textAlign: "center", padding: "0 35px" }}>
            <img
              className="img-card2"
              alt="AE"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/ag.png"
            />

            <img
              className="img-card2"
              alt="AMEB"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/ameba.png"
            />

            <img
              className="img-card2"
              alt="CMD368"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/bbin.png"
            />

            <img
              className="img-card2"
              alt="CQ9"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/cmdbet-logo.png"
            />

            <img
              className="img-card2"
              alt="CQ9"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/cq9.png"
            />

            <img
              className="img-card2"
              alt="DG"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/dg.png"
            />

            <img
              className="img-card2"
              alt="GGAMING"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/gg-gaming.png"
            />

            <img
              className="img-card2"
              alt="GPI"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/gpi.png"
            />

            <img
              className="img-card2"
              alt="GW"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/gw.png"
            />

            <img
              className="img-card2"
              alt="JDB"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/jdb.png"
            />

            <img
              className="img-card2"
              alt="LC"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/lc.png"
            />

            <img
              className="img-card2"
              alt="UGAMING"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/ug-gaming.png"
            />

            <img
              className="img-card2"
              alt="VSL"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/cvsl.png"
            />

            <img
              className="img-card2"
              alt="WM"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/wm-logo.png"
            />

            <img
              className="img-card2"
              alt="MG"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/microgaming.png"
            />

            <img
              className="img-card2"
              alt="RT"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/red-tiger.png"
            />

            <img
              className="img-card2"
              alt="S128"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/S128.png"
            />

            <img
              className="img-card2"
              alt="SABA"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/saba.png"
            />

            <img
              className="img-card2"
              alt="SBOBET"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/SBOBET.png"
            />

            <img
              className="img-card2"
              alt="SEXYBCRT"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/ae-casino.png"
            />

            <img
              className="img-card2"
              alt="SIMPLEPLAY"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/simpleplay-logo.png"
            />

            <img
              className="img-card2"
              alt="SV388"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/sv388.png"
            />

            <img
              className="img-card2"
              alt="TF"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/tf-logo.png"
            />

            <img
              className="img-card2"
              alt="TRC"
              src="https://7789bets.com/wp-content/themes/flatsome/assets2/images/footer/logo/trc.png"
            />
          </div>
        </div>
        <div className="copy">Copyright © 789BET Reserved</div>
      </footer>
    </div>
  );
}
