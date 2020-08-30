import React from 'react';
import styled from 'styled-components';

function dropItem() {

}

const Header = (props) => {

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
    margin-left: 10rem;
    `

    const DropdownBtn = styled.button`
    color: #333333;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    `

    const NavLink = styled.a`
    color: #333333;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    text-align: center;
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
                                <NavLink className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item ml-5">
                                <NavLink className="navList" href="#">About Us</NavLink>
                            </li>
                            <li className="nav-item ml-5">
                                <NavLink className="navList" href="#">Blog</NavLink>
                            </li>
                            <li className="nav-item ml-5">
                                <NavLink className="navList" href="#">Contact Us</NavLink>
                            </li>
                        </ul>
                    </NavBar>

                    {/*Button*/}
                    <div className="align-self-center d-flex flex-row" style={{marginLeft: "6rem"}}>
                        <DropdownBtn className="btn d-flex flex-row">Sell Bitcoin / Giftcard <span style={{marginLeft: "3px", alignSelf: "center"}} onClick={dropItem}>
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.75271 5.13453C4.35549 5.71401 3.50028 5.71401 3.10306 5.13453L0.656524 1.56539C0.201637 0.901777 0.676795 0 1.48135 0H6.37442C7.17897 0 7.65413 0.901778 7.19924 1.56539L4.75271 5.13453Z" fill="#333333"/>
                            </svg>
                        </span></DropdownBtn>
                    </div>
                </Container>
            </HeaderContainer>
        </>
    )
}

export default Header;