import React from 'react';
import TopHeader from './TopHeader';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <TopHeader />
            <div className="bottom-header">
                <Container className="d-flex justify-content-between">
                    <img src="/images/Logo-white.png" alt="logo" />
                    <Navbar expand="md">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                            <NavLink to="/"  tag={RRNavLink}>خانه</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about"  tag={RRNavLink}>درباره ما</NavLink> 
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Container>
            </div>
        </div>
    )
}

export default Header;