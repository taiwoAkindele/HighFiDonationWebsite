import { Typography } from "@mui/material"

//styles
import "./Navbar.css"

import menu from "../../assets/menu.png"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <div className="navbar">
      <div className="logo">
        <Typography variant="span" sx={{ fontWeight: 800, fontSize: "1.5rem", lineHeight: "1.875rem", }}>DonationApp</Typography>
      </div>
        <div className={open ? "links" : "mobileLinks"}>
          <ul>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Features</a></li>
          </ul>
            <button className="nav-btn">Get Started</button>
        </div>
      <div className="menu" onClick={handleClick}>
        <img src={menu} alt="" />
      </div>
    </div>
  )
}

export default Navbar