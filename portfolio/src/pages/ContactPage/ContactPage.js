import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Main, Body, Info } from './Styled'
import WPP from '../../imgs/WPP.png'
import Linkedin from '../../imgs/Linkedin.png'
import mail from '../../imgs/mail.png'
import { goToHomePage, goToPortfolio } from '../../routes/coordinator'


export default function ContactPage() {
    const history = useHistory()

    const contact = '.contact{'

    return (
        <Main>
            <Header />
            <Body>
                <h1>{contact}</h1>
                <Info>
                    <a target='_blank' href='https://api.whatsapp.com/send?phone=5519996632278'>
                        <i class="ri-whatsapp-line ri-4x"></i>
                    </a>
                    <p>+5519996632278</p>
                </Info>
                <Info>
                    <a target='_blank' href='https://www.linkedin.com/in/henrique-galvao/'>
                        <i class="ri-linkedin-line ri-4x"></i>
                    </a>
                    <p>/henrique-galvao</p>
                </Info>
                <Info>
                    <a target='_blank' href='mailto: henrique.galvao@hotmail.com'>
                        <i class="ri-mail-line ri-4x"></i>
                    </a>
                    <p>henrique.galvao@hotmail.com</p>
                </Info>
            </Body>

        </Main>
    )
}