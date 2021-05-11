import React from 'react';
import { NavLink } from 'react-router-dom';
import mainRoutes from '../../../routes/mainRoutes';
import { NavigationContainer } from './NavigationStyled';



const Navigation = () => {
    return (
        <NavigationContainer>
            <ul className="list">
{mainRoutes.map(item=><li className="listItem" key={item.path}>
    <NavLink to={item.path} className="link" activeClassName="activeLink" exact={item.exact}>{item.name}</NavLink>
                </li>)}
                
            </ul>
        </NavigationContainer>
    );
}

export default Navigation;