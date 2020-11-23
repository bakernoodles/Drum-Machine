import React,{useState} from 'react';
import LeftPane from './components/firstPane.js';
import './Styles/App.scss';
import ButtonsContainer from './components/ButtonsContainer';
function App() {
  const [power, setPower] = useState('on');
  const [showKeys, setShowKeys] = useState(true);
  return (
    <div className="Board" id="drum-machine">
      <LeftPane 
      power={power} 
      setPower={setPower}
      showKeys={showKeys}
      setShowKeys = {setShowKeys}
      />
      <ButtonsContainer 
        power={power} 
        id="display"
        hotKey={showKeys}
      />
    </div>
  );
}
 
export default App;
