import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../pages/landingpage'
import ProjectDetails from './ProjectDetails'
import { projectsData } from '../shared/projectsData'
import Footer from './Footer';

const Main = () => {
    const ProjectWithId = ({ match }) => {
        return (
            <ProjectDetails project={projectsData.filter((project) => project.id === parseInt(match.params.id, 10))[0]} />
        );
    };
    return (
        <>
            <div className="content">
                <Switch>
                    <Route path="/project/:id" component={ProjectWithId} />
                    <Route component={LandingPage} />
                </Switch>
            </div>
            <Footer />
        </>

    )
}
export default Main;