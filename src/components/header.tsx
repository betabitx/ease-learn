import "../styles/header.css";
import { hrefLinks } from "../lib/hrefLinks";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [headerShrink, setHeaderShrink] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const headerFunc = () => {
    setHeaderShrink(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetAttr = e.currentTarget.getAttribute("href");

    if (targetAttr) {
      const location = document.querySelector(targetAttr) as HTMLElement;

      if (location) {
        window.scrollTo({
          left: 0,
          top: location.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      className={`header ${headerShrink ? "header_shrink" : ""}`}
      ref={headerRef}
    >
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
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {hrefLinks.map((item, index) => (
                <li className="menu_item" key={index}>
                  <a
                    href={item.path}
                    className="menu_links"
                    onClick={handleClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/** ====== mobile navigation ======  */}
          <span className="mobile_menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
}
