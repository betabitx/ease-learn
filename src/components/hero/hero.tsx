import "./hero.css";
import studyImg from "../../assets/study.png";
import { linkTo } from "../../lib/links";

export default function Hero() {
  return (
    <section className="hero_section" id="home">
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
              <a href={linkTo} className="highlight" target="_blank">
                Yasser Fedsi
              </a>
            </p>
          </div>
          <div className="hero_img">
            <img src={studyImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
