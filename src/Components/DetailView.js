import React from "react"

class DetailView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            item: {},
            itemId: this.props.match.params.id,
            loading: true
        }
    }

    async componentDidMount() {
        const url = new URL(`https://www.potterapi.com/v1/${this.props.subUrl}/${this.state.itemId}`)
        const params = {key: '$2a$10$YW2maOJnJH68W/j91VBJruLvQerirzcucaaMflMQY4SsTvnTsi1I2'}
        Object.keys(params).forEach(key => {
            url.searchParams.append(key, params[key])
        })

        const resp = await fetch(url)
        const data =  await resp.json()
        this.setState({
            item:
                this.props.subUrl === 'spells' ? data[0] : data,
            loading: false
        })
    }

    renderItem(){
        function renderElement(name, value, key) {
            const nameToRender = name.charAt(0).toUpperCase() + name.slice(1)
            const valueToRender = value.charAt(0).toUpperCase() + value.slice(1)
            return (<h3 key={key}>{nameToRender + ' : ' + valueToRender}</h3>)
        }

        const properties =
            this.props.subUrl === 'characters' ?
                ['name', 'role', 'house', 'school', 'patronus', 'bloodStatus', 'species'] :
                ['spell', 'type', 'effect']
        const elements = []
        const item = this.state.item
        properties.forEach((propValue, index) => {
            if (item.hasOwnProperty(propValue)){
                elements.push(renderElement(propValue, item[propValue], index))
            }
        })
        return elements
    }

    render() {
        if (this.state.loading){
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div>
                    {this.renderItem()}
                </div>
            )
        }
    }
}
export default DetailView