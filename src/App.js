import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css'
import {onCourseTitleClickHandler, onModuleTitleClickHandler} from "./store/actionCreators/onCourseTitleClickHandler";
import {IconSet} from "./IconSet";


function App() {

    const course = useSelector(state => state.phpDeveloperChapterOne);
    const dispatch = useDispatch();

    return (
        <section>

            <div className='title-wrapper'>
                <h1 onClick={() => {

                    dispatch(onCourseTitleClickHandler(!course.show, course.id, course.title))

                }}>{course.title}</h1>

                <IconSet obj={course}/>

            </div>


            <div className={course.show ? '' : 'displayNone'}>

                {
                    course.body.map((module, index) => {
                        return (
                            <article key={index}>

                                <div className='title-wrapper'>
                                    <h4 onClick={
                                        () => {

                                            dispatch(onModuleTitleClickHandler(course.id, !module.show, module.id));

                                        }
                                    }>{module.title}</h4>

                                    <IconSet obj={module}/>

                                </div>

                                <ul className={module.show ? '' : 'displayNone'}>
                                    {
                                        module.lessons.map((lesson, index) => {
                                            return (

                                                <li className='p-wrapper' key={index}>{lesson.title}

                                                    <IconSet obj={lesson}/>

                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </article>
                        )
                    })
                }

            </div>

        </section>
    );
}

export default App;
