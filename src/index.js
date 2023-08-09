import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
// import './index.css';
// import App from './App';

function Test(){
const [movieRating,setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} messages={['Terrible','Bad','Okay','Good','Amazing']}/>
    <StarRating size={24} color='red' className='test'/>
    <StarRating size={48} color='blue' defaultRating={3}/>
    <StarRating size={24} color='violet'/>
    <Test/>
    {/* <App /> */}
  </React.StrictMode>
);

