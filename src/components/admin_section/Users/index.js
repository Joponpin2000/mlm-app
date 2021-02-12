import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showLoading } from '../../../helpers/loading';
import { showErrorMsg } from '../../../helpers/message';
import { listUsers,deleteUser } from '../../../redux/actions/userActions';
import { Sidebar } from '../Layouts/Sidebar';
import TopNav from '../Layouts/TopNav';

const UsersIndex = () => {

    const usersList = useSelector(state => state.usersList);
    const { users } = usersList;
    const userDelete = useSelector(state => state.userDelete);
    const { loading: loadingDelete, error: errorDelete } = userDelete;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch]);

    const deleteUserHandler = (user) => {
        dispatch(deleteUser(user.id));
    }

    return (
        <div>
            <TopNav />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 mb-2 text-dark">Registered Users</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Registered Users</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {loadingDelete ? (
                    <div className="text-center my-5 py-5">{showLoading()}</div>
                ) :
                    users
                        ? (
                            <section className="content" >
                                <div className="container-fluid">
                                    <div className="card">
                                        <div className="card-header border-transparent">
                                            {(errorDelete) && showErrorMsg(errorDelete)}
                                            <h3 className="card-title">Users</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table m-0 table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Role</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {users.map((user, i) => (

                                                            <tr key={i}>
                                                                <td>{i}</td>
                                                                <td>{user.name}</td>
                                                                <td>{user.email}</td>
                                                                <td>{user.role === 1 ? "Admin" : "User"}</td>
                                                                <td>
                                                                    <Button onClick={() => deleteUserHandler(user)} variant="danger"  >Delete</Button>
                                                                </td>
                                                            </tr>

                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        )
                        :
                        <div className="text-center mx-5 my-5 py-5" > {showLoading()}</div>

                }

            </div>
        </div>
    )
}

export default UsersIndex;
