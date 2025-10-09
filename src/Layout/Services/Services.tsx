import { useGSAP } from '@gsap/react'
import styles from './Services.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { animateCursorEnter, animateCursorLeave, animateCursorChangeImage } from '../../services/AnimateCursorImage'
import { AnimateUpElement } from '../../services/AnimateUpElement'

export default function Services() {

    const cards = [
        {
            num: '01',
            title: ['Desentupimento', 'de pia'],
            paragraph: 'A Aquatec limpa sua pia de maneira <br/> eficiente, eliminando toda a sujeira <br/> acumulada e garantindo um <br/> funcionamento perfeito do encanamento.'
        },
        {
            num: '02',
            title: ['Desentupimento', 'de vaso'],
            paragraph: 'A Aquatec limpa seu vaso sanitário de <br/> forma eficiente, eliminando obstruções <br/> e devolvendo o bom funcionamento ao <br/> seu banheiro. Nosso serviço garante <br/> mais higiene, conforto e tranquilidade.'
        },
        {
            num: '03',
            title: ['Hidrojateamento', ''],
            paragraph: 'A Aquatec realiza hidrojateamento de <br/> forma profissional, desobstruindo <br/> encanamentos e tubulações com alta <br/> pressão de água.'
        },
        {
            num: '04',
            title: ['Desentupimento', 'de fossas sépticas'],
            paragraph: 'A Aquatec realiza a limpeza de fossas sépticas <br/> de maneira eficiente, garantindo o bom <br/> funcionamento do sistema de saneamento e <br/> evitando transbordamentos ou mau cheiro. '
        },
        {
            num: '05',
            title: ['Desentupimento', 'de ralos'],
            paragraph: 'A Aquatec limpa seu ralo de forma eficiente, <br/> removendo resíduos e obstruções que podem <br/> causar mau cheiro ou entupimentos. Nosso <br/> serviço garante que a água escoe corretamente.'
        },
    ]

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(`.${styles.wrapper}`, {
            xPercent: -80,
            scrollTrigger: {
                trigger: `.${styles.wrapper}`,
                start: '-10% 0%',
                end: '100% 0%',
                scrub: true,
                pin: true,
                onEnter: () => {
                    AnimateUpElement(`${styles.card} h3 span`, '0')
                }
            }
        })

        return () => {
            ScrollTrigger.killAll()
            gsap.killTweensOf(`.${styles.wrapper}`)
            gsap.killTweensOf(`.${styles.card} h3 span`)
        }

    }, [])

    return (
        <section className={styles.services} id='services'>

            <h2>
                <span className={styles.circle} />
                Serviços
            </h2>

            <div className={styles.line}></div>

            <div className={styles.wrapper}>

                {cards.map((card, index,) => (

                    <a
                        href={`https://api.whatsapp.com/send?phone=8191293041&text=Olá, eu gostaria de fazer um orçamento sobre ${card.title[0]} ${card.title[1]}`}
                        target='_blank'
                        className={styles.card}
                        onMouseEnter={() => {
                            animateCursorEnter()
                            animateCursorChangeImage(index)
                        }}
                        onMouseLeave={animateCursorLeave}>

                        <span>({card.num})</span>
                        <h3><span>{card.title[0]} <br /> {card.title[1]}</span></h3>
                        <p dangerouslySetInnerHTML={{ __html: card.paragraph }} />

                    </a>

                ))}

            </div>

        </section>
    )
}