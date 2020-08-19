import React from 'react';
import style from './Footer.module.scss';

function Footer() {
    return (
        <footer
            className={`${style.Footer} ${style['pt-4']} ${style['my-md-5']} ${style['pt-md-5']} ${style['border-top']}`}>
            <div className={`${style['container']}`}>
                <div className={`${style['row']}`}>
                    <div className={`${style['col-12']} ${style['col-md']}`}>
                        <img
                            className={`${style['mb-2']}`}
                            src="https://via.placeholder.com/100?text=XYZ"
                            alt=""
                            width="50"
                            height="50"
                        />
                        <small
                            className={`${style['d-block']} ${style['mb-3']} ${style['text-muted']}`}
                        >&copy; 2017-2020</small>
                    </div>
                    <div
                        className={`${style['col-6']} ${style['col-md']}`}
                    >
                        <h5>Features</h5>
                        <ul
                            className={`${style['list-unstyled']} ${style['text-small']}`}
                        >
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`${style['col-6']} ${style['col-md']}`}
                    >
                        <h5>Resources</h5>
                        <ul
                            className={`${style['list-unstyled']} ${style['text-small']}`}
                        >
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`${style['col-6']} ${style['col-md']}`}
                    >
                        <h5>About</h5>
                        <ul
                            className={`${style['list-unstyled']} ${style['text-small']}`}
                        >
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                            <li>
                                <a className={`${style['text-muted']}`} href="#">Cool stuff</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;