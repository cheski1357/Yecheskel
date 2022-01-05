import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Weather from './Weather';
import WeatherDetails from './WeatherDetails';
import ListComponent from './ListComponents';

class App extends Component {
 
  state = {
    cities: [{id:1, zip:'08701'},{id:2, zip:'11230'},{id: 3, zip:'10012'},{id: 4, zip: '33101'}]
  }
render() {
  return (
    <div className="container-fluid">
      <div className="text-center">
        <h1>PCS Weather</h1>
        <Weather />
        <hr />
        <ListComponent items={this.state.cities} />
        <hr />
        <WeatherDetails recipe={this.state.cities[0]} />
      </div>
    </div>
  );
}
}

export default App;
