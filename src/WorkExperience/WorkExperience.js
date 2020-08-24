import React, {useState} from "react";
import styles from './WorkExperience.module.css';

const WorkExperience = () => {

    const [workExperienceShow, setWorkExperienceShow] = useState({
        workExperienceShow: false,
    })

    return (
        <section className={styles.workExperience}>
            <div className={styles.workExperienceTitleWrapper}
                 onClick={() => setWorkExperienceShow({workExperienceShow: !workExperienceShow.workExperienceShow})}
            >

                <h2 className={styles.workExperienceTitle}>Опыт работы</h2>

                {
                    workExperienceShow.workExperienceShow ? <div className={styles.arrowUp}/> :
                        <div className={styles.arrowDown}/>
                }
            </div>

            {
                workExperienceShow.workExperienceShow &&
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            }

        </section>
    )
}

export default WorkExperience;