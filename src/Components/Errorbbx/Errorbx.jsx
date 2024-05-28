import React from 'react'
import './Errorbx.css'
const Errorbx = (props) => {
  return (
    <>
    <div className="errorarea main">
        <div className="errorbx w100">
            <span className='errmsg'>{props.msg}</span>

            <h3>{props.code}</h3>
        <br />
            <p className='errmsg2'>{props.data}</p>
        </div>
    </div>
    </>
  )
}

export default Errorbx