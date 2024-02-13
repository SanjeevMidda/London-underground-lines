import './index.css';
import Line from './components/Line';

function App() {
  return (
    <div className="App">

      <h2>LONDON UNDERGROUND</h2>

      <div className="lines">
        <Line backgroundColor = "brown" lineName="bakerloo"/>
        <Line backgroundColor = "red" lineName="central"/>
        <Line backgroundColor = "yellow" lineName="circle"/>
        <Line backgroundColor = "green" lineName="district"/>
        <Line backgroundColor = "pink" lineName="hammersmith & city"/>
        <Line backgroundColor = "grey" lineName="jubilee"/>
        <Line backgroundColor = "purple" lineName="metropolotan"/>
        <Line backgroundColor = "black" lineName="northern"/>
        <Line backgroundColor = "blue" lineName="picadilly"/>
        <Line backgroundColor = "rgb(0, 179, 255)" lineName="victoria"/>
        <Line backgroundColor = "aqua" lineName="waterloo & city"/>
      </div>
      
    </div>
  );
}

export default App;
