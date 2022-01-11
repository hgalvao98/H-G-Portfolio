import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToPortfolio, goToProject1 } from '../../routes/coordinator'
import tinder from '../../imgs/tinder.png'
import { Main, Body, Projects, Card, Info, Logo } from './Styled'


export default function Project1() {
    const history = useHistory()

    const project2 = "Minimal Match;"

    return (
        <Main>
            <Header />

            <Body>
                <Projects>
                    <i class="ri-home-4-line ri-3x" onClick={() => goToPortfolio(history)}></i> <h3>project-2: </h3> <h3> {project2}</h3>
                </Projects>
                <Card>
                    <Logo>
                        <a target="_blank" href="http://minimal-match.surge.sh/"><img src={tinder}></img></a>
                    </Logo>
                    <a target="_blank" href="https://github.com/future4code/Henrique-Galvao/tree/master/semana9/semana9-astromatch/astromatch"><i class="ri-github-fill ri-2x"></i></a>
                    <Info>
                        <p>Created as a project for Labenu. This app has similar features to Tinder. It was made
                            using a public API. </p>
                        <br />
                        <p>Technologies used: React, Styled-Components, Axios.   </p>
                        <br />
                    </Info>
                </Card>

            </Body>
        </Main>
    )
}