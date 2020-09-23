import React, {useState} from "react";
import styles from './SelfEducation.module.css';
import {IconUrlBlock} from "../CoursesList/IconUrlBlock/IconUrlBlock";

const SelfEducation = () => {

    const [selfEducationShow, setSelfEducationShow] = useState({
        selfEducationShow: false,
    })

    return (
        <section className={styles.selfEducation}>
            <div className={styles.selfEducationTitleWrapper}
                 onClick={() => setSelfEducationShow({selfEducationShow: !selfEducationShow.selfEducationShow})}
            >
                <h2 className={styles.selfEducationTitle}>Самообучение вне курса Skillbox</h2>

                <IconUrlBlock obj={selfEducationShow}/>
            </div>

            {
                selfEducationShow.selfEducationShow &&
                <ul>
                    <li className={styles.selfEducationListItem}>
                        <p>Книга "Чистый код. Создание, анализ и рефакторинг" Мартин Роберт К.</p>
                    </li>

                    <li className={styles.selfEducationListItem}>
                        <p>Курс на Udemy.com: React JS. Практический курс 2020.</p>
                    </li>

                    <li className={styles.selfEducationListItem}>
                        <p>Курс на Udemy.com: Полный курс по JavaScript + React.</p>
                    </li>

                    <li className={styles.selfEducationListItem}>
                        <p>Курс на Udemy.com: Node JS. Практический курс.</p>
                    </li>

                    <li className={styles.selfEducationListItem}>
                        <p>Курс на Udemy.com: React Native 2020</p>
                    </li>
                </ul>
            }
        </section>
    )
}

export default SelfEducation;
