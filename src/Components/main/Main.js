import React from 'react'
import { Route, Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';

// import data from '../../data';
// import ClientsList from '../clients/ClientsList';
// import ProductsList from '../products/ProductsList';



const Main = () => {
    return (
        <>
            {/* <Products/>
            <h2>Clients</h2>
            <Clients/> */}
            
            <Switch>
           
                {mainRoutes.map(item => <Route path={item.path} exact={item.exact} component={item.component} key={item.path}/>)}
            </Switch>
        </>

    );
};

export default Main;