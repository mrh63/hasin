import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Header  from '../components/Header';
import Product from '../components/Product';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutUs}/>
                <Route path="/:title" component={Product} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;