import React, { useEffect, useState } from "react"
import ReactTypingEffect from "react-typing-effect"
import ModalConCern from "./components/ModalConcern"
import styled from "styled-components"
import Gift from "./assets/img/gif-load.webp"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [isSelect, setIsSelect] = useState<null | boolean>(null)

  useEffect(() => {
    if (isSelect === false) {
      location.href = "https://www.youtube.com/watch?v=nxwY8JfpjKo"
    }
  }, [isSelect])

  return (
    <div className="App">
      {!isSelect && <ModalConCern setIsSelect={setIsSelect} />}
      <div className="bg-black w-full min-h-screen text-white text-3xl font-octane">
        {/* <img src={Gift} alt="" /> */}
        {/* lorem123 */}
        <ReactTypingEffect
          text={[
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
          ]}
          speed={200}
          eraseDelay={500}
          eraseSpeed={500}
        />
      </div>
    </div>
  )
}

export default App
