import React from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

// import data from '../../data';
// import ClientsList from '../clients/ClientsList';
// import ProductsList from '../products/ProductsList';

const Main = ({ isAuth }) => {
  return (
    <>
      {/* <Products/>
            <h2>Clients</h2>
            <Clients/> */}

      <Switch>
        {mainRoutes.map(item =>
          item.isPrivate ? (
            <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
          ) : (
            <PublicRoute {...item} key={item.path} isAuth={isAuth} />
          )
        )}
      </Switch>
    </>
  );
};
const mapStateToProps = state => {
  return {
    isAuth: state.auth.tokens.idToken
  };
};
export default connect(mapStateToProps)(Main);
