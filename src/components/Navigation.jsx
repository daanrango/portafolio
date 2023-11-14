import React from "react";

const menuItems = [
  { id: 1, label: "Welcome", link: "#" },
  { id: 2, label: "About Me", link: "#" },
  { id: 3, label: "Skills", link: "#" },
  { id: 4, label: "Projects", link: "#" },
  { id: 5, label: "Contact", link: "#" },
];

const socialIcons = [
  { id: 1, icon: "fa-regular fa-envelope", link: "#" },
  { id: 2, icon: "fa-brands fa-github", link: "#" },
  { id: 3, icon: "fa-brands fa-whatsapp", link: "#" },
];

function Navigation() {
  return (
    <div className="flex flex-row justify-between h-16">
      <img
        src={require("../assets/img/logo.png")}
        alt="logo-nav"
        className="w-14 invert"
      />
      <ul className="flex flex-row flex-1	ml-4 ">
        {menuItems.map((item) => (
          <li key={item.id} className="p-4">
            <a
              href={item.link}
              className="pb-1 hover:border-b-2 border-solid border-white text-xl font-bold "
            >
              <i className={item.icon}></i> {item.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-row">
        {socialIcons.map((item) => (
          <li
            key={item.id}
            className="p-4 cursor-pointer hover:scale-150 transform transition duration-500"
          >
            <a href={item.link} className="">
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
