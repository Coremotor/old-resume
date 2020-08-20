import React, {useState} from "react";
import {IconUrlBlock} from "../IconUrlBlock/IconUrlBlock";
import styles from './Module.module.css';

function Module({module}) {

    const [moduleState, setModuleState] = useState({
        showModule: false,
    })

    return (
        <li className={styles.modulesListItem}>
            <div className={styles.modulesListItemTitle}

                 onClick={
                     () => {
                         setModuleState({showModule: !moduleState.showModule})
                     }
                 }
            >
                <h4>{module.title}</h4>
                <IconUrlBlock obj={module}/>
            </div>

            {
                moduleState.showModule &&
                <ul className={styles.lessonsList}>
                    {
                        module.lessons.map((lesson, index) => {
                            return (
                                <li className={styles.lessonsListItem} key={index}>
                                    <h6>{lesson.title}</h6>
                                    <IconUrlBlock obj={lesson}/>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </li>
    )
}

export default Module;