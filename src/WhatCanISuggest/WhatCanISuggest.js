import React from "react";
import styles from './WhatCanISuggest.module.css';

const WhatCanISuggest = () => {
    return (
        <section className={styles.whatCanISuggest}>
            <p className={styles.whatCanISuggestText}>
                Начинающий разработчик
                ищет организацию с которой будет расти профессионально,
                помогать расти компании, доставлять радость клиентам,
                создавая удобные програмные продукты.
            </p>

            <p className={styles.whatCanISuggestText}>
                К сожалению не могу похвастаться опытом работы в IT сфере
                (за плечами большой опыт банковской работы),
                но обладаю сильным желанием и стремлением развиваться в сфере web-разработки,
                постоянно изучать новые технологий и углублять уже существующие знания.
            </p>
        </section>
    )
}

export default WhatCanISuggest;