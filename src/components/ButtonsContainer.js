import React from 'react';
import '../Styles/pads.css';
import padData from '../Assets/buttonData.js';
const Buttons = (props) =>{
const pad1 = padData.names.map((item, i) => <button id={padData.key[i]} key={i} className="drum-pad">{padData.names[i]}<span className="hotKey">{padData.key[i]}</span></button>)
   return(
      <div className="padGroups">
         {pad1}
      </div>
      
   )
}
const ButtonsContainer = (props) => {
   return(
      <div className="padContainer">
         <Buttons hotkey={props.hotkey}/>
      </div>
   )
}
export default ButtonsContainer;