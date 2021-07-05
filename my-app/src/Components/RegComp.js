import React, { Component } from 'react';

class RegComp extends Component {
    render() {
        return (
            <div>
                i'm the regular component {this.props.name}
            </div>
        )
    }
}

export default RegComp;