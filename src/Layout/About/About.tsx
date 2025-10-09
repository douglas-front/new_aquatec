import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimateUpElement } from "../../services/AnimateUpElement";

export default function About() {
  const onEnter = () => {

    gsap.to(`.${styles.rectangleWhite} img`, {
      scale: 1,
      duration: 2,
      width: "100%",
      borderRadius: 0,
      ease: "elastic.inOut(1, 9)",
      overwrite: "auto",
    });

    gsap.to(`.${styles.rectangleWhite}`, {
      scale: 1,
      duration: 2,
      borderRadius: 0,
      ease: "elastic.inOut(1, 9)",
      overwrite: "auto",

    });
  };

  const onLeave = () => {
    gsap.to(`.${styles.rectangleWhite} img`, {
      scale: 0,
      duration: 1,
      width: "95%",
      borderRadius: "1.563vw",
      ease: "elastic.inOut(1, 9)",
      overwrite: "auto",
    });

    gsap.to(`.${styles.rectangleWhite}`, {
      scale: 0,
      duration: 1,
      borderRadius: "1.563vw",
      ease: "elastic.inOut(1, 9)",
      overwrite: "auto",
    });
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: `.${styles.about}`,
      start: "140% 0%",
      end: "200% 0%",

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
      gsap.killTweensOf(`.${styles.rectangleWhite}`);
      gsap.killTweensOf(`.${styles.rectangleWhite} img`);
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(`.${styles.circleAnimation}`, {
      scale: 5,
      duration: 1,
      ease: "power2.inOut",

      scrollTrigger: {
        trigger: `.${styles.about}`,
        start: "0% 0%",
        end: "120% 0%",
        scrub: true,
        pin: true,
        anticipatePin: 1,

        onEnter:() =>{
          AnimateUpElement(`${styles.about} p span`, '0')

        }
      },
    });

    return () => {
      gsap.killTweensOf(`.${styles.circle}`);
      gsap.killTweensOf(`.${styles.about} p span`);

      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className={styles.about} id="about">
      <p>
        <span>Trabalhamos com tecnologia moderna, equipe qualificada <br />
        e atendimento ágil para resolver qualquer tipo de entupimento, <br />
        garantindo segurança, limpeza e eficiência.</span>
      </p>

      <div className={styles.wrapper}>
        <div className={styles.circleAnimation} />

        <h2>
          <span className={styles.circle} />
          Sobre
        </h2>

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


        <figure className={styles.rectangleWhite}>
          <img loading="lazy" src="/aboutPhoto.png" alt="exemplo de desentupimento" />
        </figure>

      </div>

    </section>
  );
}
