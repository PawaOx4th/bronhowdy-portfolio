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
      <div className="bg-black w-full min-h-screen">
        <img src={Gift} alt="" />
        <ReactTypingEffect text={["Pawanachai", "Kaen"]} />
      </div>
    </div>
  )
}

export default App
