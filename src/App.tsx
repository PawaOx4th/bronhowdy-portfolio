import React, { useEffect, useState } from "react"
import ModalConCern from "./components/ModalConcern"
import styled from "styled-components"
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
    </div>
  )
}

export default App
