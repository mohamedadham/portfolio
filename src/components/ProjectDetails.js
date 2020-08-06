import React from 'react'
import Header from './Header'

const ProjectDetails=({project})=>{
    return(
       <>
        <Header />
        <section className="intro" >
            <h1 className="section__title section__title--intro">
               <strong>{project.title}</strong>
            </h1>
    <p className="section__subtitle section__subtitle--intro">{project.team?"As a part of team": "Solo project"}</p>
            <img src={`/portfolio/img/${project.img}`} alt="" className="intro__img" />
        </section>
        
        <div className="portfolio-item-individual">
            <p>{project.description}</p>
            <img src={`/portfolio/img/${project.img2}`} alt="" />
            <br />
             <p><strong>Langauages and Technologies used: </strong> {project.languages}</p>
            {project.featuresIDeveloped&&<p><strong>Features I Developed:</strong>
            <ul>
                {project.featuresIDeveloped.map((feature)=><li>{feature}</li>)}
            </ul> </p> }
            {!project.link?
            <p>
             <a target="_blank" href={project.githublink} className="btn">Github Repo</a>
            </p>
             :
            <div className="project-buttons"> 
            <a target="_blank" href={project.githublink} className="btn">Github Repo</a> <a target="_blank" href={project.link}className="btn">View</a>
            </div>
            }


        </div>
        </>
     
    )
}
export default ProjectDetails