import React from 'react'
import ClassNames from "./UI.module.scss" ;
const Muted = (props)=> <p className = {ClassNames.Muted}>{props.children}</p>
export default Muted ;