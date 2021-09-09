import React, { HTMLAttributes, ReactElement, useState } from "react"
import styled from "styled-components"

export interface IModalConcern {
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>
}

function modalConcern({ setIsSelect }: IModalConcern) {
  const handleIsSelect = (name: string) => {
    if (name === "no") {
      setIsSelect(true)
    } else {
      setIsSelect(false)
    }
  }

  return (
    <div className=" w-full min-h-screen bg-black flex justify-center items-center flex-col text-white overflow-hidden">
      <p className=" font-octane text-4xl sm:text-5xl">entry test</p>
      <p className=" font-octane text-6xl sm:text-8xl">ARE YOU SLIM?</p>
      <div className=" w-2/4 sm:w-80 flex justify-between mt-6">
        <ButtonYes
          className="font-octane font-medium"
          name="yes"
          onClick={(e) => {
            const target = e.target as HTMLButtonElement
            handleIsSelect(target.name)
          }}>
          YES
        </ButtonYes>
        <ButtonNo
          className="font-octane font-medium"
          name="no"
          onClick={(e) => {
            const target = e.target as HTMLButtonElement
            handleIsSelect(target.name)
          }}>
          NO
        </ButtonNo>
      </div>
    </div>
  )
}

const ButtonYes = styled.button`
  border-bottom: 2px solid #fff;
  font-size: 2rem;
`

const ButtonNo = styled.button`
  font-size: 2rem;
`

export default modalConcern
