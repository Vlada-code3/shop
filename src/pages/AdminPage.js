import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import adminRoutes from '../routes/adminRoutes';




const AdminPage = ({ match, location, history}) => {
    const onHandleClick = () => {
        if (location.state?.from) {
            history.push(location.state.from)
        }
    };


    return (
        <>
            <button type="button" onClick={onHandleClick}>Back</button>
            <h2>Admin</h2>
            <nav>
                <ul>
                   {adminRoutes.map(item=> <li key={item.path}>
                       <NavLink to={match.url+item.path}>{item.name}</NavLink>
                    </li>)}
                   
                </ul>
            </nav>
            <Switch>
                {adminRoutes.map(item => <Route path={match.url + item.path} component={item.component} key={item.path} />)}
                
            </Switch>
    </>
    );
}

export default AdminPage;