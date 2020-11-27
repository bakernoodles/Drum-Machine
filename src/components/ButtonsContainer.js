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
            {props.showKeys ? 
               <span className="hotKey"> {padData.key[i]} </span> : 
               <span className="hotKey"> </span> 
            }
            
         </button>
   });
    
   return(
      <div className="padGroups">
         {pads}
      </div>
      
   )
}
const ButtonsContainer = (props) => {
   return(
      <div className="padContainer">
         <Buttons showKeys={props.showKeys}/>
      </div>
   )
}
export default ButtonsContainer;