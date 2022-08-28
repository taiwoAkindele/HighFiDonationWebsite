import { Typography } from "@mui/material"
import { Card, TextBox } from "../../Components"
import { campaignText } from "../../Data/ExampleText"

//styles
import "./Campaign.css"

const Campaign = () => {
  return (
    <>
    <div className="textBox">
    <TextBox />

    </div>
    <div className="campaign">
        <Typography variant="h5" sx={{
          padding: "4rem 0",
          fontFamily: "Mulish",
          fontWeight: 800,
          fontSize: "2.2rem",
          lineHeight: "2.8rem",
          textAlign: "center",
          color: "#449183",
          "@media screen and (max-width:375px)": {
          padding: "5rem 4rem",
          fontSize: "1.5rem",
          lineHeight: "1.8rem",
          }
        }}>What can you set a campaign for?</Typography>
        <div className="campaignBoxes">
            {campaignText.map((box) => (
              <Card className="campaign-card" image={box.image} title={box.title} text={box.text} />
              ))}
        </div>
    </div>
              </>
  )
}

export default Campaign