import { Typography } from "@mui/material"
import { useState } from "react"

//images
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"

//styles
import "./Footer.css"

const Footer = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            alert("Congratulations! You are subscribed to our Monthly Newsletter.")
        } catch (err) { }
    }

    return (
        <div className="footer">
            <div className="downloadApp">
                <Typography variant="h6" sx={{
                    fontFamily: "Mulish",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    lineHeight: "1.8rem",
                    color: "#FFFFFF",
                    "@media screen and (max-width:375px)": {
                        fontSize: "1.1rem",
                    }
                }}>DownloadApp</Typography>
                <div className="social-media">
                    <a href="#"><img src={facebook} alt="" /></a>
                    <a href="#"><img src={instagram} alt="" /></a>
                    <a href="#"><img src={twitter} alt="" /></a>
                </div>
                <Typography variant="subtitle1" sx={{
                    fontFamily: "Mulish",
                    fontWeight: 400,
                    fontSize: "1.1rem",
                    lineHeight: "1.4rem",
                    color: "#FFFFFF",
                    "@media screen and (max-width:375px)": {
                        fontSize: "0.75rem",
                    }
                }}>Copyright Donation App 2020</Typography>
            </div>

            <div className="footer-links">
                <div className="support">
                    <Typography variant="subtitle1" sx={{
                        fontFamily: "Mulish",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        lineHeight: "1.4rem",
                        color: "#FFFFFF",
                        "@media screen and (max-width:375px)": {
                            fontSize: "0.75rem",
                        }
                    }}>Support</Typography>
                    <ul>
                        <li><a href="#">Campaign</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="company">
                    <Typography variant="subtitle1" sx={{
                        fontFamily: "Mulish",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        lineHeight: "1.4rem",
                        color: "#FFFFFF",
                        "@media screen and (max-width:375px)": {
                            fontSize: "0.75rem",
                        }
                    }}>Company</Typography>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Contact Support</a></li>
                    </ul>
                </div>
            </div>
            <div className="subscribe">
                <Typography variant="h6" sx={{
                    paddingBottom: "2rem",
                    fontFamily: "Mulish",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    lineHeight: "1.8rem",
                    textAlign: "center",
                    color: "#FFFFFF",
                    "@media screen and (max-width:375px)": {
                        fontSize: "0.8rem"
                    }
                }}>
                    Need updates on campaigns? <br />{""}
                    Send us your mail
                </Typography>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    <button className="subscribe-btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Footer