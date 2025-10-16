import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getDetailsData, img_500 } from '../../utils';
import { useQuery } from 'react-query';
import { MyCarousel } from './MyCarousel';
import { ShowTrailer } from './ShowTrailer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const MyModal = ({id, type}) => {

  const urlDetails=`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const {data, isLoading, isError} = useQuery({queryKey:['details', urlDetails], queryFn:getDetailsData}) 

  data && console.log(data);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{border:'0', minWidth:'100%'}}>

      <Button className='product-button' style={{minWidth:'100%'}} onClick={handleOpen}>Show more</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {data && <b> {type=='movie' ? data.title: data.name}</b>}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {data && <img className='img-fluid' style={{height:'100%', width:'100%'}} src={img_500+data.poster_path} alt="" />}
            </Typography>
            <MyCarousel type={type} id={id}/>
            <ShowTrailer type={type} id={id}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}