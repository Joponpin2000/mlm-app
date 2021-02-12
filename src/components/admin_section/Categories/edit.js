import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'validator';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Layouts/Sidebar';
import TopNav from '../Layouts/TopNav';
import { useState } from 'react';
import { editCategory, loadCategories } from '../../../redux/actions/categoryAction';

import { showErrorMsg, showSuccessMsg } from '../../../helpers/message';
import { showLoading } from '../../../helpers/loading';

const CategoriesEdit = (props) => {

    let categoryList = useSelector(state => state.categoryList);
    let { categories } = categoryList;
    let category = '';
    if (categories.length > 0) {
        category = categories.find(x => x.id.toString() === props.match.params.id.toString());
    }
    const [title, setTitle] = useState(category && category.title);
    const categoryEdit = useSelector(state => state.categoryEdit);
    const { loading: catLoadingEdit, success: catSuccessEdit, error: catErrorEdit } = categoryEdit;
    const [errorMsg, setErrorMsg] = useState(catErrorEdit);
    const [successMsg, setSuccessMsg] = useState(catSuccessEdit);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories())
        loadCategories();
    }, [dispatch]);

    const handleCategorySubmit = evt => {
        evt.preventDefault();

        if (isEmpty(title)) {
            setErrorMsg('Please enter a category');
        } else {
            setErrorMsg('');
            setSuccessMsg('');

            const data = {
                id: props.match.params.id.toString(),
                title
            };
            dispatch(editCategory(data));
        }
    };

    return (
        <div>

            <TopNav />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="text-dark">Add New Category</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link to="/admin/categories">Categories</Link></li>
                                    <li className="breadcrumb-item active">Edit</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    {(errorMsg || catErrorEdit) && showErrorMsg(errorMsg || catErrorEdit)}
                    {(successMsg || catSuccessEdit) && showSuccessMsg("Successful")}
                    {(catLoadingEdit) ? (
                        <div className="text-center">{showLoading()}</div>
                    ) : (

                            <div className="container-fluid m-3 p-3 bg-white">
                                <div className="row">
                                    <div className="col-md-6">
                                        <form onSubmit={handleCategorySubmit}>
                                            <div className="form-group">
                                                <label>Category:</label>
                                                <input value={title} onChange={(e) => {
                                                    setTitle(e.target.value);
                                                    setErrorMsg('');
                                                    setSuccessMsg('');
                                                }} type="text" name="category" className="form-control" />
                                            </div>
                                            <Button type="submit">Submit</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                </section>
            </div>


        </div>
    )
}

export default CategoriesEdit;
