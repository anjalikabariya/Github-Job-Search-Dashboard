import React from 'react';
import JobCard from '../JobCard/JobCard'

function JobContainer({jobs}) {
    // console.log({'JonContainer log:'});
    // console.log({jobs});




    return (
        <>
        <div>
            {jobs.map((job) => {
                return (
                    // <ReactMarkdown astPlugins={[parseHtml]} allowDangerousHtml children={description} />
                    <JobCard id={job.id} title={job.title} description={job.description} />
                )
            })}
        </div>
        </>
    )
}
    
export default JobContainer;