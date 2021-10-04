import React from 'react';
import './Home.css';
import {useHistory} from 'react-router';

const Home = () => {
    const history = useHistory();
    const handleBtn = () =>{
        history.push('/order');
    }
    return (
        <div className="home-body">
            <div className="home-text">
                <p className="home-text-head">Start Your Journey to Fluency
                    <br /> with Nama Arabic <br /> Model Institute.</p>
                <p className="home-text-p">
                Online Arabic courses for kids, teens and adults available 24/7 <br /> for all levels beginner to advanced).
                </p>
                <button onClick={handleBtn} className="home-btn">START LEARNING TODAY</button>
            </div>
        </div>
    );
};

export default Home;