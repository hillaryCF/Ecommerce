import React from "react"
import Nav from "../../components/nav/nav"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header__background">
        <Nav/>
        <img src="../img/eye.png" alt="" className="header__eye"/>
        <img src="../img/nastra.svg" alt="logo of nastra" className="header__logo" />
      </div>
      <h1 className="header__text">delicious cake never seen before</h1>
    </div>
  )
}
export default Header
