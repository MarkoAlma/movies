import React from 'react'
import { img_500 } from '../../utils'
import { useState } from 'react';
import { Button } from 'reactstrap';
import { MyModal } from './MyModal';

const MyCard = ({id, type, poster_path, title, overview, vote_count, vote_average}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const colors = [
    '#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ffcc00',
    '#ffff00', '#ccff00', '#99ff00', '#66cc00', '#33cc33'
  ];

  return (
  <>
    <div className="product-card" style={{cursor:'pointer', backgroundColor:'rgb(242,242,242)'}}>
  <div className="product-tilt-effect static-part">
    <div className="product-image">
      <img src={img_500+poster_path} alt=""/>
    </div>
  </div>
  <div className="product-info hover-part" style={{display:'flex', flexDirection:'column', justifyContent:'space-between', paddingTop:'15px'}}>
    <h2 className="product-title">{title}</h2>
    <div className="product-description">
      <p>{overview}</p>
    </div>
    <div className="product-features">
      <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        <span className="feature">Water Resistant</span>
        <span className="feature">5-Year Warranty</span>
        <span className="feature">Swiss Made</span>
      </div>
    <MyModal type={type} id={id}/>
    </div>
    

    <div className="product-meta static-part" style={{}}>
      <div className="product-rating" style={{display:'flex', justifyContent:'space-between', width:'100%', color:'black'}}>
        <span className="rating-count">{vote_count} Reviews</span>
        <p style={{backgroundColor: vote_average>1 ? colors[Math.round(vote_average)-1] : colors[0], fontWeight:'bold', borderRadius:'50%', height:'50px', width:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>{Math.round(vote_average*10)/10}</p>
      </div>
      
    </div>
  </div>
</div>


</>
  )
}
export default MyCard