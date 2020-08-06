import React from 'react';
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Intro from '../components/Intro'
import MyServices from '../components/MyServices'
import MyProjectCard from '../components/MyProjects'
import {projectsData} from '../shared/projectsData'

const LandingPage = (props) => {
    return (
        <>
            <Header />
            <Intro />
            <MyServices />
            <AboutMe />
            <MyProjectCard projects={projectsData} />         
        </>
    )
}
export default LandingPage;