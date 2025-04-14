import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((social, index) => (
            <a
              href={social.link}
              key={index}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Abdellatif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
