import { useState } from 'react'
import Button from '../../components/Button/Button'
import styles from './CallForm.module.css'

export default function CallForm() {
    const [message, setMessage] = useState({
        service: 'Desentupimento',
        details: 'Sem detalhes',
    })

    return (
        <section className={styles.callForm} id='callForm' aria-labelledby="callform-title">

            <h2 id="callform-title">
                <span className={styles.circle} aria-hidden="true" />
                Fale Conosco
            </h2>

            <form onSubmit={e => e.preventDefault()} aria-label="Formulário de contato para orçamento">
                <div className={styles.formService}>
                    <label htmlFor="service">Tipo de Serviço</label>
                    <input
                        onChange={e => setMessage({ service: e.target.value, details: message.details })}
                        type="text"
                        required
                        name="service"
                        id="service"
                        autoComplete="off"
                    />
                </div>

                <div className={styles.formMessage}>
                    <label htmlFor="message">Detalhes / Mensagem</label>
                    <textarea
                        onChange={e => setMessage({ service: message.service, details: e.target.value })}
                        name="message"
                        id="message"
                        required
                        autoComplete="off"
                    />
                </div>

                <Button
                    textWhatsApp={`olá gostaria de um orçamento. serviço: ${message.service}, detalhes: ${message.details}`}
                    backgroundColor='#fff'
                    fill='#0B5294'
                />
            </form>
        </section>
    )
}