import React from "react";
import {IconUrlBlock} from "../IconUrlBlock/IconUrlBlock";
import styles from './Module.module.css';
import {onModuleTitleClickHandler} from "../../store/actionCreators/onTitleClickHandler";
import {useDispatch} from "react-redux";

function Module({module, course}) {

    const dispatch = useDispatch();

    return (
        <li className={styles.modulesListItem}>
            <div className={styles.modulesListItemTitle}

                 onClick={
                     (event) => {
                         dispatch(onModuleTitleClickHandler(course.id, !module.show, module.id))
                     }
                 }
            >
                <h4>{module.title}</h4>
                <IconUrlBlock obj={module}/>
            </div>

            {
                module.show &&
                <ul className={styles.lessonsList}>
                    {
                        module.lessons.map((lesson, index) => {
                            return (
                                <li className={styles.lessonsListItem} key={index}>
                                    <p>{lesson.title}</p>
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