import React, { ReactElement } from "react"
import {
  Facebook,
  Behance,
  Instagram,
  Linkedin,
} from "@icons-pack/react-simple-icons"
import BronHowdyLogo from "../../assets/img/bronhowdyLogo.svg"

interface Props {}

function Footer(): ReactElement {
  return (
    <footer className={` pt-11 pb-7 px-9`}>
      <div className={`flex flex-col items-center`}>
        <p className={` uppercase text-2xl font-light`}>
          Keereetharn@gmail.com
        </p>
        <div className={"flex gap-4 mt-7"}>
          <a href="https://www.facebook.com/Bronhowdy" target="_blank">
            <Facebook />
          </a>

          <a
            href="https://www.behance.net/Bronhowdy?tracking_source=search_projects_recommended%7Cbronhowdy"
            target="_blank">
            <Behance />
          </a>

          <a href="https://www.instagram.com/Bronhowdy/" target="_blank">
            <Instagram />
          </a>

          <a
            href="https://www.linkedin.com/in/keereetharn-siriwech-569990181/"
            target="_blank">
            <Linkedin />
          </a>
        </div>
      </div>
      <div
        className={` mt-14 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between lg:px-14 lg:pb-20`}>
        <img src={BronHowdyLogo} alt="" className={`w-16 h-auto`} />
        <p className={`pt-7 lg:pt-0 text-sm`}>&#169; 2021 / Bronhowdy.co</p>
        <button
          className={`text-xl hidden lg:block`}
          onClick={(e) => {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}>
          BACK TO TOP
        </button>
      </div>
    </footer>
  )
}

export default Footer
