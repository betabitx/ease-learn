import { phDriversData } from "../../../lib/drivers";
import "../drivers.css";

export default function PhilosphyDrivers() {
  return (
    <section id="drivers">
      <div className="container">
        <div className="drivers_top-content">
          <h6 className="subtitle">Art and Philosophy</h6>
        </div>
        <div className="drivers_item-wrapper">
          {phDriversData.map((item, index) => (
            <div className="drivers_item" key={index}>
              <span className="drivers_icon">
                <img src={item.icon} height={65} width={65} alt="Images" />
              </span>
              <a className="rivers_title" href={item.link}>
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
