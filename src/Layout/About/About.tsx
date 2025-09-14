import { useGSAP } from '@gsap/react';
import styles from './About.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function About() {

    const onEnter = () => {

         gsap.set("#cursorCircle", {
            backgroundColor: 'var(--color-white)',
            duration: 0.4,
            ease: "power2.inOut",
        })
        gsap.set("#cursorBorder", {
            border: '0.1vw solid var(--color-white)',
            duration: 0.4,
            ease: "power2.inOut",
        })
       
    }

    const onLeave = () => {
        gsap.set("#cursorCircle", {
            backgroundColor: 'var(--color-blue)',
            duration: 0.4,
            ease: "power2.inOut",
        })

        gsap.set("#cursorBorder", {
            border: '0.1vw solid var(--color-blue)',
            duration: 0.4,
            ease: "power2.inOut",
        })
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);


        gsap.to(`.${styles.circleAnimation}`, {
            scale: 5,
            duration: 1,
            ease: 'power2.inOut',

            scrollTrigger: {
                trigger: `.${styles.about}`,
                start: '0% 0%',
                end: '120% 0%',
                scrub: true,
                pin: true,
                anticipatePin: 1,

                onEnter: () => onEnter(),
                onLeave: () => onLeave(),
                onEnterBack: () => onEnter(),
                onLeaveBack: () => onLeave(),
            }
        })

        return () => {

            gsap.killTweensOf("#cursorCircle")
            gsap.killTweensOf(`.${styles.circle}`)
            gsap.killTweensOf("#cursorBorder")
            ScrollTrigger.killAll()

        }
    }, [])

    return (
        <section className={styles.about}>
            <p>
                Trabalhamos com tecnologia moderna, equipe qualificada <br />
                e atendimento ágil para resolver qualquer tipo de entupimento, <br />
                garantindo segurança, limpeza e eficiência.
            </p>
            <div className={styles.wrapper}>
                <div className={styles.circleAnimation}/>

                <h1>
                    <span className={styles.circle} />
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

                <div className={styles.rectangleWhite} >

                </div>

            </div>
        </section>
    )
}