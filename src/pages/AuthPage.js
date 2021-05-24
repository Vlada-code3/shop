import React from "react";
import AuthForm from "../Components/auth/AuthForm";

const AuthPage = () => {
  return (
    <>
      <h2>Auth</h2>
      <AuthForm />
    </>
  );
};

export default AuthPage;

// {
//   "rules": {
//     "products": {
//       ".read": "true",
//         ".write": "auth !== null && auth.user_id === 'TTRvRTUNEmfs0xQsZeKSswtYkgY2'"
//     },
//       "historyOrders": {
//         "$uid" : {
//           ".read":"$uid === auth.uid",
//             ".write": "$uid === auth.uid"
//         }
//       },
//         "orders": {
//           ".read": "auth !== null && auth.user_id === 'TTRvRTUNEmfs0xQsZeKSswtYkgY2'",
//             ".write": "true"
//         }
//   }
// }
