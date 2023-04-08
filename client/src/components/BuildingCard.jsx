// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../styles/buildingcards.css';
// const BuildingCard = () => {
//   return (
//     <>
// <div className="card mb-2 buildingcard" style={{}}>
//   <img src="" className="card-img-top " alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <Link to="#" className="btn btn-primary">Go somewhere</Link>
//   </div>
// </div>
//     </>
//   );
// }

// export default BuildingCard

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BuildingCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require("../images/assets/img/bg-mobile.jpg")}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
