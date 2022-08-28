import { Typography } from "@mui/material"

//images
import Community from "../assets/community.png"
import LoveandHealth from "../assets/loveandhealth.png"
import polygon from "../assets/Polygon.png"

//styles
import "./TextBox.css"

const TextBox = () => {
  return (
      <div className="boxes">
        <div className="box-right">
          <div className="boxImage">
            <img src={Community} alt="" />
          </div>
          <div className="boxText">
            <h5 className="boxTitle">Strong Community</h5>
            <p className="boxParagraph">Pellentesque in ipsum id orci porta dapibus.<br />{''}
              Vivamus magna justo, lacinia eget consectetur<br />{''}
              sed, convallis at tellus. Pellentesque in ipsum id<br />{''}
              orci porta dapibus.</p>
          </div>
        </div>
        <div className="polygon">
          <img src={polygon} alt="" />
        </div>
        <div className="box-left">
          <div className="boxImage">
            <img src={LoveandHealth} alt="" />
          </div>
          <div className="boxText">
            <h5 className="boxTitle">Love and Safety</h5>
            <p className="boxParagraph">Pellentesque in ipsum id orci porta dapibus.<br />{''}
              Vivamus magna justo, lacinia eget consectetur<br />{''}
              sed, convallis at tellus. Pellentesque in ipsum id<br />{''}
              orci porta dapibus.</p>
          </div>
        </div>
      </div>
  )
}

export default TextBox