import React from 'react';
import style from './App.module.scss';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <div className={`${style['container']}`}>
                <div className={`${style['jumbotron']}`}>
                    <h1 className={`${style['display-4']}`}>
                        September survey!
                    </h1>
                    <p className={`${style['lead']}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet diam mi.
                        Aenean ornare purus nec turpis ultricies.
                    </p>
                    <hr className={`${style['my-4']}`}/>
                    <p>
                        Vestibulum non elementum libero. Mauris et efficitur purus.
                    </p>
                    <a
                        className={`${style['btn']} ${style['btn-primary']} ${style['btn-lg']}`}
                        href="#"
                        role="button"
                    >
                        Start survey now!
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
