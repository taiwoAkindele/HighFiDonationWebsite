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
                    <h5 className="mission-title">Got a mission?</h5>
                    <p className="mission-text">Nulla quis lorem ut libero malesuada feugiat.<br />{""}
                        Sed porttitor lectus nibh. Vivamus magna justo, lacinia<br />{""}
                        eget consectetur sed, convallis at tellus.<br /><br />{""}

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />{""}
                        Curabitur non nulla sit amet nisl tempus convallis quis<br />{""}
                        clectus. Vivamus suscipit tortor eget felis porttitor volutpat.
                    </p>
                </div>
                <div className="mission-btn">
                    <button>
                        <img src={Playstore} alt="" />
                        <p className="btn-text" sx={{ 
                            fontFamily: "Mulish", 
                            textAlign: "justify", 
                            lineHeight: "18px",
                            "@media screen and (max-width: 375px)": {
                                fontSize: "0.75rem",
                                lineHeight: "0.9rem",
                            } 
                            }}>Get it on<br /> <span>Playstore</span></p>
                    </button>
                    <button>
                        <img src={Appstore} alt="" />
                        <p className="btn-text" sx={{ 
                            fontFamily: "Mulish", 
                            textAlign: "justify", 
                            lineHeight: "18px",
                            "@media screen and (max-width: 375px)": {
                                fontSize: "0.75rem",
                                lineHeight: "0.9rem",
                            } 
                             }}>Download on the<br /> <span>Applestore</span></p>
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