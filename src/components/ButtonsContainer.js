import React from 'react';
import '../Styles/pads.css';

const Buttons = () =>{
   
   return(
      <div className="padGroups">
         <button className="drum-pad">Harp<span className="hotKey">1</span></button>
         <button className="drum-pad">Harp 2<span className="hotKey">2</span></button>
         <button className="drum-pad">Harp 3<span className="hotKey">3</span></button>
         <button className="drum-pad">Cow Bell<span className="hotKey">4</span></button>
         
         <button className="drum-pad">Violin<span className="hotKey">q</span></button>
         <button className="drum-pad">Violin 2<span className="hotKey">w</span></button>
         <button className="drum-pad">Cello<span className="hotKey">e</span></button>
         <button className="drum-pad">Cello 2<span className="hotKey">r</span></button>

         <button className="drum-pad">Crash<span className="hotKey">a</span></button>
         <button className="drum-pad">Crash 2<span className="hotKey">s</span></button>
         <button className="drum-pad">Shaker<span className="hotKey">d</span></button>
         <button className="drum-pad">Shaker 2<span className="hotKey">f</span></button>

         <button className="drum-pad">Bass Drum<span className="hotKey">z</span></button>
         <button className="drum-pad">Snare<span className="hotKey">x</span></button>
         <button className="drum-pad">Clap<span className="hotKey">c</span></button>
         <button className="drum-pad">Hi Hat<span className="hotKey">v</span></button>
      </div>
      
   )
}
const ButtonsContainer = () => {
   return(
      <div className="padContainer">
         <Buttons/>
      </div>
   )
}
export default ButtonsContainer;