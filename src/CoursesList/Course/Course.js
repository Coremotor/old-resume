import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Course.module.css';
import '../IconUrlBlock/IconUrlBlock.css';
import {IconUrlBlock} from "../IconUrlBlock/IconUrlBlock";
import Module from "../Module/Module";
import {onCourseTitleClickHandler} from "../../store/actionCreators/onTitleClickHandler";

function Course({name}) {

    const course = useSelector(state => state[name]);

    const dispatch = useDispatch();

    return (
        <li className={styles.coursesListItem}>
            <div className={styles.coursesListItemTitle}
                 onClick={
                     (event) => {
                         if (event.target.id === 'gitFW') return;
                         dispatch(onCourseTitleClickHandler(!course.show, course.id, course.title))
                     }
                 }
            >
                <h2>{course.title}</h2>
                <IconUrlBlock obj={course}/>
            </div>

            {
                course.show &&
                <ul className={styles.modulesList}>
                    {
                        course.body.map((module, index) => {
                            return (
                                <Module key={index} module={module} course={course}/>
                            )
                        })
                    }
                </ul>
            }
        </li>
    );
}

export default Course;
