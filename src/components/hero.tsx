import "../styles/hero.css";
import studyImg from "../assets/study.png";

export default function Hero() {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <div>
              <h2>
                Welcome To <span className="highlight"></span>Ease Learn
              </h2>
              <h2>Your resource to prepare to your</h2>
              <h2 className="highlight">Bac Exams</h2>
            </div>
            <p className="description">
              Made by{" "}
              <a href="" className="highlight">
                Yasser Fedsi
              </a>
            </p>
            <div className="hero_btns">
              <button className="primary_btn">Drivers</button>
              <button className="secondary_btn">Youtube Channels</button>
            </div>
          </div>
          <div className="hero_img">
            <img src={studyImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
