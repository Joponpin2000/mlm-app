import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import Xpann from '../images/xpann-icon.jpg';
import CreateIcon from '../images/create-icon.jpg';
import GetIcon from '../images/get-icon.jpg';
import { listProducts } from '../../redux/actions/productActions';
import { showLoading } from '../../helpers/loading';
import Header from '../Header';
import Footer from '../Footer';
import { Col, Container, Row } from 'react-bootstrap';
const Home = () => {

    const productList = useSelector(state => state.productList);
    const { products, loading } = productList;
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [query, setQuery] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch]);

    // get current products
    let indexOfLastProduct = currentPage * postsPerPage;
    let indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // let buttons = [
    //     { name: "All", value: "All" },
    //     { name: "Shirts", value: "Shirts" },
    //     { name: "Bags", value: "Bags" },
    //     { name: "Shoes", value: "Shoes" },
    //     { name: "Watches", value: "Watches" },
    // ];

    // let handleFilterButtonClick = (name) => {
    //     // if (name === "All") {
    //     //     setFilterProducts(products.slice(indexOfFirstProduct, indexOfLastProduct));
    //     // }
    //     // else {
    //     //     setFilterProducts(products.filter(product => product.productCategory === name).slice(indexOfFirstProduct, indexOfLastProduct));
    //     // }
    // };
    const allProducts = () => (
        <Container>
            <h2>Catalogues</h2>
            <Row>
                {currentProducts.map((product, i) => (

                    <Col md="4" key={i} >
                        <div className="small-box-c">
                            <div className="small-img-b">
                                <img className="img-responsive" src={"/" + product.productImage} alt="#" />
                            </div>
                            <div className="dit-t clearfix">
                                <div className="left-ti">
                                    <h4>{product.productName}</h4>
                                    <p> <span>{product.productCategory}</span></p>
                                </div>
                                <Link to="" tabIndex="0">$1220</Link>
                            </div>
                            <div className="prod-btn">
                                <Link to="" ><i className="fa fa-star" aria-hidden="true"></i> Save to wishlist</Link>
                                <Link to="" ><i className="fa fa-thumbs-up" aria-hidden="true"></i> Like this</Link>
                                <p>23 likes</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );

    return (
        <div>
            {loading ? (
                <div className="text-center my-5 py-5">{showLoading()}</div>
            ) :
                products
                    ? (
                        <div>
                            <Header />
                            <div className="page-content-product">
                                <div className="main-product">
                                    <div className="container">
                                        <div className="row clearfix">
                                            <div className="find-box">
                                                <h1>Find your next product or<br />business partner here.</h1>
                                                <h4>It has never been easier.</h4>
                                                <div className="product-sh">
                                                    <div className="col-sm-6">
                                                        <div className="form-sh">
                                                            <input type="text" placeholder="Search something you love" name="query" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-sh">
                                                            <select className="selectpicker">
                                                                <option>Textiles</option>
                                                                <option>Furniture</option>
                                                                <option>Leather</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-sh"> <Link className="btn" to={"/search/" + query}>Search</Link> </div>
                                                    </div>
                                                    <p>Or simply<Link to="/"> click here </Link> and get inspired!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            {currentProducts.map((product, i) => (

                                                <div className="col-lg-3 col-sm-6 col-md-3" key={i}>
                                                    <Link to={"/product/" + product.id}>
                                                        <div className="box-img ">
                                                            <h4>{product.productName}</h4>
                                                            <Link to={"/product/" + product.id}><img src={"/" + product.productImage} alt="" className="" /></Link>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                            <div className="categories_link">
                                                <Link to="/">Browse all categories here</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cat-main-box">
                                <div className="container">
                                    <div className="row panel-row">
                                        <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.0s">
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <img src={Xpann} className="icon-small" alt="" />
                                                    <h4>“Chamb” Your Business</h4>
                                                    <p>Grow easily with chamb. Create free account.
                                                    We help expanding your business easily.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <img src={CreateIcon} className="icon-small" alt="" />
                                                    <h4>Create and add</h4>
                                                    <p>Grow easily with chamb. Create free account.
                                                    We help expanding your business easily.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 wow fadeIn hidden-sm" data-wow-delay="0.4s">
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <img src={GetIcon} className="icon-small" alt="" />
                                                    <h4>Get inspired</h4>
                                                    <p>Grow easily with chamb. Create free account.
                                                    We help expanding your business easily.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {buttons.map(({ name, value }) => (
                                <Button key={name} value={value} onClick={() => handleFilterButtonClick(name)} variant="success" className="mx-5" >{name}</Button>
                            ))} */}
                            {allProducts()}
                            <Footer />
                        </div>
                    )
                    :
                    <div className="text-center mx-5 my-5 py-5" > {showLoading()}</div>

            }
        </div>
    )
}

export default Home;