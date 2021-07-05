import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        return (
            <div>
                I'm the pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp;