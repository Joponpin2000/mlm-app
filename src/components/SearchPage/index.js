import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showLoading } from '../../helpers/loading';
import { listProducts } from '../../redux/actions/productActions';
import Footer from '../Footer';
import Header from '../Header';

const SearchPage = (props) => {
    let query = props.match.params.query;

    const productList = useSelector(state => state.productList);
    const { products, loading } = productList;

    const [currentPage] = useState(1);
    const [postsPerPage] = useState(8);
    
    // get current products
    let indexOfLastProduct = currentPage * postsPerPage;
    let indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    const filteredProducts = products.filter(
        item => item.productName.toLocaleLowerCase().includes(query) || item.productCategory.toLocaleLowerCase().includes(query)
    ).slice(indexOfFirstProduct, indexOfLastProduct);


    const dispatch = useDispatch();
    useEffect(() => {

        if (!query) {
            props.history.push('/')
        }

        dispatch(listProducts())

    }, [dispatch,query, props.history]);

    return (
        <div>
            <Header />
            {loading ? (
                <div className="text-center my-5 py-5">{showLoading()}</div>
            ) :
                filteredProducts.length > 0
                    ?
                    <Fragment>

                        <div className="page-content-product">
                            <div className="main-product">
                                <div className="container">
                                    <div className="row clearfix mt-2"></div>
                                    {filteredProducts.map((prod, i) => (
                                        <div className="col-md-4 mb-4" key={prod.productId}>
                                            <div className="small-box-c">
                                                <Link to={"/product/" + prod.id}>
                                                    <div className="small-img-b box-img">
                                                        <img className="img-responsive" src={"/" + prod.productImage} alt={prod.productName} />
                                                    </div>
                                                </Link>
                                                <div className="dit-t clearfix">
                                                    <div className="left-ti">
                                                        <h4>{prod.productName}</h4>
                                                    </div>
                                                    <Link tabindex="0">#{prod.productPrice}</Link>
                                                </div>
                                                <div className="prod-btn">
                                                    <Link to="/"><i className="fa fa-star" aria-hidden="true"></i> Save to wishlist</Link>
                                                    <Link to="/"><i className="fa fa-thumbs-up" aria-hidden="true"></i> Like this</Link>
                                                    <p>23 likes</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Fragment>

                    :
                    <div className="text-center mx-5 my-5 py-5" > There are no items to display. Adjust your filter criteria</div> 

            }

            <Footer />

        </div>
    )
}

export default SearchPage;