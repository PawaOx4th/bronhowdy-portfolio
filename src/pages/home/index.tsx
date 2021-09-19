import React, { useState } from "react"
import ReactTypingEffect from "react-typing-effect"
import styled, { keyframes } from "styled-components"
import ImgCicle from "../../assets/img/cicle.svg"
import SignatureSomeThing from "../../assets/img/signature-something.svg"
import Logo from "../../assets/img/bronhowdyLogo.svg"

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
      </div>
    </div>
  )
}

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
