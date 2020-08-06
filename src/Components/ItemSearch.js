import React from "react";
import {Link} from "react-router-dom";

function ItemSearch(props) {
    // props.data contains an array of all Item objects(Characters/Spells)
    // props.searchedItem contains the string(character/spell name)
    // that is being searched

    function searchedItem(name) {

        let possibleMatches = []
        for (let i=0;i<props.data.length;i++){
            let itemName = props.data[i][props.displayKey].toLowerCase()
            if (itemName.includes(name.toLowerCase())){
                possibleMatches.push(props.data[i])
            }
        }
        return possibleMatches
    }

    let possibleMatches = searchedItem(props.searchedItem)

    return (
        <div>
            {possibleMatches.map(match => {
                return (
                    <Link to={`/${props.subUrl}/${match._id}`}>
                        <h3>{match[props.displayKey]}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default ItemSearch