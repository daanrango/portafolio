import React, { useEffect, useRef } from "react";
import sr from "../Scrollreveal";

const socialIcons = [
  {
    id: 1,
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/davicho.anrango",
    color: "facebook",
  },
  {
    id: 2,
    icon: "fa-brands fa-twitter",
    link: "https://twitter.com/davicho_anrango",
    color: "twitter",
  },
  {
    id: 3,
    icon: "fa-brands fa-tiktok",
    link: "https://www.tiktok.com/@davichoanrango",
    color: "tiktok",
  },
  {
    id: 4,
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/davichoanrango/",
    color: "instagram",
  },
  {
    id: 5,
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/david-alberto-anrango-6b0b05233/",
    color: "linkedin",
  },
];

function Contact() {
  const boxRef = useRef(null);

  useEffect(() => {
    const config = {
      origin: "right",
      duration: 1000,
      distance: "500px",
      scale: 1,
      delay: 150,
      easing: "ease",
      reset: true,
    };

    sr.reveal(boxRef.current, config);
  }, []);
  return (
    <section id="contact" className="contact p-8" ref={boxRef}>
      <p className="text-center text-3xl mb-5">Social networks</p>
      <div className="flex flex-wrap justify-center">
        {socialIcons.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center mx-1 my-4 md:my-8 bg-blue-light h-16 w-16 md:h-20 md:w-20 rounded-xl ${item.color} hover:shadow-xl`}
          >
            <i
              className={`${item.icon} text-3xl md:text-5xl transition duration-300`}
            ></i>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
