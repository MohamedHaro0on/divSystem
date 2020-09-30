import React from 'react'
import ClassNames from "./UI.module.scss" ;

function Button(props) {
    return (
        <button {...props} className = {ClassNames.Button}>
             {props.children}
        </button>
    )
}

export default Button
