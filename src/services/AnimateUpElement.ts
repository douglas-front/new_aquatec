import gsap from "gsap";

export const AnimateUpElement = (element: string, y: string, delay?: number) => {

    gsap.to(`.${element}`, {
        y: y,
        duration: 1,
        stagger: 0.1,
        delay: delay? delay: 0,
        ease: 'elastic.out(1, 0.9)',
    })

}