import React, {useState} from 'react';
import LeftPane from './components/firstPane.js';
import './Styles/App.css';
import ButtonsContainer from './components/ButtonsContainer';

export const PowerContext = React.createContext();
function App() {
  const [power, setPower] = useState(true);
  const [showKeys, setShowKeys] = useState(true);
  const [lastPlayed, setLastPlayed] = useState('');
  const [bank, setBank] = useState(0);

  return (
    <div className="Board" id="drum-machine">
      <LeftPane 
        power={power} 
        setPower={setPower}
        showKeys={showKeys}
        setShowKeys = {setShowKeys}
        setBank = {setBank}
        bank = {bank}
      />
      <ButtonsContainer 
        power={power} 
        id="display"
        showKeys={showKeys}
        bank = {bank}
        lastPlayed = {lastPlayed}
        setLastPlayed = {setLastPlayed}
      />
    </div>
  );
}
 
export default App;
