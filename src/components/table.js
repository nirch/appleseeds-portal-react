import React, { Component } from 'react';


export default class Table extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const { headers, data, handleClick } = this.props;
        return(
            <table>
                
            </table>
        )
    }
}