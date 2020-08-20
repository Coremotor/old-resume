import React, {useState} from 'react';
import {useSelector} from "react-redux";
import styles from './Course.module.css';
import {IconUrlBlock} from "../IconUrlBlock/IconUrlBlock";
import Module from "../Module/Module";


function Course({name}) {

    const course = useSelector(state => state[name]);
    const [courseState, setCourseState] = useState({
        showCourse: false,
    })

    return (
        <li className={styles.coursesListItem}>
            <div className={styles.coursesListItemTitle}
                 onClick={
                     () => setCourseState({showCourse: !courseState.showCourse})
                 }
            >
                <h1>{course.title}</h1>
                <IconUrlBlock obj={course}/>
            </div>

            {
                courseState.showCourse &&
                <ul className={styles.modulesList}>
                    {
                        course.body.map((module) => {
                            return (
                                <Module module={module}/>
                            )
                        })
                    }
                </ul>
            }
        </li>
    );
}

export default Course;
