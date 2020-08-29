import React from "react";
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.contactsWrapper}>
                <a className={styles.phoneNumber} title="+7 (937) 939-70-14" href="tel:+79379397014" target="_blank"
                   rel="noopener noreferrer"> </a>
                <a className={styles.email} title="coremotor@outlook.com" href="mailto:coremotor@outlook.com"
                   target="_blank" rel="noopener noreferrer"> </a>
                <a className={styles.vk} href="https://vk.com/demakov_a_i" target="_blank"
                   rel="noopener noreferrer"> </a>
                <a className={styles.fb} href="https://www.facebook.com/maggots.core" target="_blank"
                   rel="noopener noreferrer"> </a>
            </div>

            <div className={styles.contactsWrapper}>
                <a className={styles.wa} href="https://wa.me/+79379397014" target="_blank"
                   rel="noopener noreferrer"> </a>
                <a className={styles.vbr} href="viber://chat?number=%2B79379397014" target="_blank"
                   rel="noopener noreferrer"> </a>
                <a className={styles.tg} href="https://telegram.me/coremotor" target="_blank"
                   rel="noopener noreferrer"> </a>
                <a className={styles.sk} href="skype:live:.cid.60c61dcbf39053d4?call" target="_blank"
                   rel="noopener noreferrer"> </a>
            </div>
        </section>
    )
}

export default Contacts;