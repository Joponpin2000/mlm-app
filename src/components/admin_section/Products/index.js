import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showLoading } from '../../../helpers/loading';
import { showErrorMsg } from '../../../helpers/message';
import { deleteProduct, listProducts } from '../../../redux/actions/productActions';
import Pagination from '../../Pagination';
import { Sidebar } from '../Layouts/Sidebar';
import TopNav from '../Layouts/TopNav';

const Products = () => {

    const productList = useSelector(state => state.productList);
    const { products } = productList;
    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, error: errorDelete } = productDelete;

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const deleteProdHandler = (product) => {
        dispatch(deleteProduct(product.id));
    }

    // get current products
    const indexOfLastProduct = currentPage * postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div>
            <TopNav />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 mb-2 text-dark">Products</h1>
                                <Link to="/admin/products/create">
                                    <button className="btn btn-sm btn-info float-left">Add New Product</button>
                                </Link>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Products</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {loadingDelete ? (
                    <div className="text-center my-5 py-5">{showLoading()}</div>
                ) :
                    products
                        ? (
                            <section className="content" >
                                <div className="container-fluid">
                                    <div className="card">
                                        <div className="card-header border-transparent">
                                            {(errorDelete) && showErrorMsg(errorDelete)}
                                            <h3 className="card-title">Products</h3>
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
                                                            <th>Name</th>
                                                            <th>Category</th>
                                                            <th>Price</th>
                                                            <th>No. In Stock</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {currentProducts.map((product, i) => (

                                                            <tr key={i}>
                                                                <td>{product.productName}</td>
                                                                <td>{product.productCategory}</td>
                                                                <td>{product.productPrice}</td>
                                                                <td>{product.productQty}</td>
                                                                <td>
                                                                    <Link to={"/admin/products/edit/" + product.id} className="btn btn-warning" role="button" >Edit
                                                                    </Link>
                                                                    {' '}
                                                                    <Button onClick={() => deleteProdHandler(product)} variant="danger"  >Delete</Button>
                                                                </td>
                                                            </tr>

                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
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

export default Products;
