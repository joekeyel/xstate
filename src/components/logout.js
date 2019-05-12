
import React from 'react'

const LogOutButton = (props) => {

      return (
        <button
        type = "submit"
        hidden = {props.hidelogout} >
        LOGOUT
        </button>
      )

}


export default LogOutButton