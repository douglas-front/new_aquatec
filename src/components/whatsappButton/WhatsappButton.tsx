import styles from './whatsappButton.module.css'

export default function WhatsappButton() {
    return (
        <a className={styles.button} href="https://api.whatsapp.com/send?phone=8191293041&text=Olá, eu gostaria de fazer um orçamento"
        >
            <img src="/whats.png" alt="botão para o whatsapp" title="ir para o whatsapp" />
        </a>
    )
}