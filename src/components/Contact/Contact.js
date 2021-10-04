import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Contact.css';

const Contact = () => {
    const history = useHistory();
    const messegeBtn = () =>{
        history.push('/messege')
    }
    return (
        <div className="contact-body">
            <h1 className="contact-title">Contact With Us</h1>
            <div className="contact-body-1">
                <div className="contact-img">
                <img src="https://image.shutterstock.com/image-illustration/hanging-contact-us-symbols-front-260nw-1037046826.jpg" alt="" />
                </div>
                <div className="contact-detail">
                    <h3>Address</h3>
                    <h5>Dhour, Uttara-13, Dhaka Bangladesh.</h5>
                    <h3>Phone</h3>
                    <h5>+8801716149429</h5>
                    <h5>+8801744503499</h5>
                    <h3>Email</h3>
                    <h5 className="margin-bottom">farukabdullahal9@gmail.com</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write YOu Want</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <button onClick={messegeBtn} className="form-btn">SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;