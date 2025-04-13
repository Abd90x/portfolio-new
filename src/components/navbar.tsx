import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(({ link }) => {
        return document.querySelector(link);
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentActiveLink = "";

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = rect.height;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentActiveLink = `#${sectionId}`;
          }
        }
      });
      setActiveLink(currentActiveLink);
      window.history.replaceState(null, "", currentActiveLink);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Abdellatif
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span
                    className={`underline
                    ${activeLink === link ? "w-full" : ""}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
