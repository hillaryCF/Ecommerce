import React from "react"
import Nav from "../../components/nav/nav"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header__background">
        <Nav/>
        <div className="header__text">
          <h1 className="header__title">new <span className="header__title-size">nastra</span> styles</h1>
        </div>
        <img src="../img/arrowHead.svg" className="header__arrow"/>
      </div>
    </div>
  )
}
export default Header
