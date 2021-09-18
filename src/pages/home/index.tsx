import React from "react"
import styled, { keyframes } from "styled-components"
import ImgCicle from "../../assets/img/cicle.svg"

const Home = () => {
  return (
    <div
      className={`bg-black w-full min-h-screen text-white flex justify-end text-white`}>
      {/* <div>1</div> */} 
      Lorem, ipsum dolor.2222 🦁🦁
      <div className={` w-full lg:w-11/12 border border-yellow-300 relative`}>
        <ImageCircle src={ImgCicle} alt="" />
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
