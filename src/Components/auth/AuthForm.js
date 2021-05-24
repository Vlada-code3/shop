import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginOperation, registerOperation } from "../../redux/auth/authOperations";
import schema from "./validation/validator";

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={values => {
            console.log(values);
            this.props.location.pathname === "/registration"
              ? this.props.registerOperation(values)
              : this.props.loginOperation(values);
          }}
        >
          {(
            { isSubmitting } ///___esli proizoshel subbmit
          ) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                {this.props.location.pathname === "/registration" ? "register" : "login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(
  null,
  { registerOperation, loginOperation }
)(withRouter(AuthForm));

// class AuthForm extends Component {
//   state = {
//     email: "",
//     password: ""
//   };

//   onHandliSubmit = e => {
//     e.preventDefault();
//     this.props.location.pathname === "/registration"
//       ? this.props.registerOperation(this.state)
//       : this.props.loginOperation(this.state);
//   };

//   onHandleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     console.log(this.props.location.pathname);
//     return (
//       <form onSubmit={this.onHandliSubmit}>
//         <label>
//           Email
//           <input value={this.state.email} name="email" type="text" onChange={this.onHandleChange} />
//         </label>
//         <label>
//           Password
//           <input value={this.state.password} name="password" type="text" onChange={this.onHandleChange} />
//         </label>
//         <button type="submit">{this.props.location.pathname === "/registration" ? "register" : "login"}</button>
//       </form>
//     );
//   }
// }

// export default connect(
//   null,
//   { registerOperation, loginOperation }
// )(withRouter(AuthForm));
