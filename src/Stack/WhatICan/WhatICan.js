import React from "react";
import styles from './WhatICan.module.css'

const WhatICan = () => {
    return (
        <section className={styles.whatICan}>
            <h2 className={styles.whatICanTitle}>Навыки:</h2>
            <ul className={styles.whatICanList}>
                <li className={styles.whatICanListItem}>HTML5</li>
                <li className={styles.whatICanListItem}>CSS3, SCSS</li>
                <li className={styles.whatICanListItem}>Валидная, адаптивная кроссбраузерная верстка</li>
                <li className={styles.whatICanListItem}>БЭМ</li>
                <li className={styles.whatICanListItem}>JavaScript, ES6+</li>
                <li className={styles.whatICanListItem}>Базовые навыки React, Redux</li>
                <li className={styles.whatICanListItem}>Gulp</li>
                <li className={styles.whatICanListItem}>Webpack</li>
                <li className={styles.whatICanListItem}>Git</li>
            </ul>

        </section>
    )
}

export default WhatICan;