import React, { Component } from 'react'
import copy from 'copy-to-clipboard'
import Swatch from './components/Swatch'
import Sliders from './components/Sliders'
import ColorCodes from './components/ColorCodes'
import './css/App.css'

class App extends Component {
  state = {
    red: 0,
    green: 0,
    blue: 0,
    opacity: 100,
    showCopyText: false
  }

  handleChange = e => {
    const { className } = e.target
    const { value } = e.target

    if (className === 'red') {
      this.setState({ red: value })
    } else if (className === 'green') {
        this.setState({ green: value })
    } else if (className === 'blue') {
        this.setState({ blue: value })
    } else if (className === 'opacity') {
        this.setState({ opacity: value })
    }
  }

  handleCopyToClipboard = (e) => {
    if (e.target.className === "hex") {
      copy(e.target.value)
      this.toggleShowCopyText()
    } else if (e.target.className === "rgb") {
        copy(e.target.value)
        this.toggleShowCopyText()
    }
  }

  toggleShowCopyText = () => {
    this.setState({
      showCopyText: true
    },() => setTimeout(() => this.setState({ showCopyText: false}), 1000)
    )
  }

  render () {
    return (
      <div className="App">
        <h1>Color Generator</h1>
        <Swatch
          red={ this.state.red }
          green={ this.state.green }
          blue={ this.state.blue }
          opacity={ this.state.opacity }
        />
        <ColorCodes
          red={ this.state.red }
          green={ this.state.green }
          blue={ this.state.blue }
          opacity={ this.state.opacity }
          showCopyText = { this.state.showCopyText }
          handleCopyToClipboard = { this.handleCopyToClipboard }
        />
        <Sliders
          red={ this.state.red }
          green={ this.state.green }
          blue={ this.state.blue }
          opacity={ this.state.opacity }
          handleChange={ this.handleChange }
        />
      </div>
    )
  }
}

export default App
