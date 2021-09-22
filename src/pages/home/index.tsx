import React, { useState } from "react"
import ReactTypingEffect from "react-typing-effect"
import styled, { keyframes } from "styled-components"
import ImgCicle from "../../assets/img/cicle.svg"
import SignatureSomeThing from "../../assets/img/signature-something.svg"
import Logo from "../../assets/img/bronhowdyLogo.svg"
import Marquee from "react-fast-marquee"

const Home = () => {
  const [textTyping, setTextTyping] = useState([
    "Hello!",
    "Olá!",
    "안녕하세요!",
    "ສະບາຍດີ",
    "Ciao!",
    "สวัสดี",
    "Привет",
    "こんにちは!",
    "Bonjour!",
    "你好",
  ])
  return (
    <div
      className={`bg-black w-full min-h-screen text-white flex justify-end `}>
      <ImageCircle src={ImgCicle} alt="" />
      <div
        className={` w-full lg:w-11/12  relative flex justify-end  flex-col `}>
        <ReactTypingEffect
          text={textTyping}
          className={` text-5xl text-main-green text-left`}
        />
        <div
          className={` text-left text-header-content font-thin  relative z-z-1`}>
          I'm Bron! A Designer currently
          <br />
          standing-by in Bangkok
          <br /> Thailand.
          <img
            src={SignatureSomeThing}
            alt=""
            className={` -z-z-1 hidden lg:block absolute lg:left-4.5/12 lg:top-7/12`}
          />
        </div>
        <div className={` text-left`}>
          <p className={` text-header-subtitle font-light`}>
            Freelance designer focused on Visual and Web design.
          </p>
        </div>
        <img src={SignatureSomeThing} alt="" className={` block lg:hidden`} />
        <div className={` flex items-center text-2xl font-thin gap-5 mt-48`}>
          <img src={Logo} alt="" />
          bronhowdy
        </div>

        <WrapperTextMarguee>
          <Marquee
            loop={20}
            speed={100}
            gradient={false}
            // className={` mt-12 bg-gradient-to-r from-main-medium-turquoise  via-main-dark-pastel-purple to-main-han-purple py-4  text-4xl`}
          >
            {React.Children.toArray([
              ...Array(10).fill(
                <div className={` mx-60 flex items-center`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50.093"
                    height="52.255"
                    viewBox="0 0 50.093 52.255">
                    <path
                      id="Path_91"
                      data-name="Path 91"
                      d="M1708.9,373.678a.693.693,0,0,0,.683.577.674.674,0,0,0,.117-.01.692.692,0,0,0,.566-.8c-.833-4.874.463-14.184,1.977-23.785,6.815,6.925,13.561,13.536,18.091,15.7a.675.675,0,0,0,.3.068.7.7,0,0,0,.3-1.322c-4.233-2.023-10.68-8.3-17.253-14.969,9.345-.167,18.374-.523,22.972-2.351a.708.708,0,0,0,.393-.913.693.693,0,0,0-.9-.4c-4.341,1.726-13.085,2.083-22.2,2.249,6.473-7.03,12.6-13.956,14.623-18.624a.694.694,0,0,0-1.272-.553c-1.968,4.535-8.146,11.486-14.641,18.528q.116-.716.229-1.431h0c1.422-8.883,2.766-17.272,2.766-22.946a.694.694,0,1,0-1.387,0c0,5.559-1.333,13.888-2.746,22.706h0l0,.019c-.068.433-.139.866-.207,1.3l-.661-.674-.016-.016c-6.148-6.275-11.954-12.2-16.4-15.427a.694.694,0,1,0-.814,1.125c4.355,3.16,10.4,9.325,16.237,15.288h0l0,0,.02.02q.362.37.726.741l-.787.012c-8.6.128-16.714.249-22.048,1.283a.7.7,0,0,0-.551.824.692.692,0,0,0,.813.559c5.213-1.011,13.65-1.137,21.807-1.258l1.07-.016-.6.648c-5.979,6.456-11.626,12.553-14.7,17.221a.693.693,0,1,0,1.157.764c2.917-4.431,8.276-10.256,14.012-16.449C1709.178,360.388,1708.09,368.934,1708.9,373.678Z"
                      transform="translate(-1687.001 -322)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <span className={`ml-14`}> new work alert</span>
                </div>
              ),
            ])}
          </Marquee>
        </WrapperTextMarguee>
      </div>
    </div>
  )
}

const GradientAnimation = keyframes`
  0%{background-position:0% 23%}
    50%{background-position:100% 78%}
    100%{background-position:0% 23%}
`

const WrapperTextMarguee = styled.div`
  margin-top: 56px;
  animation: ${GradientAnimation} 10s linear infinite;
  background-image: linear-gradient(-45deg, #49d7bb, #19a590, #9d75ce, #5037ff);
  background-size: 600% 600%;
`

const CircleImg = keyframes`
0% {
    /* tr */
    transform: rotate(0deg);
}


100% {
    transform: rotate(360deg);
}

`

const ImageCircle = styled.img`
  animation: ${CircleImg} 10s linear infinite;
  overflow: hidden;
  display: block;
  position: absolute;
  top: 28px;
  right: 64px;
  z-index: 5;
`

export default Home
