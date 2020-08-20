import React from 'react';
import style from './ThankYou.module.scss';
import {Link} from 'react-router-dom';
import 'animate.css/animate.min.css';

function ThankYou() {
    return (
        <div className={`${style.ThankYou} ${style['container']} ${style['my-3']}`}>
            <div className={`${style['jumbotron']} animate__animated animate__zoomInDown`}>
                <h1 className={`${style['display-4']}`}>
                    Thank you!
                </h1>
                <p>
                    Vestibulum non elementum libero. Mauris et efficitur purus.
                </p>
                <Link
                    className={`${style['btn']} ${style['btn-primary']} ${style['btn-lg']}`}
                    to="/"
                    role="button"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}

export default ThankYou;