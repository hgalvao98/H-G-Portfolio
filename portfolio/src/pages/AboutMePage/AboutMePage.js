import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Main, Body } from './Styled'
import { goToHomePage, goToPortfolio } from '../../routes/coordinator'

export default function AboutMePage() {
    const history = useHistory()

    return (
        <Main>
            <Header />
            <Body>
                <h1>Henrique Galvão</h1>
                <p>My name is Henrique Galvao and I was born and 
                    raised in the beautiful <em>São Paulo, Brazil</em>. I'm 
                    currently fluent in two languages, <em>Portuguese  
                    and English</em>. I'm a <em>University of Arizona Alumni 
                    with a Bachelor's Degree in Marketing</em> through the 
                    Eller College of Management. I have developed and 
                    advanced my skills as a marketing professional 
                    through my previous leadership position as 
                    Advertisement Chair for Sigma Alpha Mu and my summer
                     internship role at <em>DocuSign</em> in Seattle, WA as their 
                     Business Development Intern. I'm currently on the way 
                     to become a Full Stack Web Developer. I plan on working 
                     as a Web Dev after finishing my courses.</p>
            </Body>
            
        </Main>
    )
}