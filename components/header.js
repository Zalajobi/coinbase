import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


const Header = (props) => {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const HeaderContainer = styled.div`
    height: 100px;
    display: flex !important;
    flex-direction: row;
    align-self: center;
    // background: #E5E5E5;
    `

    const Container = styled.div`
    display: flex;
    padding: 0 0 0 8rem;
    align-self: center;
    flex-direction: row;
    `

    const Logo = styled.div`
    height: 28.61px;
    align-self: center;
    margin-bottom: 1rem;
    `

    const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-left: 8rem;
    `

    const NavLink = styled.a`
    color: #333333;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    `

    const LoginBtn = styled.button`
    background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
    border-radius: 100px;
    height: 41px;
    width: 157.84px;
    color: white;
    align-self: center;
    `


    return (
        <>
            <HeaderContainer>
                <Container className="flex-row">
                    <Logo>
                        <img src="https://res.cloudinary.com/zalajobi/image/upload/v1598745292/CoinBase/Logo_azahb0.png"/>
                    </Logo>

                    {/*Navbar*/}
                    <NavBar>
                        <ul className="navbar-nav mr-auto d-flex flex-row align-items-center">
                            <li className="nav-item active ml-5">
                                <NavLink className="nav-link text-decoration-none" href="#">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item ml-5">
                                <NavLink className="navList text-decoration-none" href="#">About Us</NavLink>
                            </li>
                            <li className="nav-item ml-5">
                                <NavLink className="navList text-decoration-none" href="#">Blog</NavLink>
                            </li>
                            <li className="nav-item ml-5">
                                <NavLink className="navList text-decoration-none" href="#">Contact Us</NavLink>
                            </li>
                        </ul>
                    </NavBar>

                    {/*Button*/}
                    <div className="align-self-center d-flex" style={{marginLeft: "6rem"}}>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle style={{color: "#333333", fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", textAlign: "center", backgroundColor: "#ffffff", borderColor: "white"}} caret>Sell Bitcoin / Giftcard </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Sell Bitcoin</DropdownItem>
                                <DropdownItem>Sell Giftcard</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div className="d-flex ml-5">
                        <LoginBtn>Login</LoginBtn>
                    </div>
                </Container>
            </HeaderContainer>
        </>
    )
}

export default Header;