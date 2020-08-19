import React from 'react';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className={`${style.Home} ${style['container']}`}>
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
                <Link
                    className={`${style['btn']} ${style['btn-primary']} ${style['btn-lg']}`}
                    to="/survey"
                    role="button"
                >
                    Start survey now!
                </Link>
            </div>
        </div>
    );
}

export default Home;