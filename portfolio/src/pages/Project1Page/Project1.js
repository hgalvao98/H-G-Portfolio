import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToPortfolio, goToProject1 } from '../../routes/coordinator'
import LabeXLogo from '../../imgs/LabeXLogo.png'
import { Main, Body, Projects, Card, Info, Logo } from './Styled'


export default function Project1() {
    const history = useHistory()

    const project1 = "LabeX;"

    return (
        <Main>
            <Header />
            
            <Body>
            <Projects>
            <i class="ri-arrow-left-fill ri-3x" onClick={() => goToPortfolio(history)}></i> <h3>project-1: </h3> <h3> {project1}</h3>
            </Projects>
                <Card>
                    <Logo>
                        <a target="_blank" href="http://labex-henrique.surge.sh"><img src={LabeXLogo}></img></a>
                    </Logo>
                    <Info>
                        <p>Created as a project for Labenu. This is a space travel website. You can create trips,
                            sign up for trips and also approve or reject candidates! It was made using a public API. </p>
                            <br />
                        <p>Technologies used: React, Styled-Components, Axios, React Router, React Hooks  </p>
                            <br />
                        <p>To enter Admin page:</p>
                        <p>Login:adm@gmail.com.br</p>
                        <p>Password: theyrecoming</p>
                    </Info>
                </Card>
            </Body>
        </Main>
    )
}