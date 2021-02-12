import React from 'react';
import '../adminlte.min.css';
import './style.css';
import TopNav from '../Layouts/TopNav';
import { Sidebar } from '../Layouts/Sidebar';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <TopNav />
            <Sidebar />

            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">Dashboard</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3 col-6">
                                <div class="small-box bg-info">
                                    <div class="inner">
                                        <h3>150</h3>

                                        <p>Categories</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-bag"></i>
                                    </div>
                                    <Link to="/admin/categories" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                            <div class="col-lg-3 col-6">
                                <div class="small-box bg-success">
                                    <div class="inner">
                                        <h3>53</h3>

                                        <p>All Products</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-stats-bars"></i>
                                    </div>
                                    <Link to="/admin/products" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                            <div class="col-lg-3 col-6">
                                <div class="small-box bg-warning">
                                    <div class="inner">
                                        <h3>44</h3>

                                        <p>Registered Users</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-person-add"></i>
                                    </div>
                                    <Link to="/admin/registered_users" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                            <div class="col-lg-3 col-6">
                                <div class="small-box bg-danger">
                                    <div class="inner">
                                        <h3>65</h3>

                                        <p>Unique Visitors</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-pie-graph"></i>
                                    </div>
                                    <Link to="/" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AdminDashboard;
