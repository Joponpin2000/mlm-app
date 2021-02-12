import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'validator';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Layouts/Sidebar';
import TopNav from '../Layouts/TopNav';
import { useState } from 'react';

import { showErrorMsg, showSuccessMsg } from '../../../helpers/message';
import { showLoading } from '../../../helpers/loading';
import { saveProduct } from '../../../redux/actions/productActions';
import { useEffect } from 'react';
import { loadCategories } from '../../../redux/actions/categoryAction';

const ProductsCreate = () => {
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [productDesc, setProductDesc] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productQty, setProductQty] = useState('');

    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;
    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    
    const [errorMsg, setErrorMsg] = useState(errorSave || "");
    const [successMsg, setSuccessMsg] = useState(successSave || "");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories())
    }, [dispatch]);

    const handleProductImage = (evt) => {
        setProductImage(evt.target.files[0]);
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleProductSubmit = (evt) => {
        evt.preventDefault();

        if (productImage === null) {
            setErrorMsg('Please select an image');
        }
        else if (isEmpty(productName) || isEmpty(productDesc) || isEmpty(productPrice.toString())) {
            setErrorMsg('All fields are required');
        }
        else if (isEmpty(productCategory)) {
            setErrorMsg('Please select a category');
        }
        else if (isEmpty(productQty.toString())) {
            setErrorMsg('Please select a quantity');
        }
        else {
            let formData = new FormData();
            formData.append("productImage", productImage);
            formData.append("productName", productName);
            formData.append("productDesc", productDesc);
            formData.append("productPrice", productPrice.toString());
            formData.append("productCategory", productCategory);
            formData.append("productQty", productQty.toString());
            dispatch(saveProduct(formData))
        }
    }
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
                                    <li className="breadcrumb-item active"><Link to="/admin/products">Products</Link></li>
                                    <li className="breadcrumb-item active">Create</li>                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="content">
                    {(errorMsg || errorSave) && showErrorMsg(errorMsg || errorSave)}
                    {(successMsg || successSave) && showSuccessMsg("Successful")}
                    {(loadingSave) ? (
                        <div className="text-center">{showLoading()}</div>
                    ) : (
                            <div class="container-fluid m-3 p-3 bg-white">
                                <form onSubmit={handleProductSubmit}>
                                    <div className="row">

                                        <div className="form-group custom-file col-md-6">
                                            <label className="custom-file-label">Choose File</label>
                                            <input type="file" name="productImage" className="custom-file-input" onChange={handleProductImage} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className="text-secondary">Name</label>
                                            <input type="text" name="productName" value={productName} onChange={(e) => {
                                                setProductName(e.target.value);
                                                setErrorMsg('');
                                                setSuccessMsg('');
                                            }} className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-secondary">Category</label>
                                            <select className="custom-select mr-sm-2" name="productCategory" value={productCategory} onChange={(e) => {
                                                setProductCategory(e.target.value);
                                                setErrorMsg('');
                                                setSuccessMsg('');
                                            }} >
                                                <option value="">Choose one...</option>
                                                {categories && categories.map(c => (
                                                    <option key={c.id} value={c.id}>{c.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className="text-secondary">Price</label>
                                            <input type="text" name="productPrice" value={productPrice} onChange={(e) => {
                                                setProductPrice(e.target.value);
                                                setErrorMsg('');
                                                setSuccessMsg('');
                                            }} className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-secondary">Quantitty</label>
                                            <input type="number" name="productQty" value={productQty} onChange={(e) => {
                                                setProductQty(e.target.value);
                                                setErrorMsg('');
                                                setSuccessMsg('');
                                            }} className="form-control" min="0" max="1000" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-secondary">Description</label>
                                        <textarea rows="3" name="productDesc" value={productDesc} onChange={(e) => {
                                            setProductDesc(e.target.value);
                                            setErrorMsg('');
                                            setSuccessMsg('');
                                        }} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">

                                        <Button type="submit">Submit</Button>
                                    </div>
                                </form>
                            </div>
                        )}
                </section>
            </div>


        </div>
    )
}

export default ProductsCreate;
