type Props = {
  className?: string;
  id?: string;
  text?: string;
};

const Button = ({ className, id, text }: Props): React.ReactNode => {
  return (
    <a
      onClick={(e) => {
        const target = document.getElementById(id ?? "");
        if (target) {
          e.preventDefault();

          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
