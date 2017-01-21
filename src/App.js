import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CalendarContainer from './components/CalendarContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Календарь с заметками на React</h2>
                </div>
                <CalendarContainer />
            </div>
        );
    }
}

export default App;
