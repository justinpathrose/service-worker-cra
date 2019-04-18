import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="h-screen bg-green-lightest">
          <img src="dog.jpg" alt="a sample" />
        </div>
        <div className="App-refresh hidden text-white bg-grey-darkest p-4 absolute rounded shadow-lg">
          New version of App available.
          <span
            onClick={() => window.location.reload()}
            className="text-blue-light cursor-pointer"
          >
            &nbsp; REFRESH
          </span>
        </div>
      </div>
    )
  }
}

export default App
