import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToPortfolio, goToProject1 } from '../../routes/coordinator'
import liqfy from '../../imgs/liqfy.jpeg'
import { Main, Body, Projects, Card, Info, Logo } from './Styled'


export default function Project5() {
    const history = useHistory()

    const project5 = "Liqfy;"

    return (
        <Main>
            <Header />

            <Body>
                <Projects>
                    <i class="ri-home-4-line ri-3x" onClick={() => goToPortfolio(history)}></i> <h3>project-5: </h3> <h3> {project5}</h3>
                </Projects>
                <Card>
                    <Logo>
                        <a target="_blank" href="https://liqfy.surge.sh/"><img src={liqfy}></img></a>
                    </Logo>
                    <a target="_blank" href="https://github.com/hgalvao98/liqfy"><i class="ri-github-fill ri-2x"></i></a>
                    <Info>
                        <p>This project was made for Liqfy, a loan company based in Brazil.

                            The main goal of this project was to get leads using the form developed integraded with RDStation. </p>
                        <br />
                        <p>Technologies used: React, Styled-Components, Axios, React Hooks, Router, RDStation</p>
                        <br />
                    </Info>
                </Card>

            </Body>
        </Main>
    )
}