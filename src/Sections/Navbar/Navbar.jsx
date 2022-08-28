import { Typography } from "@mui/material"

//styles
import "./Navbar.css"

import menu from "../../assets/menu.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Typography variant="span" sx={{fontWeight: 800,fontSize: "1.5rem",lineHeight: "1.875rem",}}>DonationApp</Typography>
      </div>
      <div className="links">
        <ul>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a>Features</a></li>
        </ul>
      </div>
      <div>
        <button className="nav-btn">Get Started</button>
      </div>
      <div className="menu">
        <img src={menu} alt="" />
      </div>
    </div>
  )
}

export default Navbar