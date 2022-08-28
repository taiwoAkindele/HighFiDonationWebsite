import { Typography } from "@mui/material"
import Card from "../../Components/Card"
import { aboutUsText } from "../../Data/ExampleText"

//styles
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Typography variant="h5" sx={{
        paddingBottom: "6rem",
        fontFamily: "Mulish",
        fontWeight: 700,
        fontSize: "2.2rem",
        lineHeight: "2.8rem", 
        textAlign: "center",
        color: "#000000",
        "@media screen and (max-width:375px)": {
          fontSize: "1.5rem",
          lineHeight: "1.8rem", 
          padding: "3rem 0rem",
        }
        }}>What people say about us</Typography>
      <div className="aboutUsCards">
        {aboutUsText.map((card) => (
          <Card className="about-card" image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  )
}

export default AboutUs