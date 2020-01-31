import React from 'react'
import '../css/sliders.css'

const Sliders = props => {


  return (
    <div className="slider-container">
      <input
        type="range"
        min={0}
        max={255}
        value={ props.red }
        className="red"

        onChange={ (e) => props.handleChange(e) }
      />
      <div>R: { props.red }</div>
      <input
        type="range"
        min={0}
        max={255}
        value={ props.green }
        className="green"

        onChange={ (e) => props.handleChange(e) }
      />
      <div>G: { props.green }</div>
      <input
        type="range"
        min={0}
        max={255}
        value={ props.blue }
        className="blue"

        onChange={ (e) => props.handleChange(e) }
      />
      <div>B: { props.blue }</div>
      <input
        type="range"
        min={0}
        max={100}
        value={ props.opacity }
        className="opacity"

        onChange={ (e) => props.handleChange(e) }
      />
      <div>O: { props.opacity }</div>
    </div>
  )
}

export default Sliders
