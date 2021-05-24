import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
    isPrivate: false,
    isRestricted: false
  },
  {
    name: "Products",
    path: "/products",
    exact: false,
    component: ProductsPage,
    isPrivate: false,
    isRestricted: false
  },
  {
    name: "Admin",
    path: "/admin",
    exact: false,
    component: AdminPage,
    isPrivate: true,
    isRestricted: false
  },
  {
    name: "Registration",
    path: "/registration",
    exact: true,
    component: AuthPage,
    isPrivate: false,
    isRestricted: true
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: AuthPage,
    isPrivate: false,
    isRestricted: true
  }
];
export default mainRoutes;
