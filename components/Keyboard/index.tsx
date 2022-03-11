import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

// Note, need to grey it out when they have guessed.
export interface KeyboardProps {
  onKeyPress: Function
}

export default ({ onKeyPress }: KeyboardProps) => {
  return Keyboard({ onKeyPress });
}