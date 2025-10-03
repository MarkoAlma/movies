import React from 'react'
import { img_500 } from '../../utils'

const MyCard = ({backdrop_path, title, overview, vote_count, vote_average}) => {
  return (
    <div class="product-card" style={{cursor:'pointer'}}>
  <div class="product-badgea"></div>
  <div class="product-tilt-effect">
    <div class="product-image">
      <img src={img_500+backdrop_path} alt=""/>
    </div>
  </div>
  <div class="product-info" style={{minHeight:'354px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <h2 class="product-title">{title}</h2>
    <div class="product-description">
      <p>{overview}</p>
    </div>
    <div class="product-features">
      <span class="feature">Water Resistant</span>
      <span class="feature">5-Year Warranty</span>
      <span class="feature">Swiss Made</span>
    </div>
    <div class="product-bottom">

    </div>
    <div class="product-meta" style={{}}>
      <div class="product-rating" style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        <span class="rating-count">{vote_count} Reviews</span>
        <p style={{backgroundColor:'green', fontWeight:'bold', borderRadius:'50%', height:'50px', width:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>{Math.round(vote_average*10)/10}</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default MyCard
