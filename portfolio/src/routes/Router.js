import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage/HomePage';
import AboutMePage from '../pages/AboutMePage/AboutMePage'
import ExperiencesPage from '../pages/ExperiencesPage/ExperiencesPage'
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import Project1 from '../pages/Project1Page/Project1';
import Project2Page from '../pages/Project2Page/Project2Page';
import Project3Page from '../pages/Project3Page/Project3Page';
import Project4Page from '../pages/Project4Page/Project4Page';
import Project5Page from '../pages/Project5Page/Project5Page';

export function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/aboutme">
                    <AboutMePage />
                </Route>

                <Route exact path="/experiences">
                    <ExperiencesPage />
                </Route>

                <Route exact path="/portfolio">
                    <PortfolioPage />
                </Route>

                <Route exact path="/portfolio/project1">
                    <Project1 />
                </Route>

                <Route exact path="/portfolio/project2">
                    <Project2Page />
                </Route>

                <Route exact path="/portfolio/project3">
                    <Project3Page />
                </Route>

                <Route exact path="/portfolio/project4">
                    <Project4Page />
                </Route>

                <Route exact path="/portfolio/project5">
                    <Project5Page />
                </Route>

                <Route exact path="/contact">
                    <ContactPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}