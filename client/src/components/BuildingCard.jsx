import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/buildingcards.css';
const BuildingCard = () => {
  return (
    <>
<div className="card mb-2 buildingcard" style={{}}>
  <img src="" className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </>
  );
}

export default BuildingCard
