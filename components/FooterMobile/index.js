import React from 'react'

export default function FooterMobile() {
  return (
    <div className="home-intro">
      <div className="home-news-list">
        <a
          href="https://789b.dev/dang-ky"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: `url("https://csi.20icipp.com/img/static/789bet/mobile/new1.png")}`,
          }}
        ></a>
        <a
          href="https://789b.dev/rut-tien"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: `url("https://csi.20icipp.com/img/static/789bet/mobile/new2.png")`,
          }}
        ></a>
        <a
          href="https://789b.dev/nap-tien"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: `url("https://csi.20icipp.com/img/static/789bet/mobile/new3.png")`,
          }}
        ></a>
      </div>
      <h3 className="intro-title">Giới Thiệu Về Nhà Cái 789BET</h3>
      <p className="intro-desc">
        789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được cấp
        thông qua Khu kinh tế Isle of Man &amp; Cagayan Economic Zone and Free
        Port. Mục tiêu của 789BET Online Entertainment là đảm bảo sự công bằng
        giữa Khách Hàng và Công Ty, đồng thời thể hiện đầy đủ các phẩm chất và
        năng lực khách quan của <span> ...Xem thêm</span>
      </p>
      <div className="home-bottom-link">
        <a href="/info/aboutUs">789BET</a>
        <a href="/info/userAgreement">Điều Khoản Và Điều Kiện</a>
        <a href="/info/userPrivacy">Quyền riêng tư</a>
        <a href="/info/responsibleGambling">Chơi có trách nhiệm</a>
        <a href="/info/commonProblem">Câu hỏi thường gặp</a>
        <a href="/info/disclaimer">Miễn trách nhiệm</a>
      </div>
      <div className="footer-logo-list">
        <img
          src="https://csi.20icipp.com/img/static/789bet/custom/footerlogo_1.png"
          alt=""
        />
        <img
          src="https://csi.20icipp.com/img/static/789bet/custom/footerlogo_2.png"
          alt=""
        />
        <img
          src="https://csi.20icipp.com/img/static/789bet/custom/footerlogo_3.png"
          alt=""
        />
        <img
          src="https://csi.20icipp.com/img/static/789bet/custom/footerlogo_4.png"
          alt=""
        />
      </div>
    </div>
  );
}
