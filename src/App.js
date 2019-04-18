import React, { Component } from 'react'
import './App.css'

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      const img = new Image()
      img.src = './dog.jpg'
      document.body.appendChild(img)
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
    )
  }
}

export default App
