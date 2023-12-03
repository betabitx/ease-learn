import "../styles/header.css";
import { hrefLinks } from "../lib/hrefLinks";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h2>
              <a href="#" className="home">
                Ease Learn
              </a>
            </h2>
          </div>
          {/** ====== navigation ====== */}
          <div className="navigation">
            <ul className="menu">
              {hrefLinks.map((item, index) => (
                <li className="menu_item" key={index}>
                  <a href={item.path} className="menu_links">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/** ====== mobile navigation ======  */}
          <span className="mobile_menu">
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
}
