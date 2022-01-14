import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToPortfolio, goToProject1 } from '../../routes/coordinator'
import LabeXLogo from '../../imgs/LabeXLogo.png'
import { Main, Body, Projects, Card, Info, Logo } from './Styled'


export default function Project1() {
    const history = useHistory()

    const project1 = "TodoApp;"

    return (
        <Main>
            <Header />

            <Body>
                <Projects>
                    <i class="ri-home-4-line ri-3x" onClick={() => goToPortfolio(history)}></i> <h3>project-1: </h3> <h3> {project1}</h3>
                </Projects>
                <Card>
                    <Logo>
                        <img src={LabeXLogo}></img>
                    </Logo>
                    <a target="_blank" href="https://github.com/hgalvao98/todoApp"><i class="ri-github-fill ri-2x"></i></a>
                    <Info>
                        <p>Created as a project to practice Express and NodeJs. This is a CRUD app, I also included a Drag and Drop library
                            to practice for the first time. </p>
                        <br />
                        <p>Technologies used: React, Styled-Components, Axios, React Hooks, React Beautiful Dnd, Express, NodeJs </p>
                        <br />
                    </Info>
                </Card>
            </Body>
        </Main>
    )
}