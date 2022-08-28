import { Card } from "../../Components/index"
import { aboutUsText } from "../../Data/ExampleText"

//styles
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h5 className="aboutUs-title">What people say about us</h5>
      <div className="aboutUsCards">
        {aboutUsText.map((card) => (
          <Card className="about-card" image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  )
}

export default AboutUs