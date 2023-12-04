import { driversData } from "../../lib/drivers";

export default function Drivers() {
  return (
    <section id="drivers">
      <div className="container">
        <div className="drivers_top-content">
          <h6>Drivers Section</h6>
        </div>
      </div>

      <div className="driver_item-wrapper">
        {driversData.map((item, index) => (
          <div className="drivers_item" key={index}>
            <span className="driver_icon">
              <i className={item.icon}></i>
            </span>
            <h3 className="service_title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
