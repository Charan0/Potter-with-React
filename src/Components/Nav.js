import React from "react";
import {NavLink} from "react-router-dom";
import '../App.css'

// A navbar component
function Nav() {

    const linkStyles = {
        textDecoration: 'none'
    }

    const linkActiveStyle = {
        color: 'blue',
        textDecoration: 'line-through'
    }

    return (
        <nav>
            <h3><NavLink exact to={'/'} style={linkStyles}>Home</NavLink></h3>
            <ul className={'nav-links'}>
                <li>
                    <NavLink to={'/characters'} style={linkStyles} activeStyle={linkActiveStyle}>Characters</NavLink>
                </li>
                <li>
                    <NavLink to={'/spells'} style={linkStyles} activeStyle={linkActiveStyle}>Spells</NavLink>
                </li>
                <li>
                    <NavLink to={'/game'} style={linkStyles} activeStyle={linkActiveStyle}>Game</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav