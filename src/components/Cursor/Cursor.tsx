import { useEffect } from 'react'
import styles from './Cursor.module.css'

import gsap from 'gsap'

export default function Cursor() {

    const manageMouseMove = (e: MouseEvent) => {

        const { clientX, clientY } = e

        gsap.to(`.${styles.imagesCursor}`, {
            x: clientX,
            y: clientY,
            duration: 1,
            delay: 0.05,
            xPercent: -50,
            yPercent: -50,
        })

        gsap.to("#cursorBorder", {
            x: clientX,
            y: clientY,
            duration: 2,
            delay: 0.05,
            xPercent: -50,
            yPercent: -50,
            ease: 'elastic'
        })

        gsap.to("#cursorCircle", {
            x: clientX,
            y: clientY,
            duration: 2.5,
            delay: 0.05,
            xPercent: -50,
            yPercent: -50,
            ease: 'elastic'
        })
    }

    useEffect(() => {

        window.addEventListener("mousemove", manageMouseMove)

        return () => {
            gsap.killTweensOf(`.${styles.imagesCursor}`)
            gsap.killTweensOf("#cursorBorder")
            gsap.killTweensOf("#cursorCircle")
            window.removeEventListener('mousemove', manageMouseMove)
        }

    }, [])

    return (
        <>
            <div id='cursorBorder' className={styles.cursorBorder} />
            <div id='cursorCircle' className={styles.cursorCircle}>
                <span>Orçamento</span>
            </div>


            <div className={styles.imagesCursor}>
                <div>
                    <img loading='lazy' src="/piaDesen.webp" alt="desentupimento de pia" />
                    <img loading='lazy' src="/vasoDesen.webp" alt="desentupimento de vaso" />
                    <img loading='lazy' src="/hidrojateamento.webp" alt="hidrojateamento" />
                    <img loading='lazy' src="/fossaDesen.webp" alt="desentupimento de fossas septicas" />
                    <img loading='lazy' src="/raloDesen.webp" alt="desentupimento de ralos" />
                </div>
            </div>
        </>

    )
}