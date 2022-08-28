import "./Card.css"

const Card = ({ className, title, image, text }) => {
  return (
    <div className={className}>
        <img className="image" src={image} alt="" />
        <h6 className="card-title">{title}</h6>
        <p className="card-subtitle">{text}</p>
    </div>
  )
}

export default Card