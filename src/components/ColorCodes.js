import React from 'react'

const ColorCodes = props => {

  const rgba = `rgba(${props.red},${props.green},${props.blue},${props.opacity / 100})`

  const hexRed = Number(props.red).toString(16).padStart(2, '0').toUpperCase()
  const hexGreen = Number(props.green).toString(16).padStart(2, '0').toUpperCase()
  const hexBlue = Number(props.blue).toString(16).padStart(2, '0').toUpperCase()

  const btnStyle = {
    width: "190px",
    padding: "0",
  }

  const inputStyle = {
    textAlign: "center",
    color: "#333",
    border: "0",
    outline: "0",
    padding: "0.5rem 0",
    fontSize: "1rem",
    userSelect: "none",
    cursor: "pointer",
    width: "100%",
  }

  return (
    <div className="code-container">
      <button onClick={ (e) => props.handleCopyToClipboard(e) } style={ btnStyle }>
        <input
        style={ inputStyle }
        className="hex"
        type="text"
        value={ props.showCopyText ? "Copied!" : '#' + hexRed + hexGreen + hexBlue }
        disabled="disabled"/>
      </button>
      <button onClick={ (e) => props.handleCopyToClipboard(e) } style={ btnStyle }>
        <input
        style={ inputStyle }
        className="rgb"
        type="text"
        value={ props.showCopyText ? "Copied!" : rgba }
        disabled="disabled"/>
      </button>
    </div>
  )
}

export default ColorCodes
