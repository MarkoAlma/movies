import React from 'react'
import { img_500 } from '../../utils'

const MyCard = ({poster_path, title, overview, vote_count, vote_average}) => {
  return (
  <>
    <div className="product-card" style={{cursor:'pointer'}}>
  <div className="product-badgea"></div>
  <div className="product-tilt-effect">
    <div className="product-image">
      <img src={img_500+poster_path} alt=""/>
    </div>
  </div>
  <div className="product-info" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <h2 className="product-title">{title}</h2>
    <div className="product-description">
      <p>{overview}</p>
    </div>
    <div className="product-features">
      <span className="feature">Water Resistant</span>
      <span className="feature">5-Year Warranty</span>
      <span className="feature">Swiss Made</span>
    </div>
    <div className="product-bottom">

    </div>
    <div className="product-meta" style={{}}>
      <div className="product-rating" style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        <span className="rating-count">{vote_count} Reviews</span>
        <p style={{backgroundColor:'green', fontWeight:'bold', borderRadius:'50%', height:'50px', width:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>{Math.round(vote_average*10)/10}</p>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default MyCard
