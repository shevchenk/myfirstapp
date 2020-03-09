import React from 'react'
import './styles/Welcome.css'

const Welcome = ({username}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>{username}!</h1>
            <p>Let´s workout to get someone agains!</p>
        </div>
    </div>
)

export default Welcome