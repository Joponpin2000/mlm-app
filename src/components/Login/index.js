import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { signin } from '../../redux/actions/userActions';
import { showErrorMsg } from '../../helpers/message';
import { isAuthenticated } from '../../helpers/auth';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const [errormsg, setErrormsg] = useState(false);
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : null;

    useEffect(() => {
        if (userInfo && isAuthenticated() && isAuthenticated().role === 1) {
            props.history.push(redirect || '/admin/dashboard')
        } else if (userInfo && isAuthenticated() && isAuthenticated().role === 0) {
            props.history.push(redirect || '/user/dashboard');
        }
    }, [props, userInfo, redirect]);


    const handleSubmit = e => {
        e.preventDefault();

        if (isEmpty(email) || isEmpty(password)) {
            setErrormsg('All fields are required');
        }
        else if (!isEmail(email)) {
            setErrormsg('Invalid Email');
        }
        else {
            setErrormsg('');

            const formData = ({
                email,
                password
            })
            dispatch(signin(formData));
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
                                    <h1 className="mt-2 mb-4 increased-size">Login</h1>

                                    {(errormsg || error) && showErrorMsg(errormsg || error)}

                                    <form className="my-form" onSubmit={handleSubmit} noValidate>
                                        <input name="email" onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrormsg('');
                                        }} className="form-control" placeholder="Enter your Email" type="email" />
                                        <input name="password" onChange={(e) => {
                                            setPassword(e.target.value);
                                            setErrormsg('');
                                        }} className="form-control" placeholder="Password" type="password" />
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
                                    <div className="blue-form_question mb-5"><strong>Don't have an account?</strong> <Link to={redirect ? "/signup?redirect=" + redirect : "/signup"} ><span className="text-warning">Register here</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
