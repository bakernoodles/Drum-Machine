import React from 'react';
import '../Styles/pads.css';
import padData from '../Assets/buttonData.js';

const Buttons = (props) =>{
   const pads = padData.names.map((item, i) => {
      return <button 
         id={padData.key[i]} 
         key={i}
         className="drum-pad">
            {padData.names[i]}
            <span className="hotKey"> {padData.key[i]} </span>
         </button>
   })
   return(
      <div className="padGroups">
         {pads}
      </div>
      
   )
}
const ButtonsContainer = (props) => {
   return(
      <div className="padContainer">
         <Buttons ShowKeys={props.isShowKeysActive}/>
      </div>
   )
}
export default ButtonsContainer;