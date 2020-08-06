import React from "react";
import HarryPotter from '../HarryPotter.jpg'

export default function Home() {

    return (
        <div style={{marginTop: '6em'}}>
            <h1>Welcome to the world of Harry Potter!</h1>
            <img src={HarryPotter} alt="HarryPotter Logo" width={'30%'}/>
            <h2>Wit Augmento!</h2>
        </div>
    )
}