import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToProject1, goToProject3, goToProject2, goToProject4, goToProject5, goToHomePage } from '../../routes/coordinator'
import { Main, Body, Projects } from './Styled'


export default function PortfolioPage() {
    const history = useHistory()

    const projectsTitle = ".projects{"
    const project1 = "TodoApp;"
    const project2 = "TeslaApp(React Native);"
    const project3 = "iFuture;"
    const project4 = "FriendsApp(Ruby On Rails);"
    const project5 = "Liqfy;"

    return (
        <Main>
            <Header />
            <Body>
                <h1>{projectsTitle}</h1>
                <Projects onClick={() => goToProject1(history)}>
                    <h3>project-1: </h3> <h3> {project1}</h3>
                </Projects>
                <Projects onClick={() => goToProject2(history)}>
                    <h3>project-2: </h3> <h3> {project2}</h3>
                </Projects>
                <Projects onClick={() => goToProject3(history)}>
                    <h3>project-3: </h3> <h3> {project3}</h3>
                </Projects>
                <Projects onClick={() => goToProject4(history)}>
                    <h3>project-4: </h3> <h3> {project4}</h3>
                </Projects>
                <Projects onClick={() => goToProject5(history)}>
                    <h3>project-5: </h3> <h3> {project5}</h3>
                </Projects>
            </Body>
        </Main>
    )
}