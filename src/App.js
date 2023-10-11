import './App.css';
import { ColorPicker } from './components/ColorPicker';

function App() {
  return (
    <div>
      <ColorPicker colors={["brown", "black", "green", "yellow", "white", "purple"]}/>
    </div>
  );
}

export default App;
