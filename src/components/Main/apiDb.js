import React from 'react'

export let peticion = async () => {
    let response = await fetch("./menu.json");
    let data = await response.json();
}