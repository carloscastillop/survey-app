import React from 'react';
import style from './Survey.module.scss';
import Question from '../question/Question';
import {Link} from 'react-router-dom';

function Survey() {
    const year = 2020;
    const month = 'September';
    const date = `${month} ${year}`;
    return (
        <div className={`${style.Survey} ${style['container']}`}>
            <h1
                className={`${style['my-4']}`}
            >
                {date}
            </h1>
            <div className={`${style.card}`}>
                <div className={`${style['card-body']}`}>
                    <form>
                        <Question/>
                        <Question/>
                        <Question/>
                        <Question/>
                        <Question/>
                        <Link
                            className={`${style['btn']} ${style['btn-primary']} ${style['btn-lg']}`}
                            to="/survey/thank-you"
                            role="button"
                        >
                            Submit survey
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Survey;