import React from 'react'

const Intro = () => {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Mohamed <span>Adham</span></strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Full-Stack developer</p>
            <img src="img/adham-1.jpg" alt="a picture of Mohamed Adham smiling" className="intro__img" />
        </section>
    )
}
export default Intro