import React, { Component } from 'react'

class One extends Component {
    al(){
        alert('123')
    }
    render(){
        return (
            <div>
                <div>This is
                    <p onClick={this.al}>ONE</p>
                 Page</div>
            </div>
        )
    }
}

export default One
