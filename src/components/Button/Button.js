import React from 'react'
import './Button.css'
const Button = (props) => {
    const { variant = 'primary', size = "medium", children, ...rest } = props
  return (
    <button className={[`button ${variant}`, `button-${size}`].join(' ')} {...rest}>{ children }</button>
  )
}

export default Button