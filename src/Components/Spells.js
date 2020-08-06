import React from "react";
import ListView from "./ListView";

class Spells extends React.Component{
    async fetchItems() {
        // This will be sent as props to the ListView Component

        const url = new URL('https://www.potterapi.com/v1/spells')
        const params = {key: '$2a$10$YW2maOJnJH68W/j91VBJruLvQerirzcucaaMflMQY4SsTvnTsi1I2'}

        Object.keys(params).forEach(key => {
            url.searchParams.append(key, params[key])
        })
        const resp = await fetch(url)

        // Returns the JSON data response on the requested URL
        return await resp.json()
    }

    render() {
        return (
            <ListView fetchItems={() => this.fetchItems()} subUrl={'spells'} displayKey={'spell'}/>
        )
    }
}

export default Spells