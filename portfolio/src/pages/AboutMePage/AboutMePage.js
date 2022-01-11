import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Main, Body } from './Styled'
import Resume from '../../assets/Resume.pdf'
import Curriculo from '../../assets/Curriculo.pdf'

export default function AboutMePage() {

    return (
        <Main>
            <Header />
            <Body>
                <h1>Henrique Galvão</h1>
                <p>My name is Henrique Galvão and I was born and
                    raised in the beautiful <em>São Paulo, Brazil</em>. I'm
                    currently fluent in two languages, <em>Portuguese
                        and English</em>. I'm a <em>University of Arizona Alumni
                            with a Bachelor's Degree in Marketing</em> through the
                    Eller College of Management. I have developed and
                    advanced my skills as a marketing professional
                    through my previous leadership position as
                    Advertisement Chair for Sigma Alpha Mu and my summer
                    internship role at <em>DocuSign</em> in Seattle, WA as their
                    Business Development Intern. I'm currently a Full Stack Web
                    Developer working as a Front-End Web Developer for Compass. UOL.
                    <br />
                    <br />
                    To see the code for this website or all my projects visit my <a href="https://github.com/hgalvao98"><em>GitHub</em></a>
                </p>
                <a href={Curriculo} download><i class="ri-pages-line" />Baixe meu CV!(Portugues)</a>
                <a href={Resume} download><i class="ri-pages-line" />Download my CV!(English)</a>
            </Body>

        </Main>
    )
}