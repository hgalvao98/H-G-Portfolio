import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Main, Body, Exp, Technologies } from './Styled'
import { goToHomePage, goToPortfolio } from '../../routes/coordinator'
import DocuSign from '../../imgs/DocuSign.png'
import compassUol from '../../imgs/compassUol.png'
import SAM from '../../imgs/SAM.png'
import UOFA from '../../imgs/UOFA.png'
import Adwords from '../../imgs/Adwords.png'
import Analytics from '../../imgs/Analytics.png'
import HTML from '../../imgs/HTML.png'
import ReactLogo from '../../imgs/ReactLogo.png'
import typescript2 from '../../imgs/typescript2.svg'
import redux from '../../imgs/redux.png'
import nodejs from '../../imgs/nodejs.png'
import mysql from '../../imgs/mysql.png'
import rubyonrails from '../../imgs/rubyonrails.png'

export default function ExperiencesPage() {
    const history = useHistory()
    const experiences = '.experiences{'
    const technologies = '.technologies{'

    return (
        <Main>
            <Header />
            <Body>

                <h2>{experiences}</h2>
                <Exp>
                    <img src={compassUol} alt='compassUol'></img><p><em>Compass.uol</em> is a Brazilian Tech Company that offer tech services and solutions. I am now acting as Front-end and DEV developer. Allocated Portinfo and internal projects. </p>
                </Exp>
                <Exp>
                    <img src={DocuSign} alt='docusign'></img><p><em>DocuSign</em> is an American Company that started in San Francisco. It’s services
                        allow organizations to manage electronic agreements. I spent 3 months interning
                        in a Business Development position. </p>
                </Exp>
                <Exp>
                    <img src={SAM} alt='sigma alpha mu'></img><p><em>Sigma Alpha Mu</em> is a National Fraternity. As a member I was able to become an Advertisement Chair. In that position I learned design skills that I still use today.
                        I designed everything for the Fraternity chapter (Shirts, posters, jerseys).</p>
                </Exp>
                <Exp>
                    <img src={UOFA} alt='university of arizona logo'></img><p>As I was studying at the <em>University Of Arizona</em>, I took on a Math and
                        Economics Tutor position. I felt like I could help others and also help myself
                        to develop people skills. It ended up being a great job as I met and learn to
                        interact with many different people from multiple backgrounds.</p>
                </Exp>
                <hr />
                <h2>{technologies}</h2>
                <Technologies>
                    <img src={Adwords} alt='adwords'></img>
                    <img src={Analytics} alt='Analytics'></img>
                    <img src={HTML} alt='HTML'></img>
                    <img src={ReactLogo} alt='React'></img>
                    <img src={typescript2} alt='typescript'></img>
                    <img src={redux} alt='redux'></img>
                    <img src={nodejs} alt='nodejs'></img>
                    <img src={mysql} alt='mysql'></img>
                    <img src={rubyonrails} alt='rubyonrails'></img>
                </Technologies>
            </Body>

        </Main>
    )
}