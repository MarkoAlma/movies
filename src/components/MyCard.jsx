import React, { useState, useContext } from 'react'
import { img_500 } from '../../utils'
import { MyModal } from './MyModal'
import { CategContext } from '../context/CategContext'

const MyCard = ({ id, type, genre_ids, poster_path, title, overview, vote_count, vote_average }) => {
  const [modal, setModal] = useState(false)
  const [hovered, setHovered] = useState(false)  // <-- itt

  const toggle = () => setModal(!modal)

  const { genreMovie, genreTV } = useContext(CategContext)
  const kategFordito = type === 'movie' ? genreMovie : genreTV

  let vegleges = []
  kategFordito &&
    genre_ids.forEach(obj => {
      kategFordito.genres.forEach(obj2 => {
        if (obj2.id === obj) {
          vegleges.push(obj2.name)
        }
      })
    })

  const colors = [
    '#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ffcc00',
    '#ffff00', '#ccff00', '#99ff00', '#66cc00', '#33cc33',
  ]

  const handleHoverIn = () => setHovered(true)   // <-- itt
  const handleHoverOut = () => setHovered(false) // <-- itt

  return (
  <div
    className={`dobozka${hovered ? ' nyitva' : ''}`}
    style={{ cursor: 'pointer', backgroundColor: 'rgb(242,242,242)' }}
    onMouseEnter={handleHoverIn}
    onMouseLeave={handleHoverOut}
  >
    <div className="product-tilt-effect static-part">
      <div className="product-image">
        <img src={img_500 + poster_path} alt="" />
      </div>
    </div>

    <div
      className="product-info hover-part"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '15px' }}
    >
      <h2 className="product-title">{title}</h2>

      {/* Ezeket kapja meg a nyilik osztályt, mert ezeket akarjuk animálni */}
      <div className="product-description nyilik">
        <p>{overview}</p>
      </div>
      <div className="product-features nyilik">
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {vegleges.slice(0, 3).map((obj, index) => (
            <span key={'id' + index} className="feature">
              {obj}
            </span>
          ))}
        </div>
        <MyModal type={type} id={id} />
        
      </div>
        <div className="product-rating" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'black' }}>
          <span className="rating-count">{vote_count} Reviews</span>
          <p
            style={{
              backgroundColor: vote_average > 1 ? colors[Math.round(vote_average) - 1] : colors[0],
              fontWeight: 'bold',
              borderRadius: '50%',
              height: '50px',
              width: '50px',
              boxShadow: '1px 1px 5px 2px lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {Math.round(vote_average * 10) / 10}
          </p>
        </div>
    </div>
  </div>
)

}

export default MyCard
