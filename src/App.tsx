import React, { useEffect, useState } from "react"
import ReactTypingEffect from "react-typing-effect"
import ModalConCern from "./components/ModalConcern"
import styled, { keyframes } from "styled-components"
import Gift from "./assets/img/gif-load.webp"
import "./App.css"
import { Container } from "./components/common"
import Home from "./pages/home"

function App() {
  const [count, setCount] = useState(0)
  const [isSelect, setIsSelect] = useState<null | boolean>(null)
  const [isShowMainPage, setIsShowMainPage] = useState(false)
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

  useEffect(() => {
    if (isSelect === false) {
      location.href = "https://www.youtube.com/watch?v=nxwY8JfpjKo"
    } else if (isSelect === true) {
      setTimeout(() => {
        setIsShowMainPage(true)
      }, 3000)
    }
  }, [isSelect])

  return (
    <div className="App">
      {!isSelect ? (
        <ModalConCern setIsSelect={setIsSelect} />
      ) : (
        <Container
          className={` bg-black text-white min-h-screen flex flex-col justify-center items-center ${
            isShowMainPage && "hidden"
          }`}>
          <img src={Gift} alt="" width="300px" height="300px" />
          <Loadding className="cut-1 mt-5"></Loadding>
        </Container>
      )}
      {isShowMainPage && <Home />}
      <Home />
    </div>
  )
}

const LoaddingAnimation = keyframes`
 0%    {-webkit-mask-size:0    0  ,0    0  ,0    0  ,auto}
  16.67%{-webkit-mask-size:var(--s),0    0  ,0    0  ,auto}
  33.33%{-webkit-mask-size:var(--s),var(--s),0    0  ,auto}
  50%   {-webkit-mask-size:var(--s),var(--s),var(--s),auto}
  66.67%{-webkit-mask-size:0    0  ,var(--s),var(--s),auto}
  83.33%{-webkit-mask-size:0    0  ,0    0  ,var(--s),auto}
  100%  {-webkit-mask-size:0    0  ,0    0  ,0    0  ,auto}
`

const Loadding = styled.div`
  width: 70px;
  height: 26px;
  background: #ffffff;
  border-radius: 50px;
  --c: radial-gradient(farthest-side, #000 92%, #0000);
  --s: 18px 18px;
  -webkit-mask: var(--c) left 4px top 50%, var(--c) center,
    var(--c) right 4px top 50%, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  -webkit-mask-repeat: no-repeat;
  animation: ${LoaddingAnimation} 1.5s infinite;
`

export default App
