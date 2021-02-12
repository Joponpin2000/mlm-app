import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { register } from '../../redux/actions/userActions';
import { showErrorMsg, showSuccessMsg } from '../../helpers/message';

const SignUp = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, successmsg, error } = userRegister;
    const [errormsg, setErrormsg] = useState(error || false);
    const redirect = props.location.search ? props.location.search.split("=")[1] : null;
    const dispatch = useDispatch();

    useEffect(() => {

        if (error) setErrormsg(error);

    }, [error]);

    const handleSubmit = e => {
        e.preventDefault();

        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
            setErrormsg('All fields are required');
        }
        else if (!isEmail(email)) {
            setErrormsg('Invalid Email');
        }
        else if (!equals(password, confirmPassword)) {
            setErrormsg('Passwords do not match');
        }
        else {
            setErrormsg('');

            const formData = ({
                username,
                email,
                password
            })
            dispatch(register(formData));
        }

    };

    return (
        <div>
            <div className="main-template-about">
                <div className="section account-box">
                    <div className="blue-dark"></div>
                    <div className="light-blue-grad"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 my-5 py-5">
                                <div className="blue-form">
                                    <h1 className="mt-2 mb-4 increased-size">Start a free account today</h1>

                                    {successmsg && showSuccessMsg(successmsg)}
                                    {errormsg && showErrorMsg(errormsg)}
                                    <form className="my-form" onSubmit={handleSubmit} noValidate>
                                        <input name="username" autoFocus onChange={(e) => {
                                            setUsername(e.target.value);
                                            setErrormsg('');
                                        }} className="form-control" placeholder="Username" type="text" />
                                        <input name="email" onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrormsg('');
                                        }} className="form-control" placeholder="Enter your Email" type="email" />
                                        <input name="password" onChange={(e) => {
                                            setPassword(e.target.value);
                                            setErrormsg('');
                                        }} className="form-control" placeholder="Password" type="password" />
                                        <input name="password2" onChange={(e) => {
                                            setConfirmPassword(e.target.value);
                                            setErrormsg('');
                                        }} className="form-control" placeholder="Confirm Password" type="password" />
                                        <Button variant="primary" className="btn-block my-4" type="submit">
                                            {loading && <span className="">
                                                <span className="mx-3 text-dark">
                                                    <span className="spinner-border spinner-border-sm" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </span>
                                                </span>
                                            </span>
                                            }{' '}
                    Create Account
                </Button>
                                    </form>
                                    <div className="blue-form_question mb-5"><strong>Have an account?</strong> <Link to={redirect ? "/login?redirect=" + redirect : "/login"}><span className="text-warning"><u>Log In</u></span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp;
