import React from "react"

interface IContainer {
  children: React.ReactChild
}

function Container({ children }: IContainer) {
  return <div className={`px-8 lg:px-28 py-9 lg:py-28`}>{children}</div>
}

export default Container
