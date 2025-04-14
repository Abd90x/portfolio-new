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
          <div className="first-project-wrapper w-full " ref={project1Ref}>
            <div className="image-wrapper bg-[#fffbf2] w-full rounded-2xl">
              <img
                src="/images/project1.png"
                alt="project"
                className="object-contain"
              />
            </div>
            <div className="text-content">
              <h1>Innova Designs | End to End solutions</h1>
              <p className="text-white-50 md:text-xl">
                A company profile website that showcases the company's services,
                portfolio, and contact information. The website is designed to
                be visually appealing and user-friendly
              </p>
            </div>
          </div>

          <div className="project-list-wrapper">
            <div className="project w-full" ref={project2Ref}>
              <div className="image-wrapper bg-[#f9a5b5]">
                <img src="/images/project2.png" alt="project2" />
              </div>
              <h2>AI Images Generator</h2>
            </div>

            <div className="project w-full" ref={project3Ref}>
              <div className="image-wrapper bg-[#fce2c0]">
                <img src="/images/project3.png" alt="project3" />
              </div>
              <h2>AI Resume Builder</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
