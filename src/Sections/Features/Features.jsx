import { Typography } from "@mui/material"
import Card from "../../Components/Card"
import { featuresText } from "../../Data/ExampleText"

//images
import Phone from "../../assets/phone2.png"

//styles
import "./Features.css"

const Features = () => {
  return (
    <div className="features">
        <img className="phone-img" src={Phone} alt="" />

        <div className="features-text">
            <Typography variant="h5" sx={{paddingBottom: "2rem",fontFamily: "Mulish",fontWeight: 700,fontSize: "2.2rem",lineHeight: "2.8rem",color: "#000000"}}>Features</Typography>
            <div className="fearturesCards">
            {featuresText.map((text) => (
                <Card className="features-card" title={text.title} image={text.image} text={text.text} />
                ))}
                </div>
        </div>
    </div>
  )
}

export default Features