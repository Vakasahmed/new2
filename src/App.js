import './App.css';
import logo from './Images/ass2.png';

function App() {
  return (
    <div className="App">
     <header className="App-header">
        <h1>The Evolution of Airbnb's Frontend</h1>
        <p>@spikebrehm</p>
        <img src={logo} alt="logo" style={{ height: "40px" }} />
      </header>
    </div>
  );
}

export default App;
