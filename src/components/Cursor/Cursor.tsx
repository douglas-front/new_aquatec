import { useEffect } from 'react'
import styles from './Cursor.module.css'

import gsap from 'gsap'

export default function Cursor() {

    const manageMouseMove = (e: MouseEvent) =>{

            const {clientX, clientY} = e

            // console.log(clientX, clientY)

            gsap.to("#cursorBorder",{
                x: clientX,
                y: clientY,
                duration: 2,
                delay: 0.05,
                xPercent: -50,
                yPercent: -50,
                ease: 'elastic'
            })

             gsap.to("#cursorCircle",{
                x: clientX,
                y: clientY,
                duration: 2.5,
                delay: 0.05,
                xPercent: -50,
                yPercent: -50,
                ease: 'elastic'
            })
    }

    useEffect(()=>{

        window.addEventListener("mousemove", manageMouseMove)

        return () => {
            gsap.killTweensOf("#cursorBorder")
            gsap.killTweensOf("#cursorCircle")
            window.removeEventListener('mousemove', manageMouseMove)
        }

    }, [])

    return(
        <>
            <div id='cursorBorder' className={styles.cursorBorder}/>
            <div id='cursorCircle' className={styles.cursorCircle}>
                <span>Orçamento</span>
            </div>
        </>

    )
}