import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToProject1, goToProject3 } from '../../routes/coordinator'
import { goToProject2, goToHomePage } from '../../routes/coordinator'
import { Main, Body, Projects } from './Styled'


export default function PortfolioPage() {
    const history = useHistory()

    const projectsTitle = ".projects{"
    const project1 = "LabeX;"
    const project2 = "Minimal-Match;"
    const project3 = "iFuture;"

    return (
        <Main>
            <Header />
            <Body>
                <h1>{projectsTitle}</h1>
                <Projects onClick={()=>goToProject1(history)}>
                    <h3>project-1: </h3> <h3> {project1}</h3>
                </Projects>
                <Projects onClick={()=>goToProject2(history)}>
                    <h3>project-2: </h3> <h3> {project2}</h3>
                </Projects>
                <Projects onClick={()=>goToProject3(history)}>
                    <h3>project-3: </h3> <h3> {project3}</h3>
                </Projects>
            </Body>
        </Main>
    )
}