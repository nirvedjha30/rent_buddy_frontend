import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

//users components
import UserDashboard from "layouts/userDashboard/dashboard"
import Cart from "layouts/userDashboard/cart"
import ProductDetail from "layouts/userDashboard/productDetail"
import Checkout from "layouts/userDashboard/checkout"
import AllProducts from "layouts/userDashboard/allProducts"

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "/vendor/dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/vendor/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];



const userroutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "/user/dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/user/dashboard",
    component: <UserDashboard />,
  },
  {
    type: "collapse",
    name: "All Products",
    key: "/user/allproduct",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/user/allproduct",
    component: <AllProducts />,
  },
  {
    type: "collapse",
    name: "Checkout",
    key: "checkout",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/user/checkout",
    component: <Checkout />,
  },
  {
    type: "collapse",
    name: "Cart",
    key: "cart",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/user/cart",
    component: <Cart />,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Detail",
    key: "detail",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/user/productdetail",
    component: <ProductDetail />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export { routes, userroutes };
