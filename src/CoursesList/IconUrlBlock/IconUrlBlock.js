import React from 'react';
import './IconUrlBlock.css';

export function IconUrlBlock({obj}) {

    return (
        <div className='icons-block'>
            {
                obj.done &&
                // eslint-disable-next-line react/jsx-no-target-blank
                obj.githubLink && <a id='git' href={obj.githubLink} target='_blank'>GitHub</a>
            }

            {
                obj.hasOwnProperty('finalWork') &&
                // eslint-disable-next-line react/jsx-no-target-blank
                obj.finalWork && <a id='gitFW' href={obj.finalWorkGithubUrl} target='_blank'>GitHub</a>
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