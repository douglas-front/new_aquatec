import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './Hero.module.css'
import Button from '../../components/Button/Button'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { AnimateUpElement } from '../../services/AnimateUpElement'

export default function Hero() {
    const video = useRef<HTMLVideoElement | null>(null)

    const onEnter = () => {
        gsap.to(`.${styles.rectangleBlue} video`, {
            y: 0,
            width: '100%',
            borderRadius: 0,
        })
        gsap.to(`.${styles.rectangleBlue}`, {
            borderRadius: 0,
        })
    }

    const onLeave = () => {
        gsap.to(`.${styles.rectangleBlue} video`, {
            y: '15%',
            width: '95%',
            borderRadius: '2vw',
        })
        gsap.to(`.${styles.rectangleBlue}`, {
            borderRadius: '1.563vw',
        })
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: `.${styles.rectangleBlue}`,
            start: '-20% 0%',
            end: '100% 0%',
            scrub: true,
            onEnter: () => {
                onEnter()
                if (video.current) {
                    video.current.currentTime = 0
                    video.current.play()
                }
            },
            onEnterBack: () => {
                onEnter()
                if (video.current) {
                    video.current.currentTime = 0
                    video.current.play()
                }
            },
            onLeave: () => {
                onLeave()
                if (video.current) {
                    video.current.currentTime = 0
                    video.current.pause()
                }
            },
            onLeaveBack: () => {
                onLeave()
                if (video.current) {
                    video.current.currentTime = 0
                    video.current.pause()
                }
            }
        })

        return () => {
            ScrollTrigger.killAll()
            gsap.killTweensOf(`.${styles.rectangleBlue}`)
            gsap.killTweensOf(`.${styles.rectangleBlue} video`)
        }
    }, [])

    useGSAP(() => {

        AnimateUpElement(`${styles.hero} h1 span`, '0')
        AnimateUpElement(`${styles.rectangleBlue} video`, '15%', 0.2)

        return () => {
            gsap.killTweensOf(`.${styles.hero} h1 span`)
            gsap.killTweensOf(`.${styles.rectangleBlue} video`)
        }
        
    }, [])

    return (
        <section className={styles.hero} aria-label="Seção de destaque">
            <h1><span>Desentupimento rápido,</span> <span>limpo e sem quebrar nada</span></h1>
            <p>
                A AquaTec é especializada em desentupimentos <br />
                rápidos, limpos e sem quebrar nada. Com equipe <br />
                treinada e equipamentos modernos, oferecemos <br />
                soluções eficientes para residências, comércios e <br />
                indústrias.
            </p>
            <Button
                textWhatsApp='Olá, eu gostaria de fazer um orçamento'
                backgroundColor='#083157'
                fill='#fff'
            />
            
            <div className={styles.rectangleBlue}>
                <video
                    ref={video}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label="Vídeo institucional AquaTec"
                    title="Vídeo institucional AquaTec"
                >
                    <source src="/apresentation.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo.
                </video>
            </div>
        </section>
    )
}