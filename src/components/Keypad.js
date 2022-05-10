// Code Keypad Component Here
import React from 'react'

function Keypad(){
    function detectInput(){
    console.log("Entering password...")
    }
    return (
        <input type="password" onChange={detectInput} />
        );
}
export default Keypad;