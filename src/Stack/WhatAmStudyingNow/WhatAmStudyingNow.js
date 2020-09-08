import React from "react";
import styles from './WhatAmStudyingNow.module.css'

const WhatAmStudyingNow = () => {
    return (
        <section className={styles.whatAmStudyingNow}>
            <h2 className={styles.whatAmStudyingNowTitle}>В процессе изучения:</h2>
            <ul className={styles.whatAmStudyingNowList}>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>React Native</li>
                <li>Книга "Чистый код. Создание, анализ и рефакторинг" Мартин Роберт К.</li>
            </ul>
        </section>
    )
}

export default WhatAmStudyingNow;