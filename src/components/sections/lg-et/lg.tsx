import { lgDriversData } from "../../../lib/drivers";

export default function LG() {
  return (
    <section id="drivers">
      <div className="container">
        <div className="drivers_top-content">
          <h6 className="subtitle">Langue étrangère Drivers</h6>
        </div>
        <div className="drivers_item-wrapper">
          {lgDriversData.map((item, index) => (
            <div className="drivers_item" key={index}>
              <span className="drivers_icon">
                <img src={item.icon} height={65} width={65} alt="" />
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
