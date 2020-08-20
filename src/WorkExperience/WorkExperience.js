import React from "react";
import styles from './WorkExperience.module.css';

const WorkExperience = () => {
    return (
        <section className={styles.workExperience}>
            <div className={styles.workExperienceTitleWrapper}>
                <h2 className={styles.workExperienceTitle}>Опыт работы</h2>

                <div>arrow</div>
            </div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </section>
    )
}

export default WorkExperience;