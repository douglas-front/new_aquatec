import { useGSAP } from '@gsap/react';
import styles from './About.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function About() {

    const onEnter = () => {

        gsap.to("#cursorCircle", {
            backgroundColor: 'var(--color-white)',
            duration: 0.4,
            ease: "power2.inOut",
        })
        gsap.to("#cursorBorder", {
            border: '0.1vw solid var(--color-white)',
            duration: 0.4,
            ease: "power2.inOut",
        })
    }

    const onLeave = () => {
        gsap.to("#cursorCircle", {
            backgroundColor: 'var(--color-blue)',
            duration: 0.4,
            ease: "power2.inOut",
        })

        gsap.to("#cursorBorder", {
            border: '0.1vw solid var(--color-blue)',
            duration: 0.4,
            ease: "power2.inOut",
        })
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(`.${styles.circle}`, {
            scale: 20,
            duration: 1,
            ease: 'power2.inOut',

            scrollTrigger: {
                trigger: `.${styles.wrapper}`,
                start: '10% 0%',
                end: '100% 0%',
                scrub: true,
                pin: true,

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
                <div className={styles.circle} />
            </div>
        </section>
    )
}