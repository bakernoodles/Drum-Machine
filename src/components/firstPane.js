import React from 'react';
import '../Styles/App.scss';
import logoPng from '../Assets/logo.png';
import onPng from '../Assets/on.png';
import show from '../Assets/show.png';
const LeftPane = () => {
   return(
      <div className="leftPane">
         <div className='title'>
            <img src={logoPng} alt="Dr. Machine logo" className="logo"/>
         </div>
         <div id="optionsBar">
            <img src={onPng} alt="power button" className="onBtn"/>
            <img src={show} alt='show keys button' className='showKeys'></img>
            <div className="bankContainer">
               <h5 className="bankTxt">Bank</h5>
               <button></button>
            </div>
            
         </div>
         
         
      </div>
   );
}

export default LeftPane;