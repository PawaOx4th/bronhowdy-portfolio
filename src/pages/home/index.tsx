import Container from "../../components/Container"
import React, { useState } from "react"

import styled, { keyframes } from "styled-components"
import SectionHome from "./components/sectionHome"
import SectionShowWork from "./components/sectionShowWork"
import Divider from "../../components/Divider"

const Home = () => {
  return (
    <div className={`bg-black w-full min-h-screen text-white `}>
      <SectionHome />
      <Divider />
      {React.Children.toArray([...Array(5).fill(<SectionShowWork />)])}
    </div>
  )
}

export default Home
