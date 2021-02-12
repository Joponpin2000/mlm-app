import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'validator';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Layouts/Sidebar';
import TopNav from '../Layouts/TopNav';
import { useState } from 'react';
import { saveCategory } from '../../../redux/actions/categoryAction';

import { showErrorMsg, showSuccessMsg } from '../../../helpers/message';
import { showLoading } from '../../../helpers/loading';

const CategoriesCreate = () => {

    const [title, setTitle] = useState('');
    const categorySave = useSelector(state => state.categorySave);
    const { loading: catLoadingSave, success: catSuccessSave, error: catErrorSave } = categorySave;
    const [errorMsg, setErrorMsg] = useState(catErrorSave);
    const [successMsg, setSuccessMsg] = useState(catSuccessSave);
    const dispatch = useDispatch();

    const handleCategorySubmit = evt => {
        evt.preventDefault();

        if (isEmpty(title)) {
            setErrorMsg('Please enter a category');
        } else {
            setErrorMsg('');
            setSuccessMsg('');

            const data = { title };

            dispatch(saveCategory(data));
        }
    };

    return (
        <div>

            <TopNav />
            <Sidebar />

            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="text-dark">Add New Category</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active"><Link to="/admin/categories">Categories</Link></li>
                                    <li className="breadcrumb-item active">Create</li>                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="content">
                    {(errorMsg || catErrorSave) && showErrorMsg(errorMsg || catErrorSave)}
                    {(successMsg || catSuccessSave ) && showSuccessMsg("Successful")}
                    {(catLoadingSave) ? (
                        <div className="text-center">{showLoading()}</div>
                    ) : (

                            <div class="container-fluid m-3 p-3 bg-white">
                                <div className="row">
                                    <div className="col-md-6">
                                        <form onSubmit={handleCategorySubmit}>
                                            <div className="form-group">
                                                <label>Category:</label>
                                                <input onChange={(e) => {
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

export default CategoriesCreate;
