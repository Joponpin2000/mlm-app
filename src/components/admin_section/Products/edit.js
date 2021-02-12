import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'validator';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Layouts/Sidebar';
import TopNav from '../Layouts/TopNav';
import { useState } from 'react';
import { showErrorMsg, showSuccessMsg } from '../../../helpers/message';
import { showLoading } from '../../../helpers/loading';
import { editProduct } from '../../../redux/actions/productActions';

const ProductsEdit = (props) => {

    let productList = useSelector(state => state.productList);
    let { products } = productList;
    let product = '';
    if (products.length > 0) {
        product = products.find(x => x.id.toString() === props.match.params.id.toString());
    }

    const [productName, setProductName] = useState(product && product.productName);
    const [productImage, setProductImage] = useState(null);
    const [productDesc, setProductDesc] = useState(product && product.productDesc);
    const [productPrice, setProductPrice] = useState(product && product.productPrice);
    const [productQty, setProductQty] = useState(product && product.productQty);

    const productEdit = useSelector(state => state.productEdit);
    const { loading: prodLoadingEdit, success: prodSuccessEdit, error: prodErrorEdit } = productEdit;
    const [errorMsg, setErrorMsg] = useState(prodErrorEdit);
    const [successMsg, setSuccessMsg] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            setErrorMsg("");
            setSuccessMsg("");
        }
    }, []);
    
    const handleProductImage = (evt) => {
        setProductImage(evt.target.files[0]);
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleProductSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(productName) || isEmpty(productDesc) || isEmpty(productPrice.toString())) {
            setErrorMsg('All fields are required');
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
            formData.append("productQty", productQty.toString());
            dispatch(editProduct(formData, props.match.params.id.toString()))
        }
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
                                <h1 className="text-dark">Edit Product</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link to="/admin/products">Products</Link></li>
                                    <li className="breadcrumb-item active">Edit</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    {(errorMsg || prodErrorEdit) && showErrorMsg(errorMsg || prodErrorEdit)}
                    {(successMsg || prodSuccessEdit) && showSuccessMsg("Successful")}
                    {(prodLoadingEdit) ? (
                        <div className="text-center">{showLoading()}</div>
                    ) : (

                            <div className="container-fluid m-3 p-3 bg-white">
                                <form onSubmit={handleProductSubmit}>
                                    <div className="row">
                                        <div className="form-group custom-file col-md-6">
                                            <label className="custom-file-label">Change Image</label>
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
                                        <div className="form-group col-md-3">
                                            <label className="text-secondary">Price</label>
                                            <input type="text" name="productPrice" value={productPrice} onChange={(e) => {
                                                setProductPrice(e.target.value);
                                                setErrorMsg('');
                                                setSuccessMsg('');
                                            }} className="form-control" />
                                        </div>
                                        <div className="form-group col-md-3">
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

export default ProductsEdit;
