import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { getDetailsData, img_300, no_image } from "../../utils";

export const MyCarousel = ({type, id}) => {

const urlCredits=`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
const {data, isLoading, isError} = useQuery({queryKey:['details', urlCredits], queryFn:getDetailsData}) 
data && console.log(data);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Slider {...settings} style={{width:'100%'}}>
      {data && data.cast.map(obj => 
        <div key={obj.id} style={{display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
          <img style={{width:'60px', margin:'auto'}} src={obj.profile_path ? img_300+obj.profile_path : no_image} alt={obj?.name} />
          <b style={{textAlign:'center', width:'100%'}}>{obj?.name}</b>
          
        </div>
      )}
    </Slider>
  );
}