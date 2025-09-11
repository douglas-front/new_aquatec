import { useGSAP } from '@gsap/react'
import styles from './Services.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMouseEnterInButton, onMouseLeaveInButton } from '../../services/AnimateCursor.service'

export default function Services() {

    // const cards = [
    //     {
    //         num: '01',
    //         title: 'Serviços',
    //         paragraph: ''
    //     }
    // ]

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(`.${styles.wrapper}`,{
            xPercent: -40,
             scrollTrigger:{
                trigger: `.${styles.wrapper}`,
                start: '-10% 0%',
                end: '100% 0%',
                scrub: true,
                pin: true,
             }
        })

        return () => {
            ScrollTrigger.killAll()
            gsap.killTweensOf(`.${styles.wrapper}`)
        }

    },[])

    return(
        <section className={styles.services}>
            <h1>
                <div className={styles.circle}></div>
                Serviços
            </h1>

            <div className={styles.line}></div>

            <div className={styles.wrapper}>

                <article className={styles.card} onMouseEnter={onMouseEnterInButton} onMouseLeave={onMouseLeaveInButton}>
                    <span>(01)</span>
                    <h3>Serviço</h3>
                    <p> 
                        dadsadsadhasiudhaiusdhiusahdi <br />
                        sdasdsaiohdiusahdusahdusahdiu <br />
                        dasdhaiushdsiudhaiudhaiduhaid 
                    </p>
                </article>

                <article className={styles.card} onMouseEnter={onMouseEnterInButton} onMouseLeave={onMouseLeaveInButton}>
                    <span>(02)</span>
                    <h3>Serviço</h3>
                    <p> 
                        dadsadsadhasiudhaiusdhiusahdi <br />
                        sdasdsaiohdiusahdusahdusahdiu <br />
                        dasdhaiushdsiudhaiudhaiduhaid 
                    </p>
                </article>

                <article className={styles.card} onMouseEnter={onMouseEnterInButton} onMouseLeave={onMouseLeaveInButton}>
                    <span>(03)</span>
                    <h3>Serviço</h3>
                    <p> 
                        dadsadsadhasiudhaiusdhiusahdi <br />
                        sdasdsaiohdiusahdusahdusahdiu <br />
                        dasdhaiushdsiudhaiudhaiduhaid 
                    </p>
                </article>
                
                <article className={styles.card} onMouseEnter={onMouseEnterInButton} onMouseLeave={onMouseLeaveInButton}>
                    <span>(04)</span>
                    <h3>Serviço</h3>
                    <p> 
                        dadsadsadhasiudhaiusdhiusahdi <br />
                        sdasdsaiohdiusahdusahdusahdiu <br />
                        dasdhaiushdsiudhaiudhaiduhaid 
                    </p>
                </article>

            </div>

        </section>
    )
}