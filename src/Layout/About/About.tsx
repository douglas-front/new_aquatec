import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function About() {
  const onEnter = () => {
    gsap.killTweensOf(`.${styles.rectangleWhite}`);
    gsap.killTweensOf(`.${styles.rectangleWhite} img`);

    gsap.to(`.${styles.rectangleWhite} img`, {
      scale       : 1,
      duration    : 2,
      width       : "100%",
      borderRadius: 0,
      ease        : "elastic.inOut(1, 9)",
    });

    gsap.to(`.${styles.rectangleWhite}`, {
      scale       : 1,
      duration    : 2,
      borderRadius: 0,
      ease        : "elastic.inOut(1, 9)",
    });
  };

  const onLeave = () => {
    gsap.to(`.${styles.rectangleWhite} img`, {
      scale       : 0,
      duration    : 1,
      width       : "95%",
      borderRadius: "1.563vw",
      ease        : "elastic.inOut(1, 9)",
      overwrite   : "auto",
    });

    gsap.to(`.${styles.rectangleWhite}`, {
      scale       : 0,
      duration    : 1,
      borderRadius: "1.563vw",
      ease        : "elastic.inOut(1, 9)",
      overwrite   : "auto",
    });
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: `.${styles.about}`,
      start  : "140% 0%",
      end    : "200% 0%",

      onEnter: () => {
        onEnter();
      },

      onEnterBack: () => {
        onEnter();
      },

      onLeave: () => {
        onLeave();
      },

      onLeaveBack: () => {
        onLeave();
      },
    });

    return () => {
      ScrollTrigger.killAll();
      gsap.killTweensOf(`.${styles.rectangleWhite}`);
      gsap.killTweensOf(`.${styles.rectangleWhite} img`);
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(`.${styles.circleAnimation}`, {
      scale   : 5,
      duration: 1,
      ease    : "power2.inOut",

      scrollTrigger: {
        trigger      : `.${styles.about}`,
        start        : "0% 0%",
        end          : "120% 0%",
        scrub        : true,
        pin          : true,
        anticipatePin: 1,

        onLeave: () => {},
      },
    });

    return () => {
      gsap.killTweensOf(`.${styles.circle}`);

      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className = {styles.about}>
      <p>
        Trabalhamos com tecnologia moderna, equipe qualificada <br />
        e atendimento ágil para resolver qualquer tipo de entupimento, <br />
        garantindo segurança, limpeza e eficiência.
      </p>
      <div className = {styles.wrapper}>
      <div className = {styles.circleAnimation} />

        <h1>
          <span className = {styles.circle} />
          Sobre
        </h1>

        <p>
          Trabalhamos com tecnologia moderna, equipe qualificada <br />
          e atendimento ágil para resolver qualquer tipo de entupimento, <br />
          garantindo segurança, limpeza e eficiência.
        </p>
        <br />
        <p>
          Trabalhamos com tecnologia moderna, equipe qualificada <br />
          e atendimento ágil para resolver qualquer tipo de entupimento, <br />
          garantindo segurança, limpeza e eficiência.
        </p>

        <div className = {styles.rectangleWhite}>
        <img src       = "/aboutPhoto.png" alt = "" />
        </div>
      </div>
    </section>
  );
}
