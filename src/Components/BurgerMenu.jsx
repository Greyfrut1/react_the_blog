import React, { useState } from "react";

function BurgerMenu({ onClick, socLinks, menu }) {
  const rootAdress = "http://91.107.217.207";
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <div className="absolute px-3 left-0 top-0 w-full h-full bg-white">
      <div className="p-5 flex justify-end">
        <button className="w-6 h-6 relative" onClick={onClick}>
          <span className="absolute top-3 left-0 block w-full h-0.5 bg-black rotate-45"></span>
          <span className="absolute top-3 left-0 block w-full h-0.5 bg-black -rotate-45"></span>
        </button>
      </div>
      <ul className="w-screen -mx-3">
        {menu?.data?.map((item, index) => (
          <li
            className="w-full menu-item pl-6 py-6 border-t ${isActive ? 'active-link' : 'inactive-link}"
            key={index}
            onClick={handleClick}
          >
            <a
              href={item.link.uri}
              className="text-black opacity-50 tracking-widest hover:cursor-pointer hover:opacity-100 text-3xl font-poppins font-normal flex relative"
            >
              <div className="absolute left-0">↳</div>
              <div className="pl-10">{item.title}</div>
            </a>
          </li>
        ))}
        {socLinks?.data?.field_social_links.map((item, index) => (
          <li
            className="w-full menu-item pl-6 py-6 border-t ${isActive ? 'active-link' : 'inactive-link}"
            key={index}
            onClick={handleClick}
          >
            <a
              href={item?.field_link?.uri}
              className="text-black opacity-50 tracking-widest hover:cursor-pointer hover:opacity-100 text-3xl font-poppins font-normal flex relative"
            >
              <div className="absolute left-0">↳</div>
              <div className="pl-10">{item?.field_link?.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BurgerMenu;
