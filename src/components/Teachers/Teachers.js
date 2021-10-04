import React from 'react';
import './Teachers.css';

const Teachers = () => {
    return (
        <div>
            <h1 className="teacher-title">OUR TEACHERS</h1>
            <div className="teacher-head">
                <div className="single-teacher">
                    <img src="https://thumbs.dreamstime.com/b/arab-teacher-front-chalkboard-arab-teacher-front-chalkboard-141130614.jpg" alt="" />
                    <div className="teachers-bio">
                        <small className="teacher-name">Abdur Rahman</small> <br />
                        <small>Chairman</small> <br />
                        <small>info@abdrhm.com</small>
                    </div>
                </div>
                <div className="multiple-teacher">
                    <img src="https://image.shutterstock.com/image-photo/education-activities-classroom-school-happy-260nw-81988780.jpg" alt="" />
                    <img src="https://thumbs.dreamstime.com/z/male-teacher-class-room-writing-arabic-blackboard-words-letters-using-chalk-to-educate-poor-children-translations-38572366.jpg" alt="" />
                    <img src="https://image.shutterstock.com/image-photo/children-school-classroom-260nw-100114883.jpg" alt="" />
                    <img src="https://c8.alamy.com/comp/F19E3J/moscow-russia-29th-aug-2015-an-arabic-teacher-at-abu-dhabi-fest-an-F19E3J.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Teachers;