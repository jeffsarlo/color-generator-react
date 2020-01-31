import React from 'react'

const Swatch = props => {

  const swatchStyle = {
    height: "150px",
    width: "380px",
    background: `rgba(${props.red},${props.green},${props.blue},${props.opacity / 100})`,
  }
  return (
    <div className="swatch-container">
      <div style={ swatchStyle }></div>
    </div>
  )
}

export default Swatch
