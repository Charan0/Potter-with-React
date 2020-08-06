import React from "react";
import '../App.css'
import {Link} from "react-router-dom";

export default class RandomItems extends React.Component {

    // this.props.randomNums contain the number of random characters to display
    // and the max limit of the items (this.props.data.length) and this.props.subUrl contains
    // the detailed-view URL(characters or spells) this.props.data is an array of item objects(characters/spells) out of
    // which some characters(some = this.props.randomNums) are chosen and rendered by this component
    constructor(props) {
        super(props);
        this.state = {
            itemsList: [],
            loading: true
        }

        this.handleRandoms = this.handleRandoms.bind(this)
    }


    componentDidMount() {
        const items = this.getRandomItems()
        this.setState({itemsList: items, loading: false})
    }

    handleRandoms(){
        const items = this.getRandomItems()
        this.setState({itemsList: items})
    }

    getRandomItems() {
        function getRandomNumbers(num, limit) {
            let randoms = []
            while(randoms.length !== num) {
                let rand = Math.floor(Math.random() * (limit + 1))
                if (!randoms.includes(rand)){
                    randoms.push(rand)
                }
            }
            return randoms
        }

        const randoms = getRandomNumbers(this.props.randomNums, this.props.data.length)
        return randoms.map(value => this.props.data[value])
    }


    // Each of the returned character should be a Link to the detail view of that character
    // Using the same component for both the spells/characters page so since the object attributes
    // are different for both categories I'm using a prop displayKey that is a string(name/spell) for
    // accessing the specific attribute based on the item type(character/spell)
    render() {
        if (this.state.itemsList && !this.state.loading) {
            return (
                <div style={{marginTop: '6em'}}>
                    <h2>Have Some Random {(this.props.subUrl)}!</h2>
                    <br/>
                    {this.state.itemsList.map((item, index) => {
                        return (
                            <div className={'characterDesign'} key={item._id}>


                                <Link className={'highlight-link'}
                                      to={`/${this.props.subUrl}/${item._id}`}
                                >
                                    {(index + 1) + '. ' + item[this.props.displayKey]}
                                </Link>

                            </div>
                        )
                    })}
                    <button className={'fill'} onClick={this.handleRandoms}>Randomize!</button>
                </div>
            )
        } else {
            return (<h1>Loading...</h1>)
        }
    }
}