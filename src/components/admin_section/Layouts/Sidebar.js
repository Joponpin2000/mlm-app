import React from 'react';
import Logo from "../images/img/AdminLTELogo.png";
import { Link } from 'react-router-dom';
import UserImage from "../images/img/user2-160x160.jpg";

export const Sidebar = () => {
    return (
        <div>

            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={UserImage} className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <Link to="/" className="d-block">Alexander Pierce</Link>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <Link to="/admin/dashboard" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-header">HOTSPOTS</li>
                            <li className="nav-item">
                                <Link to="/admin/categories" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt"></i>
                                    <p>
                                        Categories
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/products" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt"></i>
                                    <p>
                                        Products
                                        <span className="badge badge-info right">46</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/registered_users" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt"></i>
                                    <p>
                                        Users
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}
