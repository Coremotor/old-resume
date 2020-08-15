import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css'
import {onCourseTitleClickHandler, onModuleTitleClickHandler} from "./store/actionCreators/onCourseTitleClickHandler";


function App() {

    const course = useSelector(state => state.javascript2019);
    const dispatch = useDispatch();


    return (
        <section>
            <h1 onClick={() => {

                dispatch(onCourseTitleClickHandler(!course.show, course.id, course.title))

            }}>{course.title}</h1>

            <div className={course.show ? '' : 'displayNone'}>

                {
                    course.body.map((module, index) => {
                        return (
                            <article key={index}>
                                <h2 onClick={
                                    () => {

                                        dispatch(onModuleTitleClickHandler(course.id, !module.show, module.id));

                                    }
                                }>{module.title}</h2>


                                <div className={module.show ? '' : 'displayNone'}>
                                    {
                                        module.lessons.map((lesson, index) => {
                                            return (
                                                <p key={index}>{lesson.title} <span>{lesson.githubLink}</span></p>

                                            )
                                        })
                                    }
                                </div>
                            </article>

                        )
                    })
                }

            </div>

        </section>
    );
}

export default App;
