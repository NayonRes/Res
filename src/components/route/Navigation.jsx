import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import SingleImage from "../../pages/image/SingleImage";
import MultiImage from "../../pages/image/MultiImage";
import NotFound from "../../pages/NotFound";
import Topbar from "../header/Topbar";
import DropZoneImage from "../../pages/image/DropZoneImage";
import CollapseTable from "../../pages/material/CollapseTable";
import Test from "../../pages/Test";
import ReactLocalization from "../../pages/ReactLocalization";
import PasswordValidation from "../../pages/PasswordValidation";
import Header1 from "../../pages/header/header1/Header1";
import Header2 from "../../pages/header/header2/Header2";
import OTP from "../../pages/OTP";

// import { AuthContext } from '../../pages/auth/AuthContext';
import { useLocation, Redirect } from "react-router-dom";
import ContactAnimate from "../../pages/ContactAnimate";

// const RestrictedRoute = ({ component: Component, ...rest }) => {
//   const { admin_user_auth } = useContext(AuthContext);

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         admin_user_auth.access_token ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/signin',
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

const Navigation = () => {
  // const { admin_user_auth } = useContext(AuthContext);
  // const location = useLocation();

  // if (location.pathname === '' || location.pathname === '/') {
  //   return <Redirect to={'/dashboard'} />;
  // } else if (admin_user_auth.access_token && location.pathname === '/signin') {
  //   return <Redirect to={'/dashboard'} />;
  // }

  return (
    <>
      <Topbar />
      <div
        style={{
          width: "980px",
          // background: "red",
          margin: "auto",
          padding: "50px",
        }}
      >
        <Switch>
          {/* <RestrictedRoute exact path="/" component={Home} /> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/single-image">
            <SingleImage />
          </Route>
          <Route exact path="/multi-image">
            <MultiImage />
          </Route>
          <Route exact path="/dropzone-image">
            <DropZoneImage />
          </Route>
          <Route exact path="/collapse-table">
            <CollapseTable />
          </Route>
          <Route exact path="/password-validation">
            <PasswordValidation />
          </Route>
          <Route exact path="/contact-animate">
            <ContactAnimate />
          </Route>
          <Route exact path="/otp">
            <OTP />
          </Route>
          <Route exact path="/react-localization">
            <ReactLocalization />
          </Route>
          <Route exact path="/header1">
            <Header1 />
          </Route>
          <Route exact path="/header2">
            <Header2 />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Navigation;
