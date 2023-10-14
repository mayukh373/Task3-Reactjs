import './App.css';
import { ColorPicker } from './components/ColorPicker';

function App() {

  return (
    <div>
      <ColorPicker colors={["red", "green", "blue", "yellow", "pink", "cyan", "black", "plum", "white", "purple", "grey", "orange", "violet", "azure", "salmon", "chocolate"]} />
    </div>
  );
}

export default App;
