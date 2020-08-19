import React from 'react';
import style from './Question.module.scss';

function Question() {
    return (
        <div className={`${style.Question} ${style['border-bottom']}`}>
            <div className={`${style['form-group']}`}>
                <h4 className={`${style['h5']} ${style['mb-3']}`}>
                    Aliquam scelerisque vulputate lectus quis placerat. Mauris ut quam varius, consectetur lectus eu, egestas arcu.
                </h4>
                <div
                    className={`${style['form-check']} ${style['form-check-inline']}`}
                >
                    <input
                        className={`${style['form-check-input']}`}
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                    />
                    <label
                        className={`${style['form-check-label']}`}
                        htmlFor="exampleRadios1"
                    >
                        1
                    </label>
                </div>
                <div
                    className={`${style['form-check']} ${style['form-check-inline']}`}
                >
                    <input
                        className={`${style['form-check-input']}`}
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                    />
                    <label
                        className={`${style['form-check-label']}`}
                        htmlFor="exampleRadios2"
                    >
                        2
                    </label>
                </div>
                <div
                    className={`${style['form-check']} ${style['form-check-inline']}`}
                >
                    <input
                        className={`${style['form-check-input']}`}
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios3"
                        value="option3"
                    />
                    <label
                        className={`${style['form-check-label']}`}
                        htmlFor="exampleRadios3"
                    >
                        3
                    </label>
                </div>
                <div
                    className={`${style['form-check']} ${style['form-check-inline']}`}
                >
                    <input
                        className={`${style['form-check-input']}`}
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios4"
                        value="option4"
                    />
                    <label
                        className={`${style['form-check-label']}`}
                        htmlFor="exampleRadios4"
                    >
                        4
                    </label>
                </div>
                <div
                    className={`${style['form-check']} ${style['form-check-inline']}`}
                >
                    <input
                        className={`${style['form-check-input']}`}
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios5"
                        value="option5"
                    />
                    <label
                        className={`${style['form-check-label']}`}
                        htmlFor="exampleRadios5"
                    >
                        5
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Question;