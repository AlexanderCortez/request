import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentWillMount() {
    const data = {
      "api_key": "d5c5b2943bde1c34591b8e6009d085ad",
      "user_id": 2305,
      "report": {
        "type": "stats",
        "start_date": "2014-08-03",
        "end_date": "2014-08-03",
        "columns": [
          "imp",
          "leads",
          "money"
        ],
        "orders": [
          "imp",
          "leads"
        ],
        "group": [
          "hour"
        ],
        "filters": {
          "father_id": [
            "123456"
          ],
          "countries": [
            "AR",
            "ES"
          ]
        }
      }
    };
    axios.defaults.headers = {

    }
    // axios.get('https://api.leadzu.com/report', {
    axios.post('http://api.leadzu.com/report', data)
      .then((response) => {
        console.log('response =>', response)
      })
      .catch((err) => {
        console.log('err =>', err);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
