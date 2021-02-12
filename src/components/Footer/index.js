import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import RightFlag from "../images/flag.png";
import Logo from '../images/logo.png';

const Footer = () => {
    return (
        <div>
            <Fragment>
                <footer>
                    <div className="main-footerr">
                        <div className="container">
                            <div className="row">
                                <div className="footer-top clearfix col-md-12">
                                    <div className="col-md-2 col-sm-6">
                                        <h2>Start a free
                                        account today
                                        </h2>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-box">
                                            <input type="text" placeholder="Enter your e-mail" />
                                            <button>Continue</button>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="help-box-f">
                                            <h4>Question? Call us on 12 34 56 78 for help</h4>
                                            <p>Easy setup - no payment fees - up to 100 products for free</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-link-box clearfix col-md-12">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="left-f-box">
                                            <div className="col-sm-4">
                                                <h2>SELL ON chamb</h2>
                                                <ul>
                                                    <li><Link to="/">Create account</Link></li>
                                                    <li><a href="howitworks.html">How it works suppliers</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><Link to="/">FAQ for Suppliers</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-4">
                                                <h2>BUY ON chamb</h2>
                                                <ul>
                                                    <li><Link to="/">Create account</Link></li>
                                                    <li><Link to="/">How it works buyers</Link></li>
                                                    <li><Link to="/">Categories</Link></li>
                                                    <li><Link to="/">FAQ for buyers</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-4">
                                                <h2>COMPANY</h2>
                                                <ul>
                                                    <li><a href="about-us.html">About chamb</a></li>
                                                    <li><Link to="/">Contact us</Link></li>
                                                    <li><Link to="/">Press</Link></li>
                                                    <li><Link to="/">Careers</Link></li>
                                                    <li><Link to="/">Terms of use</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="right-f-box">
                                            <h2>INDUSTRIES</h2>
                                            <ul className="col-sm-4">
                                                <li><Link to="/">Textiles</Link></li>
                                                <li><Link to="/">Furniture</Link></li>
                                                <li><Link to="/">Leather</Link></li>
                                                <li><Link to="/">Agriculture</Link></li>
                                                <li><Link to="/">Food & drinks</Link></li>
                                            </ul>
                                            <ul className="col-sm-4">
                                                <li><Link to="/">Office</Link></li>
                                                <li><Link to="/">Decoratives</Link></li>
                                                <li><Link to="/">Electronics</Link></li>
                                                <li><Link to="/">Machines</Link></li>
                                                <li><Link to="/">Building</Link></li>
                                            </ul>
                                            <ul className="col-sm-4">
                                                <li><Link to="/">Cosmetics</Link></li>
                                                <li><Link to="/">Health</Link></li>
                                                <li><Link to="/">Jewelry</Link></li>
                                                <li><Link to="/">See all here</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <p><img width="90" src={Logo} alt="#" style={{ "marginTop": "-5px" }} /> All Rights Reserved. Company Name © 2018</p>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-inline socials">
                                        <li>
                                            <Link to="/">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="right-flag">
                                        <li><Link to="/"><img src={RightFlag} alt="" /> <span>Change</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        </div>
    )
}

export default Footer;