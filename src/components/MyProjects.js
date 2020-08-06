import React from 'react'
import {Link} from 'react-router-dom'

const MyProjectCard = ({projects}) => {
    return (
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">PROJECTS I WORKED ON</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div class="portfolio">
                {projects&&
                   projects.map((project)=>(
                        <Link to={`/project/${project.id}`} class="portfolio__item">
                            <img src={`img/${project.img}`} alt="" class="portfolio__img" />
                            <div class="middle">
                                <div class="text">{project.languages}</div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </section>
    )
}
export default MyProjectCard