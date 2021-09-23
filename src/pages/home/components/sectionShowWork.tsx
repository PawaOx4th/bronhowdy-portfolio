import React from "react"
import Container from "../../../components/Container"
import SampleImageContent from "../../../../public/Images/sample-bg-content.png"

function SectionShowWork() {
  return (
    <Container>
      <section
        className={`flex flex-col lg:flex-row lg:gap-9 items-start sticky w-full h-auto`}>
        <div className={`flex flex-col items-start lg:w-4/12 `}>
          <h4 className={`text-sm lg:text-base font-normal`}>
            Website Design Concept
          </h4>
          <h2 className={`text-2xl lg:text-3xl font-light`}>
            New Work Coming Soon
          </h2>
        </div>

        <div className={`mt-8 w-full h-72 lg:w-8/12 lg:h-469`}>
          <img
            src={SampleImageContent}
            loading="lazy"
            alt=""
            className={` w-full h-full object-cover`}
          />
        </div>
      </section>
    </Container>
  )
}

export default SectionShowWork
