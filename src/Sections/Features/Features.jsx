import { Card } from "../../Components/index"
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
            <h5 className="features-title">Features</h5>
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