import React, { useState } from "react"
import ModalConCern from "./components/ModalConcern"
import styled from "styled-components"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [isSelect, setIsSelect] = useState(false)

  return (
    <div className="App">
      <ModalConCern setIsSelect={setIsSelect} />
    </div>
  )
}

export default App
