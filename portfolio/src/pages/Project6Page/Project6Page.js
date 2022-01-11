import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { goToPortfolio } from '../../routes/coordinator'
import tesla from '../../imgs/tesla.png'
import { Main, Body, Projects, Card, Info, Logo, Icons } from './Styled'


export default function Project6() {
    const history = useHistory()

    const project6 = "TeslaApp;"

    return (
        <Main>
            <Header />

            <Body>
                <Projects>
                    <i class="ri-home-4-line ri-3x" onClick={() => goToPortfolio(history)}></i> <h3>project-6: </h3> <h3> {project6}</h3>
                </Projects>
                <Card>
                    <Logo>
                        <img src={tesla}></img>
                    </Logo>
                    <Icons>
                        <a target="_blank" href="https://github.com/hgalvao98/TeslaApp"><i class="ri-github-fill ri-2x"></i></a>
                        <a target="_blank" href="https://snack.expo.dev/@hgalvao/33689a"><i class="ri-smartphone-line ri-2x"></i></a>
                    </Icons>
                    <Info>
                        <p>This was my first React Native project. It is a clone of the Tesla Mobile Website as an App.
                            I am very proud as I made the static part with an introductory course and the rest I did by myself. </p>
                        <br />
                        <p>Technologies used: React Native, React-Navigation, Expo</p>
                        <br />
                        <p>*Click the phone icon to see it working with Expo Snack</p>
                    </Info>
                </Card>

            </Body>
        </Main>
    )
}