import React, { useEffect, useState } from "react"
import ReactTypingEffect from "react-typing-effect"
import ModalConCern from "./components/ModalConcern"
import styled from "styled-components"
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
    } else {
      setTimeout(() => {
        setIsShowMainPage(true)
      }, 5000)
    }
  }, [isSelect])

  return (
    <div className="App">
      {!isSelect ? (
        <ModalConCern setIsSelect={setIsSelect} />
      ) : (
        <Container
          className={` bg-black text-white min-h-screen flex justify-center items-center ${
            isShowMainPage && "hidden"
          }`}>
          <img src={Gift} alt="" width="300px" height="300px" />
        </Container>
      )}
      {isShowMainPage && <Home />}
    </div>
  )
}

export default App
