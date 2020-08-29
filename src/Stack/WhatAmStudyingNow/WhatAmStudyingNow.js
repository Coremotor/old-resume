import React from "react";
import styles from './WhatAmStudyingNow.module.css'

const WhatAmStudyingNow = () => {
    return (
        <section className={styles.whatAmStudyingNow}>
            <h2 className={styles.whatAmStudyingNowTitle}>В процессе изучения:</h2>
            <ul className={styles.whatAmStudyingNowList}>
                <li className={styles.whatAmStudyingNowListItem}>PHP</li>
                <li className={styles.whatAmStudyingNowListItem}>React</li>
                <li className={styles.whatAmStudyingNowListItem}>React Native</li>
            </ul>
        </section>
    )
}

export default WhatAmStudyingNow;