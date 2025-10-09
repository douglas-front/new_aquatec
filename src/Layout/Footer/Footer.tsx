import { useGSAP } from '@gsap/react'
import styles from './Footer.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useLenisScroll from '../../hooks/useLenis'

export default function Footer() {
    const lenis = useLenisScroll()

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(`.${styles.footer}`, {
            y: '-30%',
            scrollTrigger: {
                trigger: `.${styles.footer}`,
                scrub: true,
                start: '0% 100%',
                end: '100% 0%',
            }
        })

        return () => {
            gsap.killTweensOf(`.${styles.footer}`)
            ScrollTrigger.killAll()
        }
    }, [])

    const scrollToSection = (sectionId: string) => {
        lenis?.current?.scrollTo(sectionId, { offset: -100, duration: 2.5 })
    }

    return (
        <footer id="footer" className={styles.footer} aria-label="Rodapé">
            <div className={styles.wrapper}>
                <section>
                    <h4>Contato</h4>
                    <address>
                        <ul>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8191293041&text=olá, gostaria de saber mais sobre os serviços."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contato via WhatsApp"
                                >
                                    (81) 9 9129-3041
                                </a>
                            </li>
                            <li>
                                <a href="tel:+558191293041" aria-label="Ligar para (81) 9 9129-3041">
                                    Ligar: (81) 9 9129-3041
                                </a>
                            </li>
                        </ul>
                    </address>
                </section>

                <section>
                    <h4>Localização</h4>
                    <address>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2033531382356!2d-34.92666142566169!3d-8.092640491937675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1eeba6be7b7f%3A0xba028cc3a82eead6!2sAv.%20Tapaj%C3%B3s!5e0!3m2!1spt-BR!2sbr!4v1718230326979!5m2!1spt-BR!2sbr"
                            width="98%"
                            height="200vw"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de localização da AquaTec"
                        />
                        <ul>
                            <li>Av Tapajó 719, Bairro Areias / Recife - PE</li>
                            <li>Disponível 24 horas</li>
                        </ul>
                    </address>
                </section>

                <nav aria-label="Mapa do site">
                    <h4>Site Map</h4>
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
                    </ul>
                </nav>

            </div>

            <h1 className='large'>
                <span className={styles.textStroke}>A</span>QUATEC
            </h1>

            <small>developed by Douglas</small>
        </footer>
    )
}