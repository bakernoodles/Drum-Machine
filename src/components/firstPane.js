import React from 'react';
import '../Styles/App.scss'
import logoPng from '../Assets/logo.png';
const LeftPane = () => {
   return(
      <div className="leftPane">
         <div className='title'>
            <img src={logoPng} alt="Dr. Machine logo" className="logo"></img>
         </div>
      </div>
   );
}

export default LeftPane;