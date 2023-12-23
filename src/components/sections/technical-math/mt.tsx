import { TmDriversData } from "../../../lib/drivers";
import "../../../styles/drivers.css";

export default function TechnicalMathDrivers() {
  return (
    <section id="drivers">
      <div className="container">
        <div className="drivers_top-content">
          <h6 className="subtitle">Technical Math Drivers</h6>
        </div>
        <div className="drivers_item-wrapper">
          {TmDriversData.map((item, index) => (
            <div className="drivers_item" key={index}>
              <span className="drivers_icon">
                <img src={item.icon} height={65} width={65} alt="Images" />
              </span>
              <a className="drivers_title" href={item.link} target="_blank">
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
