import { Typography } from "@mui/material"
import { useState } from "react"

import Playstore from "../../assets/google-playstore-white.png"
import Appstore from "../../assets/app-store.png"
import polygon from "../../assets/Polygon2.png"

//styles
import "./Contact.css"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [complaint, setComplaint] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = { name, email, complaint }

        try {
            const res = await fetch("https://formsubmit.co/1d1ca5c4b454dba5b7eb7e2d59cb6479", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.message)
            }
            return data
            setEmail("")
            setName("")
            setComplaint("")
        } catch (err) {
            return err.message
        }

    }
    return (
        <div className="contact">
            <div className="formWrapper">
                <div className="contactSupport">
                    <Typography variant="h5" sx={{
                        fontFamily: "Mulish",
                        fontWeight: 700,
                        fontSize: "2.2rem",
                        lineHeight: "2.8rem",
                        textAlign: "center",
                        color: "#24A086",
                        "@media screen and (max-width:375px)": {
                            fontSize: "1.5rem",
                        }
                    }}>Contact Support</Typography>
                </div>
                <img className="ellipse" src={polygon} alt="" />
                <form className="form" onSubmit={handleSubmit} action="">
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="input">
                        <label>Full Name</label>
                        <input type="text" name="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input">
                        <label>Email</label>
                        <input type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <label>Complaint</label>
                        <textarea name="complaint" value={complaint} onChange={(e) => setComplaint(e.target.value)} cols="30" rows="10"></textarea>
                    </div>
                    <button className="submit-btn" type="submit">Send</button>
                </form>
            </div>
            <div className="contact-text">
                <Typography variant="h5" sx={{ 
                    paddingBottom: "4rem", 
                    fontFamily: "Mulish", 
                    fontWeight: 700, 
                    fontSize: "2.2rem", 
                    lineHeight: "2.8rem", 
                    color: "#000000",
                    "@media screen and (max-width:375px)": {
                        paddingBottom: "1rem",
                        fontSize: "1.1rem",
                        textAlign: "center",
                    }
                     }}>We are here for you!</Typography>
                <Typography variant="p" sx={{ 
                        paddingBottom: "1.5rem", 
                        fontFamily: "Mulish", 
                        fontWeight: 400, 
                        fontSize: "1.1rem", 
                        lineHeight: "1.4rem", 
                        color: "#000000",
                        "@media screen and (max-width: 375px)": {
                        fontSize: "0.75rem", 
                        lineHeight: "0.9rem", 
                        textAlign: "center",
                        }
                         }}>Nulla quis lorem ut libero malesuada feugiat.<br />{""}
                        Sed porttitor lectus nibh. Vivamus magna justo, lacinia<br />{""}
                        eget consectetur sed, convallis at tellus.<br /><br />{""}

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />{""}
                        Curabitur non nulla sit amet nisl tempus convallis quis<br />{""}
                        clectus. Vivamus suscipit tortor eget felis porttitor volutpat.
                    </Typography>
                <div className="mission-btn">
                <button>
                        <img src={Playstore} alt="" />
                        <Typography sx={{ 
                            fontFamily: "Mulish", 
                            textAlign: "justify", 
                            lineHeight: "18px",
                            "@media screen and (max-width: 375px)": {
                                fontSize: "0.75rem",
                                lineHeight: "0.9rem",
                            } 
                            }}>Get it on<br /> <span>Playstore</span></Typography>
                    </button>
                    <button>
                        <img src={Appstore} alt="" />
                        <Typography sx={{ 
                            fontFamily: "Mulish", 
                            textAlign: "justify", 
                            lineHeight: "18px",
                            "@media screen and (max-width: 375px)": {
                                fontSize: "0.75rem",
                                lineHeight: "0.9rem",
                            } 
                             }}>Download on the<br /> <span>Applestore</span></Typography>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact