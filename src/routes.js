import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';

import { GetUser } from './utils/Storage';

import Home from './pages/home';
import NotFound from './pages/404';
import AppLayout from './components/AppLayout/AppLayout';
import Movies from './pages/movies';

const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticated = GetUser();

    return (
        <>
            <Route {...rest}
                render={({ location }) =>
                    isAuthenticated ? (children) :
                        (
                            <Redirect to={{ pathname: '/login', state: { from: location } }} />
                        )
                }
            />
        </>
    );
}

const PublicRoute = ({ children, ...rest }) => {
    const isAuthenticated = GetUser();
    return (
        <>
            <Route  {...rest}
                render={({ location }) =>
                    !isAuthenticated ? (children) :
                        (
                            <Redirect to={{ pathname: '/', state: { from: location } }} />
                        )
                }
            />
        </>
    );
}

const Routes = () => {
    return (
        <Router>
            {/* {isAuthenticated && <Navigation />} */}
            <AppLayout>
                <Switch>
                    <PublicRoute path="/login">
                        <div>login</div>
                    </PublicRoute>
                    <PrivateRoute path="/" exact>
                        <Home />
                    </PrivateRoute>
                    <PrivateRoute path="/movies" exact>
                        <Movies />
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </AppLayout>
        </Router>
    );
};

export default Routes;
