import React, { useState } from "react"
import Marquee from "react-fast-marquee"
import ReactTypingEffect from "react-typing-effect"
import styled, { keyframes } from "styled-components"
import Logo from "../../../assets/img/bronhowdyLogo.svg"
import ImgCicle from "../../../assets/img/cicle.svg"
import SignatureSomeThing from "../../../assets/img/signature-something.svg"
import Turbine from "../../../assets/img/turbine.svg"
import LineWhite from "../../../assets/img/line-white.svg"

function SectionHome() {
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
    <div className={`min-h-screen`}>
      <WrapperTextMarguee className={` block lg:hidden`}>
        <Marquee
          loop={20}
          speed={100}
          gradient={false}
          className={` text-xl lg:text-4xl font-KohSantepheap`}>
          {React.Children.toArray([
            ...Array(10).fill(
              <div className={` mx-10 lg:mx-60 flex items-center`}>
                <img src={Turbine} alt="" className={`w-7`} />
                <span className={` ml-6 lg:ml-14 font-KohSantepheap`}>
                  new work alert
                </span>
              </div>
            ),
          ])}
        </Marquee>
      </WrapperTextMarguee>
      {/* md:min-h-screen */}
      <div
        className={`bg-black w-full   text-white flex flex-col lg:flex-row lg:justify-end px-6 sm:px-0 xl:pl-12 pt-28`}>
        <ImageCircle
          className={` hidden lg:block absolute`}
          src={ImgCicle}
          alt=""
          marGinRight={70}
        />
        <div
          className={` w-full lg:w-11/12  relative flex justify-end  flex-col `}>
          <ReactTypingEffect
            text={textTyping}
            className={` text-6xl lg:text-5xl text-main-green text-left`}
          />
          <div
            className={` text-left text-4xl lg:text-5xl xl:text-7xl font-light lg:font-thin pt-8 lg:pt-12 lg:w-10/12 xl:w-full relative z-z-1`}>
            <span>I'm Bron! A Designer currently</span>
            <br />
            <span> standing-by in Bangkok</span>
            <br /> Thailand.
            <img
              src={SignatureSomeThing}
              alt=""
              className={` -z-z-1 hidden lg:block absolute lg:left-3/4 lg:top-2/3 xl:left-4.5/12 xl:top-7/12`}
            />
          </div>
          <div className={` text-left pt-6 lg:pt-14`}>
            <p
              className={` text-base pr-10 pr-0 lg:text-header-subtitle font-light`}>
              Freelance designer focused on Visual and Web design.
            </p>
          </div>
          <img
            src={SignatureSomeThing}
            alt=""
            className={` block lg:hidden w-48 mt-6`}
          />
          <div
            className={` flex justify-between items-center text-xl lg:text-2xl font-thin mt-32 lg:mt-48`}>
            <div className={`flex gap-2 lg:gap-5`}>
              <img className={` w-7`} src={Logo} alt="" />
              bronhowdy
            </div>
            <ImageCircle
              className={` block lg:hidden  relative w-28 md:w-36`}
              src={ImgCicle}
              alt=""
              marGinRight={30}
            />
          </div>

          <WrapperTextMarguee className={` hidden lg:block mt-14`}>
            <Marquee
              loop={20}
              speed={100}
              gradient={false}
              className={`text-4xl font-KohSantepheap`}
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
    </div>
  )
}

const GradientAnimation = keyframes`
  0%{background-position:0% 23%}
    50%{background-position:100% 78%}
    100%{background-position:0% 23%}
`

const WrapperTextMarguee = styled.div`
  padding: 0.5rem 0rem;
  animation: ${GradientAnimation} 10s linear infinite;
  background-image: linear-gradient(-35deg, #49d7bb, #19a590, #9d75ce, #5037ff);
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

const ImageCircle = styled.img<{ marGinTop?: number; marGinRight?: number }>`
  animation: ${CircleImg} 10s linear infinite;
  overflow: hidden;
  top: ${(props) => props.marGinTop && "64px"};
  right: ${(props) => (props.marGinRight ? `${props.marGinRight}px` : "28px")};
  z-index: 5;
`

export default SectionHome
