import React, {useEffect, useState} from 'react';
import '../Styles/App.scss';
import logoPng from '../Assets/logo.png';
import logoOff from '../Assets/logoOff.png';
import onPng from '../Assets/on.png';
import offPng from '../Assets/off.png'
import show from '../Assets/show.png';
const LeftPane = (props) => {
   //Function that toggles the device ON/OFF. Used by the power button image when clicked.
   const power = () => {
      if(props.power === 'on') props.setPower('off');
      else props.setPower('on');
   }
   const showChars = () => {
      if(props.showKeys) props.setShowKeys(false);
      else props.setShowKeys(true);
   }
   // if the power button is switched off, return a limited UI
   if(props.power === 'off'){
      return(
         <div className="leftPane">
         <div className='title'>
            <img src={logoOff} alt="Dr. Machine logo" className="logo" />
         </div>
         <div id="optionsBar">
            <img src={offPng} alt="power button" className="onBtn" onClick={power}/>
         </div>
      </div>
      )
   }
   // If powered on, show full UI
   return(
      <div className="leftPane">
         <div className='title'>
            <img src={logoPng} alt="Dr. Machine logo" className="logo" />
         </div>
         <div id="optionsBar">
            <img src={onPng} alt="power button" className="onBtn" onClick={power}/>
            <img src={show} alt='show keys button' className='showKeys' onClick={showChars}></img>
            <div className="bankContainer">
               <h5 className="bankTxt">Bank</h5>
               <button></button>
            </div>
         </div>
      </div>
   );
   
}

export default LeftPane;