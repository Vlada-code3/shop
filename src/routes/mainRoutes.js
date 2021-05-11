
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

const mainRoutes = [{
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
},
{
    name: "Products",
    path: "/products",
    exact: true,
    component: ProductsPage,
},
{
    name: "Admin",
    path: "/admin",
    exact: false,
    component: AdminPage,
},
{
    name: "Registration",
    path: "/registration",
    exact: true,
    component: AuthPage,
},
{
    name: "Login",
    path: "/login",
    exact: true,
    component: AuthPage,
}
];
export default mainRoutes;