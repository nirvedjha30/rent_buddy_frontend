const Cart =() =>{


  // const proid = localStorage.getItem('productid');
  // const proname = localStorage.getItem('productname')

        const username = sessionStorage.getItem('username');

        const proid = localStorage.getItem("productid")
        const proname = localStorage.getItem("productname")
        const procompany = localStorage.getItem("productcompany")
        const proprice = localStorage.getItem("productprice")
        const procolors = localStorage.getItem("productcolors")
        const proimage = localStorage.getItem("productimage")
        const procategory = localStorage.getItem("productcategory")
        const profeatured = localStorage.getItem("productfeatured")

        // console.log(proid);
        // console.log(proname)
  // console.log(procompa);
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
                <a href="detail.html" className="nav-item nav-link">
                  Shop Detail
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle active"
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
        <h1 className="font-weight-semi-bold text-uppercase mb-3">
          Shopping Cart
        </h1>
        <div className="d-inline-flex">
          <p className="m-0">
            <a href="">Home</a>
          </p>
          <p className="m-0 px-2">-</p>
          <p className="m-0">Shopping Cart</p>
        </div>
      </div>
    </div>
    {/* Page Header End */}
    {/* Cart Start */}
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">

          {/* <img src={proimage} alt="image" height="100px" style={{textAlign:"center"}}/>*/}

          <p><b>Username : </b>{username}</p>
          {/* <p><b>Product Name : </b>{proname}</p>
          <p><b>Product Company : </b>{procompany}</p>
          <p><b>Product Price : </b>{proprice}</p>
          <p><b>Product Color : </b>{procolors}</p>
          <p><b>Product Image : </b>{proimage}</p>
          <p><b>Product Category : </b>{procategory}</p>
          <p><b>Product Featured : </b>{profeatured}</p> */}


          <table className="table table-bordered text-center mb-0">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Company</th>
                <th>Price</th>
                <th>Product Category</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr>
                <td className="align-middle">
                  <img src={proimage} alt="" style={{ width: 50 }} />
                </td>
                <td className="align-middle">{proname}</td>
                <td className="align-middle">{procompany}</td>
                <td className="align-middle">${proprice}</td>
                <td className="align-middle">{procategory}</td>
                <td className="align-middle">
                  <div
                    className="input-group quantity mx-auto"
                    style={{ width: 100 }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-minus">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm bg-secondary text-center"
                      defaultValue={1}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                {/* <td className="align-middle">$150</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-primary">
                    <i className="fa fa-times" />
                  </button>
                </td> */}
              </tr>
            </tbody>
          </table>

        </div>
        <div className="col-lg-4">
          <form className="mb-5" action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Coupon Code"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">${proprice}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$0</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">${proprice}</h5>
              </div>
              <button className="btn btn-block btn-primary my-3 py-3">
                
                <a href="/user/checkout" className="dropdown-item">
                Proceed To Checkout
                                            </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Cart End */}
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
      {""}
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

export default Cart

