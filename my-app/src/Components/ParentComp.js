import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "3Dev"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "3Dev"
            });
        }, 3000);
    }
    render() {
        return (
            <div>
                I'm the parent 
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;