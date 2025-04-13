import { useRef } from "react";

type Props = {
  card: {
    review: string;
  };
  children: React.ReactNode;
  index: number;
};

const GlowCard = ({ card, children, index }: Props) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number) => (event: React.MouseEvent) => {
    const card = cardRefs.current[index] ?? null;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", String(angle + 60));
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            src="/images/star.png"
            alt="star"
            key={index}
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
