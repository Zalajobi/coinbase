import React from 'react';
import styled from 'styled-components';
import Header from "../components/header";

export default function Home() {

    const Hero = styled.div`
    display: flex;
    flex-direction: row;
    height: 816px;
    background-image: url("https://res.cloudinary.com/zalajobi/image/upload/v1598757422/CoinBase/BG_wivzlv.png");
    background-repeat: no-repeat;
    background-size: cover;
    `

    const HeroHeader = styled.h4`
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 60px;
    color: #FFFFFF;
    `

    const HeroText = styled.p`
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    `


  return (
    <>
        <div>
            <header>
                <Header/>
            </header>
            <Hero>
                <div className="container pt-5">
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column" style={{paddingTop: "5rem"}}>
                            <div className="d-flex flex-column">
                                <HeroHeader>We provide easy solution</HeroHeader>
                                <HeroHeader>to exchange your <b>Bitcoin/</b></HeroHeader>
                                <HeroHeader><b>GiftCard for money</b></HeroHeader>
                            </div>
                            <div className="d-flex flex-column mt-3">
                                <HeroText>CoinBase is a platform for trading your bitcoin and </HeroText>
                                <HeroText>giftcard at the best rate, why not give us a trial.</HeroText>
                            </div>
                        </div>
                        <div className="d-flex ml-auto" style={{width: "600px", height: "450px", paddingLeft: "8rem"}}>
                            <img src="https://res.cloudinary.com/zalajobi/image/upload/v1598757814/CoinBase/HERO_IMG_rfdb7b.png"/>
                        </div>
                    </div>
                </div>
            </Hero>
        </div>
    </>
  )
}
