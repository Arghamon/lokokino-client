import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/404';
import AppLayout from './components/AppLayout/AppLayout';
import Movies from './pages/movies';


// const PrivateRoute = ({ children, ...rest }) => {
//   const isAuthenticated = Cookies.getJSON('user')

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuthenticated ? (
//           children
//         ) : (
//             <Redirect
//               to={{
//                 pathname: '/login',
//                 state: { from: location }
//               }}
//             />
//           )
//       }
//     />
//   );
// }

// const PublicRoute = ({ children, ...rest }) => {
//   const isAuthenticated = Cookies.getJSON('user')

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         !isAuthenticated ? (
//           children
//         ) : (
//             <Redirect
//               to={{
//                 pathname: '/',
//                 state: { from: location }
//               }}
//             />
//           )
//       }
//     />
//   );
// }

const Routes = () => {

    //   const isAuthenticated = Cookies.getJSON('user')
    //   const dispatch = useRef(useDispatch());

    //   useEffect(() => {
    //     const user = Cookies.getJSON('user');
    //     if (user) {
    //       dispatch.current(SET_USER({ id: user.id, device: user.device }));
    //     }
    //   }, [])

    return (
        <Router>
            {/* {isAuthenticated && <Navigation />} */}
            <AppLayout>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/movies" exact>
                        <Movies />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </AppLayout>
        </Router>
    );
};

export default Routes;
