import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserForm from './components/UserForm/UserForm';
import Dashboard from './components/dashboard/Dashboard'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={UserForm} />
            <Route path='/dashboard/:user' teste='teste' component={Dashboard} />
        </Switch>
    </Router>
)

export default Routes;