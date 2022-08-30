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
                    <span className="contact-title">Contact Support</span>
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
                <h5 className="text-title">We are here for you!</h5>
                <p className="text-subtitle">Nulla quis lorem ut libero malesuada feugiat.<br />{""}
                        Sed porttitor lectus nibh. Vivamus magna justo, lacinia<br />{""}
                        eget consectetur sed, convallis at tellus.<br /><br />{""}

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />{""}
                        Curabitur non nulla sit amet nisl tempus convallis quis<br />{""}
                        clectus. Vivamus suscipit tortor eget felis porttitor volutpat.
                    </p>
                <div className="mission-btn">
                <button>
                        <img src={Playstore} alt="" />
                        <h6 className="button-text">Get it on<br /> <span>Playstore</span></h6>
                    </button>
                    <button>
                        <img src={Appstore} alt="" />
                        <h6 className="button-text">Download on the<br /> <span>Applestore</span></h6>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact