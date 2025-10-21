import { useEffect, useState } from 'react'
import styles from './Nav.module.css'
import { AnimateNavOff, AnimateNavOn } from '../../services/AnimateNav'
import gsap from 'gsap'
import useLenisScroll from '../../hooks/useLenis'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const lenis = useLenisScroll()

    useEffect(() => {

        return () => {
            gsap.killTweensOf(`.${styles.nav}`)
            gsap.killTweensOf(`.${styles.nav} ul li span`)
        }
    }, [])

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const animateNav = () => {
        menuOpen ? AnimateNavOff() : AnimateNavOn()
    }

    const scrollToSection = (sectionId: string) => {
        lenis?.current?.scrollTo(sectionId, { offset: -100, duration: 2.5 })
    }

    return (
        <header className={styles.header}>
            <img   src="/logo.png" alt="Logo Aquatec" />

            <button
                onClick={() => { handleMenu(); animateNav() }}
                className={`${styles.menuButton}`}
                aria-label='Abrir ou fechar menu de navegação'
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
                title='Abrir ou fechar menu de navegação'
            >
                <div className={styles.line}></div>
                menu
                <div className={styles.line}></div>
            </button>

            <nav className={styles.nav} aria-label="Navegação principal" id="main-navigation">
                <ul>
                    <li>
                        <a
                            href="#services"
                            onClick={e => { e.preventDefault(); scrollToSection('#services'); }}
                        >
                            <span>Serviços</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={e => { e.preventDefault(); scrollToSection('#about'); }}
                        >
                            <span>Sobre</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#callForm"
                            onClick={e => { e.preventDefault(); scrollToSection('#callForm'); }}
                        >
                            <span>Fale Conosco</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#footer"
                            onClick={e => { e.preventDefault(); scrollToSection('#footer'); }}
                        >
                            <span>Contato</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}