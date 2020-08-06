import React from "react";
import RandomItems from "./RandomItems";
import ItemSearch from "./ItemSearch";

// Returns a List of Random Items(Characters/Spells)
// Clicking on any of the Item directs to a detailed view of the item
// Item search based on value provided by the user
// Item search returns suggestions based on the user's search query

class ListView extends React.Component{

    // props contains a function(props.fetchItems) that fetches Item data based.
    // The URL and params are controlled from the parent component
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            itemData: [],
            searchedItem: ''
        }
        this.getValue = this.getValue.bind(this)
    }

    async componentDidMount() {
        const data = await this.props.fetchItems()
        this.setState({loading: false, itemData: data})
    }

    getValue(event){
        this.setState({searchedItem: event.target.value})
    }

    render() {
        if (!this.state.itemData || this.state.loading){
            return (
                <div style={{marginTop: '6em'}}>
                    <h1>Wait a Moment</h1>
                    <h2>Alohomora</h2>
                    <h1>Magic is in the making!</h1>
                </div>
            )
        }

        else {
            return (
                <div>
                    <input
                        type="text"
                        name={'searchedItem'}
                        onChange={this.getValue}
                        value={this.state.searchedItem}
                    />
                    {
                        !this.state.searchedItem ?
                            <RandomItems randomNums={6} data={this.state.itemData} subUrl={this.props.subUrl} displayKey={this.props.displayKey}/> :
                            <ItemSearch data={this.state.itemData} searchedItem={this.state.searchedItem} subUrl={this.props.subUrl} displayKey={this.props.displayKey}/>
                    }
                </div>
            )
        }
    }
}

export default ListView