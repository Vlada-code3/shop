import Clients from "../Components/clients/Clients";
import Products from "../Components/products/Products";

const adminRoutes = [{
    name: "Products",
    path: "/products",
    exact: true,
    component: Products,
},
{
    name: "Clients",
    path: "/clients",
    exact: true,
    component: Clients,
    }];
export default adminRoutes;