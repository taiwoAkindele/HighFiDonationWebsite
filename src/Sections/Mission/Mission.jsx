import { Typography } from "@mui/material"

//images
import Hands from "../../assets/stacking-hands.png"
import Walking from "../../assets/walking.png"
import Playstore from "../../assets/google-playstore-white.png"
import Appstore from "../../assets/app-store.png"

//styles
import "./Mission.css"

const Mission = () => {
    return (
        <div className="mission">
            <div className="right">
                <div className="missionText">
                    <Typography variant="h5" sx={{ 
                        paddingBottom: "1.5rem", 
                        fontFamily: "Mulish", 
                        fontWeight: 700, 
                        fontSize: "2.2rem", 
                        lineHeight: "2.8rem", 
                        color: "#000000",
                        "@media screen and (max-width: 375px)": {
                            fontSize: "1.5rem", 
                            textAlign: "center",
                        }
                         }}>Got a mission?</Typography>
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
                </div>
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
            <div className="left">
                <div className="hands-img">
                    <img className="hands" src={Hands} alt="" />
                </div>
                <div className="walking-img">
                    <img className="walking" src={Walking} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Mission