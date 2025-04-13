import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const projectRefs = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projectRefs.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="project" />
            </div>
            <div className="text-content">
              <h1>Project 1</h1>
              <p className="text-white-50 md:text-xl">
                A brief description of the project, highlighting its key
                features and technologies used.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper">
            <div className="project w-full" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="project2" />
              </div>
              <h2>Project 2</h2>
            </div>

            <div className="project w-full" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="project3" />
              </div>
              <h2>Project 3</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
