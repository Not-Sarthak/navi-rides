import "./Dummy.css"

import { PropertyCardProps } from "interfaces/property";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CallIcon from '@mui/icons-material/Call';
import ReactWhatsapp from './ReactWhatsapp';
    
const Dummy = ({
  id,
  title,
  name,
  date,
  time,
  min,
  number,
  location,
  dropLocation,
  currency,
  price,
  photo,
}: PropertyCardProps) => {
  const url = `tel:${number}`;
  const handleClick = () => {
    window.open(url);
  }
  const url_w = `https://wa.me/${number}?text=Hi`;
  const handleClick_w = () => {
    window.open(url_w);
  }
  return (
    <Card
            component={Link}
            to={`/properties/show/${id}`}
            sx={{
                minWidth: "275px",
                paddingLeft: "10px",
                paddingRight: "10px",
                // padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px #dbdad8",
                },
                cursor: "pointer",
                borderRadius: "10px",
            }}
            elevation={0}
        >
           <CardContent>
      <Box className="cookie-card" style={{border: "1px solid black", width: "24rem"}}>
        <div className="line1">
          <span className="title">{date} | {time}:{min}</span>
          <div className="sub-line1">
            <span className="price" style={{paddingLeft: "1rem", color: "#55ee2e", fontWeight:"bold"}}>{currency} {price}</span>
          </div>
        </div>
        <p className="description">
          From: {location}
          <br/>
          To: {dropLocation}
        </p>
        <div className="line2">
          <p className="car" style={{paddingTop: "4px"}}>
            {title}
            {/* <br />
            {number} */}
          </p>
          <p className="car">
              <div style={{display: "flex"}}>
                <div style={{paddingRight: "1rem", marginTop: "3.5px"}}>
                  {/* <Call number={number} /> */}
                  <button onClick={handleClick} style={{background: "none", cursor: "pointer", color: "#40c451", border: "none"}}><CallIcon /></button>
                </div>
                <div>
                  <button onClick={handleClick_w} style={{background: "none", cursor: "pointer", color: "inherit", border: "none"}}><ReactWhatsapp number={number} /></button>
                </div>
              </div>
          </p>
        </div>
        <hr />
        <div className="line3">
          <img src={photo} alt="img" className="profile"/>
          <p className="name">{name}</p>
        </div>
        </Box>
        </CardContent>
    </Card>
  )
}

export default Dummy
