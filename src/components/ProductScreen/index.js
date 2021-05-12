import React, { useEffect, Fragment, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import placeHolder from '../images/150x150.png';
import imageHolder from '../images/list-img-02.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading } from '../../helpers/loading';
import { detailsProduct } from '../../redux/actions/productActions';
import { Button } from 'react-bootstrap';

const ProductScreen = (props) => {
    const [qty, setQty] = useState(1);

    const productDetails = useSelector(state => state.productDetails);
    const { product, products, loading, error } = productDetails;

    let similarProducts = products && products.filter(p => p.productCategory === product[0].productCategory).slice(0, 4);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        console.log(props.match.params.id)

    }, [dispatch, props.match.params.id]);

    const handleQtyChange = (evt) => {
        setQty(evt.target.value)
    };

    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + "?qty=" + qty)
    }
    return (
        <div>
            {
                loading ? (
                    <div className="text-center py-5" > { showLoading()}</div>)
                    :
                    error ? (<div>{error}</div>) : (
                        (product[0] && product[0].productImage !== undefined) && (
                            <Fragment>
                                <Header />
                                <div class="terms-conditions product-page">
                                    <div class="terms-title">
                                        <div class="container">
                                            <div class="row">
                                                <ol class="breadcrumb">
                                                    <li><Link to="/">Homepage </Link></li>
                                                    <li class="active"><Link to={"/categories/" + product[0].productCategory} >{product[0].productCategory}</Link></li>
                                                    <li class="active">{product[0].productName}</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-page-main">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="prod-page-title">
                                                    <h2>{product[0].productName}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 col-sm-4">
                                                <div class="left-profile-box-m prod-page">
                                                    <div class="pro-img">
                                                        <img src={placeHolder} alt="#" />
                                                    </div>
                                                    <div class="pof-text">
                                                        <h3>Morgan Mobilya</h3>
                                                        <div class="check-box"></div>
                                                    </div>
                                                    <Link to="/">Visit store</Link>
                                                </div>
                                            </div>
                                            <div class="col-md-7 col-sm-8">
                                                <div class="md-prod-page">
                                                    <div class="md-prod-page-in">
                                                        <div class="page-preview">
                                                            <div class="preview">
                                                                <div class="preview-pic tab-content">
                                                                    <div class="tab-pane active" id="pic-1"><img src={"/" + product[0].productImage} alt="#" /></div>
                                                                    <div class="tab-pane" id="pic-2"><img src={"/" + product[0].productImage} alt="#" /></div>
                                                                    <div class="tab-pane" id="pic-3"><img src={"/" + product[0].productImage} alt="#" /></div>
                                                                    <div class="tab-pane" id="pic-4"><img src={"/" + product[0].productImage} alt="#" /></div>
                                                                </div>
                                                                <ul class="preview-thumbnail nav nav-tabs">
                                                                    {/* <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={"/" + product[0].productImage} alt="#" /></a></li>
                                                                    <li><a data-target="#pic-2" data-toggle="tab"><img src={"/" + product[0].productImage} alt="#" /></a></li>
                                                                    <li><a data-target="#pic-3" data-toggle="tab"><img src={"/" + product[0].productImage} alt="#" /></a></li>
                                                                    <li><a data-target="#pic-4" data-toggle="tab"><img src={"/" + product[0].productImage} alt="#" /></a></li> */}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="btn-dit-list clearfix">
                                                            <div class="left-dit-p">
                                                                <div class="prod-btn">
                                                                    <Link to="/"><i class="fa fa-star" aria-hidden="true"></i> Save to wishlist</Link>
                                                                    <Link to="/"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like this</Link>
                                                                    <p>23 likes</p>
                                                                </div>
                                                            </div>
                                                            <div class="right-dit-p">
                                                                <div class="like-list">
                                                                    <ul>
                                                                        <li>
                                                                            <div class="im-b"><img class="" src={imageHolder} alt="" /></div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="im-b"><img src={imageHolder} alt="" /></div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="im-b"><img src={imageHolder} alt="" /></div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="im-b"><img src={imageHolder} alt="" /></div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="im-b"><img src={imageHolder} alt="" /></div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="im-b"><img src={imageHolder} alt="" /></div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="im-b"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="description-box">
                                                        <div class="dex-a">
                                                            <h4>Description</h4>
                                                            <p>{product[0].productDesc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {similarProducts && (
                                                    <div class="similar-box">
                                                        <h2>Similiar products</h2>
                                                        <div class="row cat-pd">
                                                            {similarProducts.map(prod => (
                                                                <div class="col-md-6 mb-2" key={prod.productId}>
                                                                    <div class="small-box-c">
                                                                        <div class="small-img-b">
                                                                            <img class="img-responsive" src={"/" + prod.productImage} alt={prod.productName} />
                                                                        </div>
                                                                        <div class="dit-t clearfix">
                                                                            <div class="left-ti">
                                                                                <h4>{prod.productName}</h4>
                                                                                <p><span>{prod.productCategory}</span></p>
                                                                            </div>
                                                                            <Link to="/" tabindex="0">#{prod.productPrice}</Link>
                                                                        </div>
                                                                        <div class="prod-btn">
                                                                            <Link to="/"><i class="fa fa-star" aria-hidden="true"></i> Save to wishlist</Link>
                                                                            <Link to="/"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like this</Link>
                                                                            <p>23 likes</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div class="col-md-3 col-sm-12">
                                                <div class="price-box-right">
                                                    <p>Price: ${product[0].productPrice}</p>

                                                    <p>Status: {product[0].productQty > 0 ? "In Stock" : "Unavailable"}</p>
                                                    <p>Qty:<select className="custom-select mr-sm-2" name="qty" value={qty} onChange={handleQtyChange} >
                                                        {[...Array(product[0].productQty).keys()].map(x =>
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        )}
                                                    </select>
                                                    </p>
                                                    {
                                                        (product[0].productQty > 0)
                                                        &&
                                                        <Button onClick={handleAddToCart} className="btn btn-success btn-block" >Add to cart</Button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Footer />
                            </Fragment>
                        )
                    )
            }
        </div>
    )
}

export default ProductScreen;
