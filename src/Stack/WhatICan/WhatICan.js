import React from "react";
import styles from './WhatICan.module.css'

const WhatICan = () => {
    return (
        <section className={styles.whatICan}>
            <h2 className={styles.whatICanTitle}>Навыки:</h2>
            <ul className={styles.whatICanList}>
                <li>HTML5</li>
                <li>CSS3, SCSS</li>
                <li>Валидная, адаптивная кроссбраузерная верстка</li>
                <li>БЭМ</li>
                <li>JavaScript, ES6+</li>
                <li>Базовые навыки React, Redux</li>
                <li>Gulp</li>
                <li>Webpack</li>
                <li>Git</li>
            </ul>
        </section>
    )
}

export default WhatICan;