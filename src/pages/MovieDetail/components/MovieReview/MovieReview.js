import React,{useState} from 'react';
import './MovieReview.css'

const MovieReview = ({data}) => {
  const [more,setMore]=useState(false)

const MAX_LINES = 4; 
const LINE_HEIGHT = 17; 
const MAX_HEIGHT = MAX_LINES * LINE_HEIGHT; 

const toggleMore=()=>{
  setMore(!more)
}

  return (
    
    <div className='MovieReview'>
   
     <div className='MovieReviewDiv'>
     <h5>{data.author}</h5>
     <p 
     style={{
        maxHeight: more ? 'none' : `${MAX_HEIGHT}px`,
        overflow: 'hidden',
      }}
     >{data.content}</p>
      <p className='moreBtn' onClick={toggleMore}>{more?'hide':'more'}</p>
     </div>
    
    </div>
  );
}

export default MovieReview;
