// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe(){
    function isFocus(){
        console.log("Good!")
    }
    function isBlur(){
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onFocus={isFocus} onBlur={isBlur} >Eyes on me
        </button>
    )
        
}
export default EyesOnMe;