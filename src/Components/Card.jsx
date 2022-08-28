import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    image: {
        width: "100px",
        height: "100px",
        objectFit: "contain"
    }
})

const Card = ({ className, title, image, text }) => {
    const classes = useStyles()
  return (
    <div className={className}>
        <img className={classes.image} src={image} alt="" />
        <Typography variant="h6" sx={{
          fontFamily: "Mulish",
          fontWeight: 700,
          fontSize: "1.5rem",
          lineHeight: "1.8rem",
          color: "#000000",
          "@media screen and (max-width:375px)": {
            fontSize: "1.1rem",
          }
          }}>{title}</Typography>
        <Typography variant="subtitle1" sx={{
          fontFamily: "Mulish",
          fontWeight: 400,
          fontSize: "1.1rem",
          lineHeight: "1.4rem",
          color: "#000000",
          "@media screen and (max-width:375px)": {
            fontSize: "0.75rem",
          lineHeight: "0.9rem",
          }
          }}>{text}</Typography>
    </div>
  )
}

export default Card