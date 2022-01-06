import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToPortfolio, goToProject1 } from '../../routes/coordinator'
import friendsLogo from '../../imgs/friendsLogo.png'
import { Main, Body, Projects, Card, Info, Logo } from './Styled'


export default function Project4() {
    const history = useHistory()

    const project4 = "FriendsApp;"

    return (
        <Main>
            <Header />

            <Body>
                <Projects>
                    <i class="ri-home-4-line ri-3x" onClick={() => goToPortfolio(history)}></i> <h3>project-4: </h3> <h3> {project4}</h3>
                </Projects>
                <Card>
                    <Logo>
                        <img alt='Friends Logo' src={friendsLogo}></img>
                    </Logo>
                    <a target="_blank" href="https://github.com/hgalvao98/FriendsApp"><i class="ri-github-fill ri-2x"></i></a>
                    <Info>
                        <p>Created as a personal project. This project was kept unpublished because it is a study project. It is a complete CRUD website! I still want to learn more about
                            Ruby On Rails so I am leaving the link to GitHub instead of the website itself. </p>
                        <br />
                        <p>Technologies used: Ruby, Ruby On Rails, Bootstrap</p>
                        <br />
                    </Info>
                </Card>

            </Body>
        </Main >
    )
}