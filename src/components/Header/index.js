import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../images/logo.png';
import Flag from '../images/flag.png';
import HelpIcon from '../images/help-icon.png';
import '../css/bootstrap.min.css';
import FlagUp1 from '../images/flag-up-1.png';
import FlagUp2 from '../images/flag-up-2.png';

import { useSelector } from 'react-redux';
import { isAuthenticated, logout } from '../../helpers/auth';

const Header = (props) => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const handleLogout = () => {
        logout(() => {
            props.history.push('/');
        });
    }

    return (
        <Fragment>
            <header id="header" className="top-head">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 left-rs">
                                <div className="navbar-header col-md-4">
                                    <button type="button" id="top-menu" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Link to="/" className="navbar-brand"><img src={Logo} alt="" /></Link>
                                </div>
                                <form className="navbar-form navbar-left web-sh col-md-8">
                                    <div className="form">
                                        <input type="text" className="form-control" placeholder="Search for products" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <div className="right-nav">
                                    <div className="login-sr">
                                        <div className="login-signup">
                                            <ul>
                                                {!isAuthenticated() && (
                                                    <Fragment>
                                                        <li><Link to="/login">Login</Link></li>
                                                        <li><Link to="/signup">Sign up</Link></li>
                                                        <li><Link to="/cart" className="custom-b">Cart <sup><small>{cartItems.length > 0 && cartItems.length}</small></sup></Link></li>
                                                    </Fragment>
                                                )}
                                                {isAuthenticated() && isAuthenticated().role === 0 && (
                                                    <Fragment>
                                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                                        <li><Link to="/cart">Cart</Link></li>
                                                    </Fragment>
                                                )}
                                                {isAuthenticated() && isAuthenticated().role === 1 && (
                                                    <Fragment>
                                                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                                                    </Fragment>
                                                )}
                                                {userInfo && isAuthenticated() && (
                                                    <Fragment>
                                                        <li><Link onClick={handleLogout} className="custom-b">Logout</Link></li>
                                                    </Fragment>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="help-r hidden-xs">
                                        <div className="help-box">
                                            <ul>
                                                <li> <Link data-toggle="modal" data-target="#myModal" to="/"> <span>Change</span> <img src={Flag} alt="" /> </Link> </li>
                                                <li> <Link to="/"><img className="h-i" src={HelpIcon} alt="" /> Help </Link> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nav-b hidden-xs">
                                        <div className="nav-box">
                                            <ul>
                                                <li><a href="howitworks.html">How it works</a></li>
                                                <li><a href="about-us.html">Chamb for Business</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="modal fade lug" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Change</h4>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li><Link to="/"><img src={FlagUp1} alt="" /> United States</Link></li>
                                <li><Link to="/"><img src={FlagUp2} alt="" /> France </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sidebar" className="top-nav">
                <ul id="sidebar-nav" className="sidebar-nav">
                    <li><Link to="/">Help</Link></li>
                    <li><a href="howitworks.html">How it works</a></li>
                    <li><Link to="/">chamb for Business</Link></li>
                </ul>
            </div>

        </Fragment>
    )
}

export default withRouter(Header);
