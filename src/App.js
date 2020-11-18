import React from 'react';
import LeftPane from './components/firstPane.js';
import './Styles/App.scss';
import ButtonsContainer from './components/ButtonsContainer';
function App() {
  return (
    <div className="Board" id="drum-machine">
      <LeftPane/>
      <ButtonsContainer id="display"/>
    </div>
  );
}
 
export default App;
