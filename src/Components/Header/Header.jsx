import React from "react";

function Header({ onClick, logo, menuItems, socialLinks }) {
  const rootAdress = "http://91.107.217.207";
  return (
    <header className="header">
      <div id="menu" className="header__menu">
        <ul className="header__menu_list">
          <li className="header__menu_item_logo">
            <a href="/">
              <img
                className="header__menu_logo"
                src={rootAdress + logo?.data?.field_image?.uri?.url}
                alt="Logo"
              ></img>
            </a>
          </li>
          {menuItems?.data?.map((item, index) => (
            <li className="header__menu_item" key={index}>
              <a href={item.link.uri} className="header__menu_text">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="header__social_links">
        <ul className="header__social_links__list">
          {socialLinks?.data?.field_social_links?.map((item, index) => (
            <li className="header__social_links_item" key={index}>
              <a href={item.field_link.uri}>
                <img
                  className="header__social_links_img"
                  src={rootAdress + item?.field_icon_svg?.uri?.url}
                  alt="icon"
                ></img>
              </a>
            </li>
          ))}
          <li className="header__burder_menu">
            <button className="header__burder_menu__button" onClick={onClick}>
              <span className="header__burger_menu__button_item"></span>
              <span className="header__burger_menu__button_item"></span>
              <span className="header__burger_menu__button_item"></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
