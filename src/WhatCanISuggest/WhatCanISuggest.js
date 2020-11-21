import React from "react";
import styles from './WhatCanISuggest.module.css';

const WhatCanISuggest = () => {
    return (
        <section className={styles.whatCanISuggest}>
            <p className={styles.whatCanISuggestText}>
                Frontend разработчик
                ищет организацию с которой будет расти профессионально,
                помогать расти компании, доставлять радость клиентам,
                создавая удобные програмные продукты.
            </p>
        </section>
    )
}

export default WhatCanISuggest;