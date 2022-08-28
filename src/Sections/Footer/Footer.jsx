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
                <h6 className="footer-title">DownloadApp</h6>
                <div className="social-media">
                    <a href="#"><img src={facebook} alt="" /></a>
                    <a href="#"><img src={instagram} alt="" /></a>
                    <a href="#"><img src={twitter} alt="" /></a>
                </div>
                <p className="copyright">Copyright Donation App 2020</p>
            </div>

            <div className="footer-links">
                <div className="support">
                    <p className="support-title">Support</p>
                    <ul>
                        <li><a href="#">Campaign</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="company">
                    <p className="company-title">Company</p>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Contact Support</a></li>
                    </ul>
                </div>
            </div>
            <div className="subscribe">
                <h6 className="subscribe-text">
                    Need updates on campaigns? <br />{""}
                    Send us your mail
                </h6>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    <button className="subscribe-btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Footer