import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCategories, deleteCategory } from '../../../redux/actions/categoryAction';
import { Sidebar } from '../Layouts/Sidebar';
import TopNav from '../Layouts/TopNav';
import { showLoading } from '../../../helpers/loading';
import { showErrorMsg } from '../../../helpers/message';

const Categories = () => {

    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;
    const categoryDelete = useSelector(state => state.categoryDelete);
    const { loading: loadingDelete, error: errorDelete } = categoryDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories())
    }, [dispatch]);

    const deleteCategoryHandler = (category) => {
        dispatch(deleteCategory(category.id));
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
                                <h1 className="m-0 mb-2 text-dark">Categories</h1>
                                <Link to="/admin/categories/create">
                                    <button className="btn btn-sm btn-info float-left">Add New Category</button>
                                </Link>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Categories</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {loadingDelete ? (
                    <div className="text-center my-5 py-5">{showLoading()}</div>
                ) :
                    categories
                        ? (
                            <section className="content" >
                                <div className="container-fluid">
                                    <div className="card">
                                        <div className="card-header border-transparent">
                                            {(errorDelete) && showErrorMsg(errorDelete)}

                                            <h3 className="card-title">Categories</h3>
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
                                                            <th>Title</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {categories.map((cat, i) => (

                                                            <tr key={i}>
                                                                <td>{i}</td>
                                                                <td>{cat.title}</td>
                                                                <td>
                                                                    <Link to={"/admin/categories/edit/" + cat.id} className="btn btn-warning" role="button" >Edit
                                                                    </Link>
                                                                    {' '}
                                                                    <Button onClick={() => deleteCategoryHandler(cat)} variant="danger"  >Delete</Button>
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

export default Categories;