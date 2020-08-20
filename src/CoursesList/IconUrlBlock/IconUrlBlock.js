import React from 'react';
import './IconUrlBlock.css';

export function IconUrlBlock({obj}) {

    return (
        <div className='icons-block'>
            {
                obj.done &&
                obj.githubLink && <a href={obj.githubLink}>GitHub</a>
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
        </div>
    )
}