import React from 'react';
import style from './App.module.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../components/home/Home';
import Survey from '../components/survey/Survey';
import ThankYou from '../components/survey/thank-you/ThankYou';

function App() {
    return (
        <Router>
            <div className={style.App}>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/survey">
                        <Survey/>
                    </Route>
                    <Route exact path="/survey/thank-you">
                        <ThankYou/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
