import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div
            className={`${style.Header} ${style['d-flex']} ${style['flex-column']} ${style['flex-md-row']} ${style['align-items-center']} ${style['p-3']} ${style['px-md-4']} ${style['bg-white']} ${style['border-bottom']} ${style['shadow-sm']}`}
        >
            <Link
                className={`${style['my-0']} ${style['mr-md-auto']}`}
                to='/'
            >
                <h5
                    className={`${style['font-weight-normal']}`}
                >
                    Company name
                </h5>
            </Link>
            <nav
                className={`${style['my-2']} ${style['my-md-0']} ${style['mr-md-3']}`}
            >
                <a
                    className={`${style['p-2']} ${style['text-dark']}`}
                    href="#"
                >
                    Features
                </a>
                <a
                    className={`${style['p-2']} ${style['text-dark']}`}
                    href="#"
                >
                    Enterprise
                </a>
                <a
                    className={`${style['p-2']} ${style['text-dark']}`}
                    href="#"
                >
                    Support
                </a>
                <a
                    className={`${style['p-2']} ${style['text-dark']}`}
                    href="#"
                >
                    Pricing
                </a>
            </nav>
            <Link
                className={`${style['btn']} ${style['btn-outline-primary']}`}
                to="/admin"
            >Admin</Link>
        </div>
    );
}

export default Header;