import React, {useEffect} from 'react';
import '../Styles/pads.css';
import {padData, padData2} from '../Assets/buttonData.js';

// Maps data from buttonData.js and creates an array of button elements.
// Each button contains name text on top left, and hotkey text for the bottom right. 

const Buttons = (props) =>{
   // gets the currently selected bank
   let bank = (props.bank ? padData2 : padData ); 
   // Event listeners for when the hotkeys are pressed.
   useEffect(() => {
      // Function to play a sound when a hotkey is pressed.
      const handleKeyPress = (e) => {
         let key = e.key;                                // current key pressed.
         const playtarget = document.getElementById(key) // Targets the audio element with the hotkey id.
         if(bank.hotKeys[key] && props.power){           // If the hotkey exist, and if the device is powered on, play a sound.
            playtarget.currentTime = 0;
            playtarget.play();
            props.setLastPlayed(playtarget.getAttribute('clipname'));

         } 
      }
      // Event listeners. Play the function above when a key is pressed.
      document.addEventListener('keydown', handleKeyPress);
      return () => {
         document.removeEventListener('keydown', handleKeyPress);
      }
   },[bank.hotKeys, props])
   // Power toggle
   // Mute all audio elements when the power is toggled. 
   useEffect(()=> {
      
      if(props.power){
         bank.key.map((el)=>{
            document.getElementById(el).muted = false;
            document.getElementById('display').innerText = props.lastPlayed;
            return null;
         });
      } else {
         bank.key.map((el)=>{
            document.getElementById(el).muted = true;
            document.getElementById('display').innerText = '';
            return null;
         })
      }
   },[props.power, bank, props.lastPlayed])

  
   //---------------------- Pads ---------------------------------

   // Pads are mapped and saved in a variable. Returns JSX
   const pads = bank.names.map((item, i) => {
      // Plays sound. Used for onClick
      let playSound = (i) =>{
         const playtarget = document.getElementById(bank.key[i]);
         if(playtarget){
            playtarget.currentTime = 0;
            playtarget.play()
            props.setLastPlayed(playtarget.getAttribute('clipname'));
         }
      } 
      //-
      return (
      <button  
         className= {!props.power ? "drum-pad-off  pads" : "drum-pad pads" }
         onClick={()=> playSound(i)}
         key={i}
         alt = {`${bank.names[i]} button`}
         name = {bank.names[i]}
      >
         <span>{bank.names[i]}</span>
         {props.showKeys ? <span className="hotKey"> {bank.key[i]} </span> : '' }
         <audio
            clipname = {bank.names[i]}
            className='clip'
            type="audio/mp3"
            id={bank.key[i]} 
            src={bank.mp3files[i]}
            preload="auto"
            crossOrigin='anonymous'
         />
      </button>
      )
   }); 
   //-------------------- Pads End -----------------------------

   // Add pads to the Buttons group               
   return(
      <div className="padGroups">
         {pads}
      </div>
   )
}
// The entire container on the right (or bottom, depending on width) of the app.
// Buttons component and the display goes here.

const ButtonsContainer = (props) => {
   return(
      <div className="padContainer">
         <div id='display' className = "lastPlayed">
            {props.power ? props.lastPlayed : '' }
         </div>
         <Buttons 
            showKeys={props.showKeys} 
            power = {props.power}
            bank = {props.bank}
            lastPlayed = {props.lastPlayed}
            setLastPlayed = {props.setLastPlayed}
         />
      </div>   
   );
}
export default ButtonsContainer;