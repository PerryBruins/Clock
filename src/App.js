import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <Clock date={new Date()} />
  );
}

export default App;
