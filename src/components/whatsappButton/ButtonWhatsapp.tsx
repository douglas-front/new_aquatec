import styles from './ButtonWhatsapp.module.css'

export default function ButtonWhatsapp() {
    return (
        <a 
            className={styles.button} 
            href="https://api.whatsapp.com/send?phone=8191293041&text=Olá, eu gostaria de fazer um orçamento"
            target='_blank'
        >
            <img src="/whats.png" alt="botão para o whatsapp" title="ir para o whatsapp" />
        </a>
    )
}