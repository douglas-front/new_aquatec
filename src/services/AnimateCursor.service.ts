import gsap from "gsap"

export const onMouseEnterInButton = () => {

    gsap.killTweensOf("#cursorCircle")
    gsap.killTweensOf("#cursorCircle span")
    gsap.killTweensOf("#cursorBorder")

    gsap.to("#cursorCircle", {
        backgroundColor: 'var(--color-white)',
        width: '8.646vw',
        height: '8.646vw',
        border: '0.1vw solid var(--color-blue)',
        duration: 0.4,
        ease: "power2.inOut",
    })

    gsap.to("#cursorCircle span", {
        x: 0,
        duration: 0.7,
        ease: "power2.inOut",
    })

    gsap.to('#cursorBorder', {
        scale: 0,
        duration: 0.2,
        ease: "power2.inOut",

    })
}

export const onMouseLeaveInButton = () => {

    gsap.to("#cursorCircle", {
        backgroundColor: 'var(--color-blue)',
        width: ' 1.406vw',
        height: ' 1.406vw',
        duration: 0.2,
        border: 'none',
        ease: "power2.inOut",
        overwrite: 'auto'
    })

    gsap.to("#cursorCircle span", {
        x: '-100%',
        duration: 0.2,
        ease: "power2.inOut",
        overwrite: 'auto'
    })

    gsap.to('#cursorBorder', {
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
        overwrite: 'auto'

    })
}
