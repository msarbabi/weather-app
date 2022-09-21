import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <span>آب و هوا °</span>
      <span><img src={require("../../assets/images/logo.png")} width="100" height="100" alt="لوگو"/></span>
    </div>
  )
}

export default React.memo(Header);