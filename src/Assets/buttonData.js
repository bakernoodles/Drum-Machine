import {bank1} from '../Assets/bank1';
import {bank2} from '../Assets/bank2';

// Indexed/mapped data for the two banks. Iterate with .map

// -names               (To display on the pads)
// -keys                (used for ID's)
// -mp3files            (the MP3 Asset files)
// -hotkeys are hashed  (Check if a clicked key is a hotkey)


// ----------------- BANK 1 --------------------

const padData = {
   names: [
      'Chord1', 'Chord 2', 'Chord 3', 'Cow Bell', 
      'Perc1', "Perc2", 'Zap', 'Shaker', 
      'hiTom', 'LowTom', 'midTom', 'Closed HH', 
      'Bass Drum', 'Snare', 'Clap', 'Hi Hat'],
   key: ['1', '2', '3', '4', 
      'q', 'w', 'e', 'r', 
      'a', 's', 'd', 'f', 
      'z', 'x', 'c', 'v'],
   mp3files: bank1,
   hotKeys: {
      '1': true, '2': true, '3': true, '4': true,
      'q': true, 'w': true, 'e': true, 'r': true,
      'a': true, 's': true, 'd': true, 'f': true,
      'z': true, 'x': true, 'c': true, 'v': true,
   }
};


// ---------------- BANK 2 ----------------------

const padData2 = {
   names: [
      'Kick', 'Snare', 'Clap', 'Hihat',
      'Kick2', 'Snare2', 'Clap2', 'LowTom',
      'Kick3', 'Perc1', 'Perc2', 'Hi-Tom',
      'Bell', 'Metal', 'Tambourina', 'Robot'
   ],
   key: ['1', '2', '3', '4', 
      'q', 'w', 'e', 'r', 
      'a', 's', 'd', 'f', 
      'z', 'x', 'c', 'v'],
   mp3files: bank2,
   hotKeys: {
      '1': true, '2': true, '3': true, '4': true,
      'q': true, 'w': true, 'e': true, 'r': true,
      'a': true, 's': true, 'd': true, 'f': true,
      'z': true, 'x': true, 'c': true, 'v': true,
   }
};


export {padData, padData2};