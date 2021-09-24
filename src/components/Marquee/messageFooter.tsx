import React from "react"
import Marquee from "react-fast-marquee"
import styled from "styled-components"

function WrapperText() {
  return (
    <div className={`flex items-center ml-11 text-lg lg:text-2xl font-light`}>
      <Dot />
      GET IN TOUCH AND MAKE GREAT PROJECTS TOGETHER
    </div>
  )
}

function MessageFooter() {
  return (
    <div className={`border py-5 lg:py-7`}>
      <Marquee gradient={false}>
        <WrapperText />
        <WrapperText />
        <WrapperText />
        <WrapperText />
        <WrapperText />
      </Marquee>
    </div>
  )
}

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 49px;
  background-color: #fff;
  margin-right: 43px;
`

export default MessageFooter
