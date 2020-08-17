import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Course.css'
import {onCourseTitleClickHandler, onModuleTitleClickHandler} from "../store/actionCreators/onCourseTitleClickHandler";
import {IconUrlBlock} from "../IconUrlBlock/IconUrlBlock";


function Course({name}) {

    const course = useSelector(state => state[name]);
    const dispatch = useDispatch();

    return (
        <section className='course-section'>
            <div className='title-wrapper'
                 onClick={() => {
                     dispatch(onCourseTitleClickHandler(!course.show, course.id, course.title))
                 }}
            >
                <h1>{course.title}</h1>
                <IconUrlBlock obj={course}/>
            </div>


            <ul className={course.show ? 'course-list' : 'displayNone course-list'}>
                {
                    course.body.map((module, index) => {
                        return (
                            <li className='course-list-item' key={index}
                                onClick={
                                    () => {
                                        dispatch(onModuleTitleClickHandler(course.id, !module.show, module.id));
                                    }
                                }
                            >
                                <div className='title-wrapper'>
                                    <h4>{module.title}</h4>
                                    <IconUrlBlock obj={module}/>
                                </div>

                                <ul className={module.show ? 'module-list' : 'displayNone module-list'}>
                                    {
                                        module.lessons.map((lesson, index) => {
                                            return (
                                                <li className='module-list-item' key={index}>
                                                    <h6>{lesson.title}</h6>
                                                    <IconUrlBlock obj={lesson}/>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default Course;
