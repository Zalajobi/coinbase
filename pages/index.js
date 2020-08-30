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

    const HeroHeader = styled.h5`
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

    const Welcome = styled.div`
    height: 458px;
    background-color: white;
    `

    const WelcomeHeader =  styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 65px;
    color: #5e46b7;
    `

    const WelcomeText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 40px;
    color: #333333;
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
                                <HeroHeader>We provide easy solution<br/>
                                    to exchange your <b>Bitcoin/<br/>
                                        GiftCard for money</b></HeroHeader>
                            </div>
                            <div className="d-flex flex-column mt-3">
                                <HeroText>CoinBase is a platform for trading your bitcoin and<br/>
                                    giftcard at the best rate, why not give us a trial.</HeroText>
                            </div>
                        </div>
                        <div className="d-flex ml-auto" style={{width: "600px", height: "450px", paddingLeft: "8rem"}}>
                            <img src="https://res.cloudinary.com/zalajobi/image/upload/v1598757814/CoinBase/HERO_IMG_rfdb7b.png"/>
                        </div>
                    </div>
                </div>
            </Hero>
            <Welcome>
                <div className="d-flex flex-row container">
                    <div className="d-fle w-50x" style={{height: "393px"}}>
                        <img src="https://res.cloudinary.com/zalajobi/image/upload/v1598759343/CoinBase/Layer_2_ajuiyh.png"/>
                    </div>
                    <div className="d-flex flex-column ml-auto">
                        <WelcomeHeader className="d-flex flex-column">Welcome to CoinBase
                        <span style={{marginTop: "-40px"}}><svg width="50" height="8" viewBox="0 0 50 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="3.5" y1="4.42188" x2="46.5" y2="4.42188" stroke="url(#paint0_linear)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="27.5" y1="7.76447" x2="27.5011" y2="9.53774" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD749B"/>
<stop offset="1" stop-color="#281AC8"/>
</linearGradient>
</defs>
</svg>
</span></WelcomeHeader>
                        <WelcomeText>
                            We have the best rates . Simply start your exchange right now. Sign up<br/>
                            for our Affiliate program and earn commission from each<br/>
                            exchange. The earnings are credited in your account instantly and<br/>
                            can be withdrawn right away. Also note some exchange directions<br/>
                            are hidden for unregistered user. To ensure to have access to all<br/>
                            our exchange directions and benefits kindly sign up and verify your <br/>
                            identity.
                        </WelcomeText>
                    </div>
                </div>
            </Welcome>
        </div>
    </>
  )
}
