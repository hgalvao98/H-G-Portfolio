import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Main, Body } from './Styled'
import {goToPortfolio} from '../../routes/coordinator'

export function HomePage() {
    const history = useHistory()

    const projectsTitle = ".projects{"
    return (
        <Main>
            <Header />
            <Body>
                <h1 onClick={()=>goToPortfolio(history)}>{projectsTitle}</h1>
            </Body>
        </Main>
    )
}