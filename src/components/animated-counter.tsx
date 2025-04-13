import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.5, // 50% of the component should be visible
  });

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-950 rounded-lg p-10 flex flex-col justify-center"
          >
            <div
              ref={ref}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              {inView && <CountUp suffix={item.suffix} end={item.value} />}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
