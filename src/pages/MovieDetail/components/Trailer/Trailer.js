import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import './Trailer.css'
import YouTube from 'react-youtube'
const StyledYouTube = styled(YouTube)`
  @media only screen and (max-width: 768px) {
    display:flex;
    justify-content:center;
    width: 50%;
    height:50%;
  }
`;

function Trailer({videoId}) {
  console.log(videoId)
  const values = ['true' ];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [opts,setOpts]=useState({
width:'1700',
height:'715',


playerVars:{
  autoplay:1,
  modestbranding:1
}



  })

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

 
  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)} variant='danger'>
          Watch Trailer
       
        </Button>
      ))}
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header  closeButton>
          <h3>Trailer</h3>
        </Modal.Header>
        <Modal.Body   className='Trailer-screen'>
          
          <StyledYouTube videoId={videoId} opts={opts} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Trailer