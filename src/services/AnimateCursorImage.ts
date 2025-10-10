import gsap from "gsap";
import styles from '../components/Cursor/Cursor.module.css'

export const animateCursorEnter = () => {

    gsap.to(`.${styles.imagesCursor}`, {
        display: 'block',
        scale: 1,
        duration: 0.5,
        ease: 'sine.inOut',
        overwrite: 'auto'
    })
}

export const animateCursorLeave = () => {
    gsap.to(`.${styles.imagesCursor}`, {
        display: 'none',
        scale: 0,
        duration: .2,
        ease: 'sine.inOut',
        overwrite: 'auto'
    })
}

export const animateCursorChangeImage = (percent: number) => {
    gsap.to(`.${styles.imagesCursor} div`, {
        xPercent: percent * -100,
        duration: 1,
        ease: 'sine.inOut',
        overwrite: 'auto',
    })

}