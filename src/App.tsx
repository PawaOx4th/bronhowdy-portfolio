import React, { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className=" w-full min-h-screen bg-black flex justify-center items-center flex-col text-white">
        <p className=" font-octane text-4xl sm:text-5xl">entry test</p>
        <p className=" font-octane text-6xl sm:text-8xl">ARE YOU SLIM?</p>
        <div>
          <button>YES</button>
          <button>NO</button>
        </div>
      </div>
    </div>
  )
}

export default App
