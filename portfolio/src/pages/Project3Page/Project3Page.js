import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToPortfolio, goToProject1 } from '../../routes/coordinator'
import ifuture from '../../imgs/ifuture.png'
import { Main, Body, Projects, Card, Info, Logo } from './Styled'


export default function Project3() {
    const history = useHistory()

    const project2 = "iFuture;"

    return (
        <Main>
            <Header />

            <Body>
                <Projects>
                    <i class="ri-home-4-line ri-3x" onClick={() => goToPortfolio(history)}></i> <h3>project-3: </h3> <h3> {project2}</h3>
                </Projects>
                <Card>
                    <Logo>
                        <a target="_blank" href="https://labe-food2.surge.sh/"><img src={ifuture}></img></a>
                        <p>*Click the logo to go to the website</p>
                    </Logo>
                    <a target="_blank" href="https://github.com/future4code/paiva-labe-food2"><i class="ri-github-fill ri-2x"></i></a>
                    <Info>
                        <p>Created as a project for Labenu. This app has similar features to iFood. It was made
                            using a public API, please make sure to use DevTools to view the page as if it was in a mobile. </p>
                        <br />
                        <p>Technologies used: React, Styled-Components, Axios, React Hooks, Router, Material UI, React-Loading-Dot</p>
                        <br />
                    </Info>
                </Card>

            </Body>
        </Main>
    )
}