import React from 'react';
import style from './Admin.module.scss';

function Admin() {
    return (
        <div className={`${style.Admin} ${style['py-3']}`}>
            <div className={`${style['container-fluid']}`}>
                <div className={`${style['row']}`}>
                    <div
                        className={`${style['col-12']} ${style['col-sm-3']} ${style['col-md-3']} ${style['col-lg-2']}`}>
                        <aside className={`${style.sideMenu}`}>
                            <ul
                                className={`${style['list-group']} ${style['mb-2']}`}
                            >
                                <li className={`${style['list-group-item']}`}>
                                    Menu
                                </li>
                                <li className={`${style['list-group-item']}`}>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li className={`${style['list-group-item']}`}>
                                    <a href="#">Surveys</a>
                                </li>
                                <li className={`${style['list-group-item']} ${style['list-group-item-info']}`}>
                                    <a
                                        className={`${style['text-bold']}`}
                                        href="#">Users</a>
                                </li>
                                <li className={`${style['list-group-item']}`}>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div
                        className={`${style['col-12']} ${style['col-sm-9']} ${style['col-md-9']} ${style['col-lg-10']}`}>
                        <div className={`${style['card']}`}>
                            <div className={`${style['card-body']}`}>
                                <h1>Cras metus ante, mollis vitae viverra sed</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper
                                    elementum vehicula. Nam rhoncus eleifend mattis. In hac habitasse platea dictumst.
                                    Donec ut convallis orci. Proin sagittis sed felis sit amet efficitur. Ut augue leo,
                                    dapibus eget magna eu, porttitor consectetur sapien. Nam convallis felis sed
                                    consequat posuere. Cras metus ante, mollis vitae viverra sed, imperdiet sit amet
                                    metus. Mauris eget blandit tortor. Praesent tincidunt feugiat mi sit amet viverra.
                                    Aenean venenatis sagittis pharetra. Cras sed ullamcorper purus. Nunc pretium
                                    pellentesque tortor, vel ullamcorper purus interdum vitae. Nullam convallis dui
                                    congue urna pellentesque iaculis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;