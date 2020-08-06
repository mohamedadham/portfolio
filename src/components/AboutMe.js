import React from 'react'

const AboutMe=()=>{
    return(
        <section className="about-me" id="about">
                <h2 className="section__title section__title--about">Who I am</h2>
                <p className="section__subtitle section__subtitle--about">Software Enginner</p>
                <div className="about-me__body">
                    <p>I am a graduate of Business Information System- Helwan University(2019). During college years, I was a part of many students activities in many positions; Web development participant, Quality Control head, Human Resources Management and R&D member then head.

                    Understanding business made me aware of the importance of Developer being aware of the work process, organisation's goals, being initiative, and how to continuously improve the work quality.<br /><br />

                    I joined open source - Application Development in Information Technology Institute(ITI), I am passionate for software engineering, I love that it includes quickly learning new skills, programming languages and being a part of a team working to reach a certain goal. Being a graduate of Information Technology Institute, quickly learning new things was a skill gained under pressure.

                    Recently I am interested in MERN Stack, but also have Java, Python, Laravel, php, Ruby, Angular under my belt. I am still enthusiastically learning new frameworks, technologies, or principles. </p>
                </div>

                <img src="/portfolio/img/adham2.jpg" alt="Jane leaning against a bus" className="about-me__img" />
        </section>
    )
}
export default AboutMe