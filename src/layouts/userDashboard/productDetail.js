const ProductDetail = () => {

    return <>
        {/* Topbar Start */}
        {/* <div className="container-fluid">
            <div className="row bg-secondary py-2 px-xl-5">
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
            </div>
            <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a href="" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold">
                            <span className="text-primary font-weight-bold border px-3 mr-1">
                                E
                            </span>
                            Shopper
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
                    <a href="" className="btn border">
                        <i className="fas fa-heart text-primary" />
                        <span className="badge">0</span>
                    </a>
                    <a href="" className="btn border">
                        <i className="fas fa-shopping-cart text-primary" />
                        <span className="badge">0</span>
                    </a>
                </div>
            </div>
        </div> */}
        {/* Topbar End */}
        {/* Navbar Start */}
        {/* <div className="container-fluid">
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
                        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
                        id="navbar-vertical"
                        style={{ width: "calc(100% - 30px)", zIndex: 1 }}
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
                                <span className="text-primary font-weight-bold border px-3 mr-1">
                                    E
                                </span>
                                Shopper
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
                                <a href="index.html" className="nav-item nav-link">
                                    Home
                                </a>
                                <a href="shop.html" className="nav-item nav-link">
                                    Shop
                                </a>
                                <a href="detail.html" className="nav-item nav-link active">
                                    Shop Detail
                                </a>
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Pages
                                    </a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="cart.html" className="dropdown-item">
                                            Shopping Cart
                                        </a>
                                        <a href="checkout.html" className="dropdown-item">
                                            Checkout
                                        </a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">
                                    Contact
                                </a>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <a href="" className="nav-item nav-link">
                                    Login
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Register
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div> */}
        {/* Navbar End */}
        {/* Page Header Start */}
        <div className="container-fluid bg-secondary mb-5">
            <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ minHeight: 300 }}
            >
                <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
                <div className="d-inline-flex">
                    <p className="m-0">
                        <a href="">Home</a>
                    </p>
                    <p className="m-0 px-2">-</p>
                    <p className="m-0">Shop Detail</p>
                </div>
            </div>
        </div>
        {/* Page Header End */}
        {/* Shop Detail Start */}
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                    <div
                        id="product-carousel"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner border">
                            <div className="carousel-item active">
                                <img
                                    className="w-100 h-100"
                                    src="/img/product-1.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="w-100 h-100"
                                    src="/img/product-2.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="w-100 h-100"
                                    src="/img/product-3.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="w-100 h-100"
                                    src="/img/product-4.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#product-carousel"
                            data-slide="prev"
                        >
                            <i className="fa fa-2x fa-angle-left text-dark" />
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#product-carousel"
                            data-slide="next"
                        >
                            <i className="fa fa-2x fa-angle-right text-dark" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-7 pb-5">
                    <h3 className="font-weight-semi-bold">Colorful Stylish Shirt</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star" />
                            <small className="fas fa-star" />
                            <small className="fas fa-star" />
                            <small className="fas fa-star-half-alt" />
                            <small className="far fa-star" />
                        </div>
                        <small className="pt-1">(50 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                    <p className="mb-4">
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam
                        stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna
                        lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est
                        lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et
                        rebum kasd rebum.
                    </p>
                    <div className="d-flex mb-3">
                        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="size-1"
                                    name="size"
                                />
                                <label className="custom-control-label" htmlFor="size-1">
                                    XS
                                </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="size-2"
                                    name="size"
                                />
                                <label className="custom-control-label" htmlFor="size-2">
                                    S
                                </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="size-3"
                                    name="size"
                                />
                                <label className="custom-control-label" htmlFor="size-3">
                                    M
                                </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="size-4"
                                    name="size"
                                />
                                <label className="custom-control-label" htmlFor="size-4">
                                    L
                                </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="size-5"
                                    name="size"
                                />
                                <label className="custom-control-label" htmlFor="size-5">
                                    XL
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex mb-4">
                        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="color-1"
                                    name="color"
                                />
                                <label className="custom-control-label" htmlFor="color-1">
                                    Black
                                </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="color-2"
                                    name="color"
                                />
                                <label className="custom-control-label" htmlFor="color-2">
                                    White
                                </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="color-3"
                                    name="color"
                                />
                                <label className="custom-control-label" htmlFor="color-3">
                                    Red
                                </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="color-4"
                                    name="color"
                                />
                                <label className="custom-control-label" htmlFor="color-4">
                                    Blue
                                </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="color-5"
                                    name="color"
                                />
                                <label className="custom-control-label" htmlFor="color-5">
                                    Green
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{ width: 130 }}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus">
                                    <i className="fa fa-minus" />
                                </button>
                            </div>
                            <input
                                type="text"
                                className="form-control bg-secondary text-center"
                                defaultValue={1}
                            />
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3">
                            <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                        </button>
                    </div>
                    <div className="d-flex pt-2">
                        <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                        <div className="d-inline-flex">
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
                                <i className="fab fa-pinterest" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                        <a
                            className="nav-item nav-link active"
                            data-toggle="tab"
                            href="#tab-pane-1"
                        >
                            Description
                        </a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">
                            Information
                        </a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">
                            Reviews (0)
                        </a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            <p>
                                Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                                Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
                                diam ea vero et dolore rebum, dolor rebum eirmod consetetur
                                invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum
                                rebum diam. Dolore diam stet rebum sed tempor kasd eirmod.
                                Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam
                                consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod
                                nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit
                                rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus
                                eirmod takimata dolor ea invidunt.
                            </p>
                            <p>
                                Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
                                ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
                                tempor. Gubergren amet amet labore sadipscing clita clita diam
                                clita. Sea amet et sed ipsum lorem elitr et, amet et labore
                                voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna
                                takimata justo et amet magna et.
                            </p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>
                                Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                                Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
                                diam ea vero et dolore rebum, dolor rebum eirmod consetetur
                                invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum
                                rebum diam. Dolore diam stet rebum sed tempor kasd eirmod.
                                Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam
                                consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod
                                nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit
                                rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus
                                eirmod takimata dolor ea invidunt.
                            </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua.
                                            Nonumy.
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua.
                                            Nonumy.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                    <div className="media mb-4">
                                        <img
                                            src="/img/user.jpg"
                                            alt="Image"
                                            className="img-fluid mr-3 mt-1"
                                            style={{ width: 45 }}
                                        />
                                        <div className="media-body">
                                            <h6>
                                                John Doe
                                                <small>
                                                    {" "}
                                                    - <i>01 Jan 2045</i>
                                                </small>
                                            </h6>
                                            <div className="text-primary mb-2">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                                <i className="far fa-star" />
                                            </div>
                                            <p>
                                                Diam amet duo labore stet elitr ea clita ipsum, tempor
                                                labore accusam ipsum et no at. Kasd diam tempor rebum
                                                magna dolores sed sed eirmod ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-4">Leave a review</h4>
                                    <small>
                                        Your email address will not be published. Required fields are
                                        marked *
                                    </small>
                                    <div className="d-flex my-3">
                                        <p className="mb-0 mr-2">Your Rating * :</p>
                                        <div className="text-primary">
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="message">Your Review *</label>
                                            <textarea
                                                id="message"
                                                cols={30}
                                                rows={5}
                                                className="form-control"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name *</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email *</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <input
                                                type="submit"
                                                defaultValue="Leave Your Review"
                                                className="btn btn-primary px-3"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Shop Detail End */}
        {/* Products Start */}
        <div className="container-fluid py-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">You May Also Like</span>
                </h2>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="owl-carousel related-carousel" style={{display:"inline-flex"}}>
                        <div className="card product-item border-0">
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
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                        <div className="card product-item border-0">
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
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                        <div className="card product-item border-0">
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
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                        <div className="card product-item border-0">
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
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-eye text-primary mr-1" />
                                    View Detail
                                </a>
                                <a href="" className="btn btn-sm text-dark p-0">
                                    <i className="fas fa-shopping-cart text-primary mr-1" />
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                        <div className="card product-item border-0">
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
                                <a href="" className="btn btn-sm text-dark p-0">
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
        </div>
        {/* Products End */}
        {/* Footer Start */}
        {/* <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
            <div className="row px-xl-5 pt-5">
                <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <a href="" className="text-decoration-none">
                        <h1 className="mb-4 display-5 font-weight-semi-bold">
                            <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                                E
                            </span>
                            Shopper
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
           
        </div> */}
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-primary back-to-top">
            <i className="fa fa-angle-double-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Contact Javascript File */}
        {/* Template Javascript */}
    </>
}

export default ProductDetail