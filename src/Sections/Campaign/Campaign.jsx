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
        <h5 className="campaign-title">What can you set a campaign for?</h5>
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