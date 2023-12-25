// import image from 'assets/theme/images//img/cat-1.jpg'

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const DashBoard = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch('https://api.pujakaitem.com/api/products');
        // const response = await fetch ('http://103.186.184.179:3015/api/product/list/');
        // const data = await response.json();
        // const item = data.items;
        // console.log(data)
        // console.log(data.items[0].admin.address)
        setProducts(await response.json());
        // setProducts(item)
    }

    useEffect(() => {
        getProducts();
    }, []);

    // useEffect(() => {
    //     var username = sessionStorage.getItem('username');
    // },[]);

    const usenavigate = useNavigate();

    const handlelogout=(e)=>{
        e.preventDefault();
        sessionStorage.clear();
        usenavigate('/');
        toast.success('Logout successful!');
      }

    var username = sessionStorage.getItem('username');

    const rent=(productid, productname, productcompany, productprice, productcolors, productimage, productcategory, productfeatured)=>{
        // localStorage.setItem(productid, productname, productcompany, productprice, productcolors, productimage, productcategory, productfeatured);
         localStorage.setItem("productid",productid)
         localStorage.setItem("productname",productname)
         localStorage.setItem("productcompany",productcompany)
         localStorage.setItem("productprice",productprice)
         localStorage.setItem("productcolors",productcolors)
         localStorage.setItem("productimage",productimage)
         localStorage.setItem("productcategory",productcategory)
         localStorage.setItem("productfeatured",productfeatured)
        //  localStorage.setItem(productname)
        //  localStorage.setItem(productcompany)
        //  localStorage.setItem(productprice)

        // var proid = productid;
        // var proname = productname;
        // var procompany = productcompany;


        // const proid = localStorage.getItem(productid);

        // console.log(proid);

        usenavigate('/user/cart');

        // console.log(productid + productname + productcompany + productprice + productcolors + productimage + productcategory + productfeatured);
        // alert("hello");
    }


    return (
        <>
            <div className="container-fluid">
                {/* <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark" href="">
                                FAQs
                            </a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="">
                                Help
                            </a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="">
                                Support
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="text-dark pl-2" href="">
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                </div> */}
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a href="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold">
                                <span className="text-primary font-weight-bold border ">
                                    R
                                </span>
                                entBuddy
                            </h1>
                        </a>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for products"
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search" />
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        {/* <a href="" className="btn border">
                            <i className="fas fa-heart text-primary" />
                            <span className="badge">0</span>
                        </a> */}
                        {/* <a href="/user/cart" className="btn border">
                            <i className="fas fa-shopping-cart text-primary" />
                            <span className="badge">0</span>
                        </a> */}
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a
                            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                            data-toggle="collapse"
                            href="#navbar-vertical"
                            style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
                        >
                            <h6 className="m-0">Categories</h6>
                            <i className="fa fa-angle-down text-dark" />
                        </a>
                        <nav
                            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                            id="navbar-vertical"
                        >
                            <div
                                className="navbar-nav w-100 overflow-hidden"
                                style={{ height: 410 }}
                            >
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-toggle="dropdown">
                                        Dresses <i className="fa fa-angle-down float-right mt-1" />
                                    </a>
                                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <a href="" className="dropdown-item">
                                            Men's Dresses
                                        </a>
                                        <a href="" className="dropdown-item">
                                            Women's Dresses
                                        </a>
                                        <a href="" className="dropdown-item">
                                            Baby's Dresses
                                        </a>
                                    </div>
                                </div>
                                <a href="" className="nav-item nav-link">
                                    Shirts
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Jeans
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Swimwear
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Sleepwear
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Sportswear
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Jumpsuits
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Blazers
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Jackets
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Shoes
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold">
                                    <span className="text-primary font-weight-bold border">
                                        r
                                    </span>
                                    entBuddy
                                </h1>
                            </a>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="index.html" className="nav-item nav-link active">
                                        Home
                                    </a>
                                   
                                    <a href="/user/allproduct" className="nav-item nav-link">
                                        Products
                                    </a>
                                    {/* <div className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Pages
                                        </a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="/user/cart" className="dropdown-item">
                                                Shopping Cart
                                            </a>
                                            <a href="/user/checkout" className="dropdown-item">
                                                Checkout
                                            </a>
                                        </div>
                                    </div> */}
                                    {/* <a href="contact.html" className="nav-item nav-link">
                                        Contact
                                    </a> */}
                                </div>
                                <div className="navbar-nav ml-auto py-0">
                                    {(() => {
                                        if (username===''|| username===null) {
                                        return (
                                            <>
                                                <a href="/authentication/sign-in" className="nav-item nav-link">
                                                    Login
                                                </a>
                                                <a href="/authentication/sign-up" className="nav-item nav-link">
                                                    Register
                                                </a>
                                            </>
                                        )
                                        } else {
                                        return (
                                            <>
                                            <a href="" className="nav-item nav-link">
                                                    {username}
                                                </a>
                                            <a href="/" className="nav-item nav-link" onClick={handlelogout}>
                                                Logout
                                            </a>
                                            </>
                                        )
                                        }
                                    })()}

                                        {/* <a href="/authentication/sign-in" className="nav-item nav-link">
                                            Login
                                        </a>
                                    <a href="/authentication/sign-up" className="nav-item nav-link">
                                        Register
                                    </a> */}
                                </div>
                            </div>
                        </nav>
                        <div
                            id="header-carousel"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active" style={{ height: 410 }}>
                                    <img className="img-fluid" src="/img/carousel-1.jpg" alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: 700 }}>
                                            <h4 className="text-light text-uppercase font-weight-medium mb-3">
                                                10% Off Your First Order
                                            </h4>
                                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                                Fashionable Dress
                                            </h3>
                                            <a href="" className="btn btn-light py-2 px-3">
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" style={{ height: 410 }}>
                                    <img className="img-fluid" src="/img/carousel-2.jpg" alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: 700 }}>
                                            <h4 className="text-light text-uppercase font-weight-medium mb-3">
                                                10% Off Your First Order
                                            </h4>
                                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                                Reasonable Price
                                            </h3>
                                            <a href="" className="btn btn-light py-2 px-3">
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#header-carousel"
                                data-slide="prev"
                            >
                                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                    <span className="carousel-control-prev-icon mb-n2" />
                                </div>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#header-carousel"
                                data-slide="next"
                            >
                                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                    <span className="carousel-control-next-icon mb-n2" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-check text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            <p className="text-right">15 Products</p>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/img/cat-1.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            <p className="text-right">15 Products</p>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/img/cat-2.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            <p className="text-right">15 Products</p>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/img/cat-3.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            <p className="text-right">15 Products</p>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/img/cat-4.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            <p className="text-right">15 Products</p>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/img/cat-5.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Bags</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            <p className="text-right">15 Products</p>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/img/cat-6.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Shoes</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid offer pt-5">
                <div className="row px-xl-5">
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                            <img src="/img/offer-1.png" alt="" />
                            <div className="position-relative" style={{ zIndex: 1 }}>
                                <h5 className="text-uppercase text-primary mb-3">
                                    20% off the all order
                                </h5>
                                <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
                                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                            <img src="/img/offer-2.png" alt="" />
                            <div className="position-relative" style={{ zIndex: 1 }}>
                                <h5 className="text-uppercase text-primary mb-3">
                                    20% off the all order
                                </h5>
                                <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5">
                        <span className="px-2">Trandy Products</span>
                    </h2>
                </div>
                <div className="row px-xl-5 pb-3">


                {
                    products.map((curElem, index) => {
                        return (
                        //    <div>{curElem.items[index].id}</div> 
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={curElem.id}>
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src={curElem.image} alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{curElem.name}</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>${curElem.price}</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>${curElem.price}</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                {/* <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a> */}
                                <a className="btn btn-sm text-dark p-0" onClick={() => rent(curElem.id, curElem.name, curElem.company, curElem.price, curElem.colors, curElem.image, curElem.category, curElem.featured)}>
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Rent
                                </a>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }

                    
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-2.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-3.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-4.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-5.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-6.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-7.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-8.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-secondary my-5">
                <div className="row justify-content-md-center py-5 px-xl-5">
                    <div className="col-md-6 col-12 py-5">
                        <div className="text-center mb-2 pb-2">
                            <h2 className="section-title px-5 mb-3">
                                <span className="bg-secondary px-2">Stay Updated</span>
                            </h2>
                            <p>
                                Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
                                labore at justo ipsum eirmod duo labore labore.
                            </p>
                        </div>
                        <form action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control border-white p-4"
                                    placeholder="Email Goes Here"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5">
                        <span className="px-2">Just Arrived</span>
                    </h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-1.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-2.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-3.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-4.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-5.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-6.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-7.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="/img/product-8.jpg" alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="/user/productdetail" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="vendor-item border p-4">
                                <img src="/img/vendor-1.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/img/vendor-2.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/img/vendor-3.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/img/vendor-4.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/img/vendor-5.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/img/vendor-6.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/img/vendor-7.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/img/vendor-8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <a href="" className="text-decoration-none">
                            <h1 className="mb-4 display-5 font-weight-semi-bold">
                                <span className="text-primary font-weight-bold border border-white">
                                    R
                                </span>
                                entBuddy
                            </h1>
                        </a>
                        <p>
                            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
                            sit erat lorem et magna ipsum dolore amet erat.
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt text-primary mr-3" />
                            123 Street, New York, USA
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope text-primary mr-3" />
                            info@example.com
                        </p>
                        <p className="mb-0">
                            <i className="fa fa-phone-alt text-primary mr-3" />
                            +012 345 67890
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Home
                                    </a>
                                    <a className="text-dark mb-2" href="shop.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Our Shop
                                    </a>
                                    <a className="text-dark mb-2" href="detail.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Shop Detail
                                    </a>
                                    <a className="text-dark mb-2" href="cart.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Shopping Cart
                                    </a>
                                    <a className="text-dark mb-2" href="checkout.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Checkout
                                    </a>
                                    <a className="text-dark" href="contact.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Home
                                    </a>
                                    <a className="text-dark mb-2" href="shop.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Our Shop
                                    </a>
                                    <a className="text-dark mb-2" href="detail.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Shop Detail
                                    </a>
                                    <a className="text-dark mb-2" href="cart.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Shopping Cart
                                    </a>
                                    <a className="text-dark mb-2" href="checkout.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Checkout
                                    </a>
                                    <a className="text-dark" href="contact.html">
                                        <i className="fa fa-angle-right mr-2" />
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                                <form action="">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control border-0 py-4"
                                            placeholder="Your Name"
                                            required="required"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control border-0 py-4"
                                            placeholder="Your Email"
                                            required="required"
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-primary btn-block border-0 py-3"
                                            type="submit"
                                        >
                                            Subscribe Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-top border-light mx-xl-5 py-4">
                    {/* <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-dark">
                            ©{" "}
                            <a className="text-dark font-weight-semi-bold" href="#">
                                Your Site Name
                            </a>
                            . All Rights Reserved. Designed by
                            <a
                                className="text-dark font-weight-semi-bold"
                                href="https://htmlcodex.com"
                            >
                                HTML Codex
                            </a>
                            <br />
                            Distributed By{" "}
                            <a href="https://themewagon.com" target="_blank">
                                ThemeWagon
                            </a>
                        </p>
                    </div> */}
                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <img className="img-fluid" src="/img/payments.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default DashBoard

