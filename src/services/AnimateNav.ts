import gsap from "gsap";
import styles from '../Layout/Nav/Nav.module.css'

export const AnimateNavOn = () => {

    gsap.to(`.${styles.nav}`, {
        borderRadius: '1.563vw',
        scale: 1,
        duration: .5,
        ease: 'sine.inOut',
        overwrite: 'auto'
    })

    
    gsap.to(`.${styles.nav} ul li span`, {
        y: 0,
        duration: .5,
        ease: 'sine.inOut',
        delay: 0.2,
        stagger: 0.1,
        overwrite: 'auto'
    })
}

export const AnimateNavOff = () => {

    gsap.to(`.${styles.nav}`, {
        scale: 0,
        borderRadius: '50vw',
        duration: 0.2,
          delay: 0.5,
        ease: 'sine.inOut',
        overwrite: 'auto'
    })

       gsap.to(`.${styles.nav} ul li span`, {
        y: '100%',
        duration: .5,
        ease: 'sine.inOut',
      
        stagger: 0.1,
        overwrite: 'auto'
    })

}