import React from 'react';
import './IconUrlBlock.css';

export function IconUrlBlock({obj}) {

    return (
        <div className='icons-block'>
            {
                obj.done &&
                obj.githubLink &&
                <a id='git' href={obj.githubLink} target='_blank' rel="noopener noreferrer">Домашняя работа</a>
            }

            {
                obj.hasOwnProperty('finalWork') &&
                obj.finalWork &&
                <a id='gitFW' href={obj.finalWorkGithubUrl} target='_blank' rel="noopener noreferrer">Итоговая
                    работа</a>
            }

            {
                obj.done && <div className='icon icon-done'/>
            }

            {
                obj.inProcess && <div className='icon icon-pause'/>
            }

            {
                !obj.inDevelopment &&

                obj.hasOwnProperty('show') ?
                    obj.show ? <div className='icon icon-arrow-up'/> : <div className='icon icon-arrow-down'/>
                    : null
            }

            {
                obj.hasOwnProperty('aboutMeShow') ?

                    obj.aboutMeShow ? <div className='icon icon-arrow-up'/> : <div className='icon icon-arrow-down'/>
                    : null
            }

            {
                obj.hasOwnProperty('workExperienceShow') ?

                    obj.workExperienceShow ? <div className='icon icon-arrow-up'/> :
                        <div className='icon icon-arrow-down'/>
                    : null
            }

            {
                obj.hasOwnProperty('educationShow') ?

                    obj.educationShow ? <div className='icon icon-arrow-up'/> : <div className='icon icon-arrow-down'/>
                    : null
            }

            {
                obj.hasOwnProperty('coursesListShow') ?

                    obj.coursesListShow ? <div className='icon icon-arrow-up'/> :
                        <div className='icon icon-arrow-down'/>
                    : null
            }
        </div>
    )
}