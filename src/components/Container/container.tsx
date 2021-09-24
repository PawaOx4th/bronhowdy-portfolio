import React from "react"

interface IContainer {
  children: React.ReactChild
}

function Container({ children }: IContainer) {
  return (
    <div className={`px-8 sm:px-24 xl:px-28 py-9 sm:py-10 xl:py-28`}>
      {children}
    </div>
  )
}

export default Container
