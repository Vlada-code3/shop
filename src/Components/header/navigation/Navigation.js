import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../../redux/auth/authActions";
import mainRoutes from "../../../routes/mainRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ location, logOut, isAuth }) => {
  //   console.log(location);

  return (
    <NavigationContainer>
      <ul className="list">
        {mainRoutes.map(item => (
          <NavigationListItem item={item} location={location} key={item.path} isAuth={isAuth} />
        ))}

        {isAuth && (
          <li>
            <button type="button" onClick={() => logOut()}>
              LogOut
            </button>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};
const mapStateToProps = state => {
  return {
    isAuth: state.auth.tokens.idToken
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(withRouter(Navigation));
