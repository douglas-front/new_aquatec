import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './Hero.module.css'
import Button from '../../components/Button/Button'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function Hero() {

    const video = useRef<HTMLVideoElement | null>(null)

    const onEnter = () => {

        gsap.to(`.${styles.rectangleBlue} video`,{
            y: 0,
            width: '100%',
            borderRadius: 0,
        })

        gsap.to(`.${styles.rectangleBlue}`,{
            borderRadius: 0,
        })
    }

    const onLeave = () => {
        gsap.to(`.${styles.rectangleBlue} video`,{
            y: '15%',
            width: '95%',
            borderRadius: '2vw',
        })

        gsap.to(`.${styles.rectangleBlue}`,{
            borderRadius: '1.563vw',
        })
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: `.${styles.rectangleBlue}`,
                start: '0% 0%',
                end: '100% 0%',
                scrub: true,

                pin: true,
                

                onEnter: () =>{
                    onEnter()
                    video.current!.currentTime = 0

                    video.current?.play()
                },

                onEnterBack: () =>{
                    onEnter()
                    video.current!.currentTime = 0

                    video.current?.play()
                },

                  onLeave: () =>{ 
                    onLeave()
                    video.current!.currentTime = 0
                    video.current?.pause()
                },

                onLeaveBack: () =>{ 
                    onLeave()
                    video.current!.currentTime = 0
                    video.current?.pause()
                }
        })

        return () => {
            ScrollTrigger.killAll()
            gsap.killTweensOf(`.${styles.rectangleBlue}`)
            gsap.killTweensOf(`.${styles.rectangleBlue} video`)
        }
    },[])
    
    return(
        <section className={styles.hero}>
            <h1>Rápido, sem quebrar nada</h1>
            <p>
                A AquaTec é especializada em desentupimentos <br />
                rápidos, limpos e sem quebrar nada. Com equipe <br />
                treinada e equipamentos modernos, oferecemos <br />
                soluções eficientes para residências, comércios e <br />
                indústrias.
            </p>
            <Button/>

            <div className={styles.rectangleBlue}>
                <video ref={video} loop muted playsInline>
                    <source src="/apresentation.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo.
                </video>
            </div>
        </section>
    )
}