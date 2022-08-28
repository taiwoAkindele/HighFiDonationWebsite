//images
import arrowLeft from "../../assets/arrowLeft.png"
import arrowRight from "../../assets/arrowRight.png"
import Playstore from "../../assets/google-playstore.png"
import Appstore from "../../assets/app-store.png"
//styles
import "./Hero.css"

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="heroTitle">
        <div className="arrow">
          <img src={arrowRight} alt="" />
        </div>
        <h5 className="heading">Donate to a campaign <br />{''}&amp; Get your campaign <br />{''}
          funded!
        </h5>
        <div className="arrow">
          <img src={arrowLeft} alt="" />
        </div>
      </div>
      <div className="heroContent">
        <h6 className="subtitle">
          To get a campaign started, simply download <br />{''}
          the app below.
        </h6>

        <div className="hero-btn">
          <button>
            <img src={Playstore} alt="" />
            <p className="hero-btn-text">Get it on <br /> <span>Playstore</span></p>
          </button>
          <button>
            <img src={Appstore} alt="" />
            <p className="hero-btn-text">Download on the <br /> <span>Applestore</span></p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero