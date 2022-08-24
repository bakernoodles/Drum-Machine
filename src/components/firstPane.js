import React from 'react';
import '../Styles/App.css';
import logoPng from '../Assets/logo.png';
import logoOff from '../Assets/logoOff.png';
import onPng from '../Assets/on.png';
import offPng from '../Assets/off.png'
import show from '../Assets/show.png';

const LeftPane = (props) => {

   // Toggle the device ON/OFF. Used by the power button image when clicked.
   const power = () => {
      if(props.power === true) 
         props.setPower(false);
      else props.setPower(true);
         props.setBank(0)
   }

   // Shows all hot keys on the pads.
   const showChars = () => {
      
      if(props.showKeys) 
         props.setShowKeys(false);
      else 
         props.setShowKeys(true);
   }
   // switches the sound bank (A or B)
   function switchBank(){
      let bankBtn = document.getElementById('bankButton');
      if(!props.bank){
         bankBtn.innerHTML = 'B';
         bankBtn.classList.add('moveButton');
         props.setBank(1);
      }
      else {
         bankBtn.innerHTML = 'A';
         bankBtn.classList.remove('moveButton');
         props.setBank(0);
      }
   }

   // If the power is off, render a limited UI. 
   if(!props.power){
      return(
         <div className="leftPane">
            <div className='title'>
               <img tabIndex= '1' src={logoOff} alt="DrumDoid logo" className="logo" />
            </div>
            <div id="optionsBar">
               <img src={offPng} alt="power button" className="onBtn" onClick={power}/>
            </div>
         </div>
      )
   }
   /* Else, must be on. Render UI */

   return(
      <div className="leftPane">
         <div className='title'>
            <img tabIndex={1} src={logoPng} alt="DrumDoid logo" className="logo" />
         </div>
         <div id="optionsBar">
            <img tabIndex={2} src={onPng} alt="power button" className="onBtn" onClick={power}/>
            <img tabIndex={3} src={show} alt='show keys button' className='showKeys' onClick={showChars}></img>
            <div className="bankContainer">
               <h5 tabIndex={4} className="bankTxt" alt='Bank text'>BANK</h5>
               <div className ='bankBtnSlot'>
                  <button tabIndex={5} alt='Bank button' id='bankButton' className='bankButton' onClick={switchBank}>A</button>
               </div>
            </div>
         </div>
      </div>
   );
   
}

export default LeftPane;