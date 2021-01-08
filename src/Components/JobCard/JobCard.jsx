import React from 'react';
import './JobCard.css';



function JobCard({id, title, location, url, logo}){
    return (

            <div className="jobCard">
                <>
                    <h2 className="jobCard__title">{title}</h2>
                </>
                <p className="jobCard__location">Location: {location}</p>
                <a className="jobCard__url" href={url}>Get more information here!</a>
            </div>
    )
}
    
export default JobCard;