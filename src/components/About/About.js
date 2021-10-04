import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-head">
            <h1>WHY WE ARE ?</h1>
            <div className="about-body">
                <div className="about-text">
                    <p className="about-p">
                        <ul>
                        <li>
                            <p>
                                1. Our Arabic language classes are designed to <br /> help you achieve the results you want.
                            </p>
                            </li>
                            <li>
                            <p>
                               2. We have the largest library of online <br /> Arabic language courses.
                            </p>
                            </li>
                            <li>
                            <p>
                               3. Even beginners can work their way up to fluency.
                            </p>
                            </li>
                            <li>
                            <p>
                                4. Work 1-on-1 with expert teachers and native <br /> speakers who will encourage you to always improve.
                            </p>
                            </li>
                            <li>
                            <p>
                                5. Choose between 4 course in Modern Standard Arabic.
                            </p>
                            </li>
                            <li>
                            <p>
                                6. We meet the guidelines for: International <br /> Baccalaureate (IB) – Language B Arabic exam.
                            </p>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;