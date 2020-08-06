import React from "react";

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            houses: []
        }
    }

    async fetchData(){
        const url = new URL('https://www.potterapi.com/v1/characters')
        const params = {key: '$2a$10$YW2maOJnJH68W/j91VBJruLvQerirzcucaaMflMQY4SsTvnTsi1I2'}

        Object.keys(params).forEach(key => {
            url.searchParams.append(key, params[key])
        })
        const resp = await fetch(url)
        const data = await resp.json()
    }

    renderLoading(){
        return (
            <div>
                <h1>This is the most magical page of all!</h1>
                <h3>In here...You can play a Game!</h3>
            </div>
        )
    }

    render() {
        return this.renderLoading()
    }
}

export default Game