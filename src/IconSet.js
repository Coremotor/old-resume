import React, {Fragment} from 'react';

export function IconSet({obj}) {

    return (
        <Fragment>
            {
                obj.githubLink
                    ? <span>: <a href={obj.githubLink}>{obj.githubLink}</a></span>
                    : null
            }

            {
                obj.done
                    ? <div className='icon-done'/>
                    : null
            }

            {
                obj.inProcess
                    ? <div className='icon-pause'/>
                    : null
            }
        </Fragment>
    )
}