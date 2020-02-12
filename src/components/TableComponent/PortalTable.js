import React, { Component } from 'react';


export default class PortalTable extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const { headers, data ,handleClick} = this.props;
        let rows = [];
        for(let i=0 ; i<data.length ; i++){
            let currentRow = [];
            for(let j=0 ; j<headers.length ; j++){
                let currentData;
                if(data[i][headers[j].key]) {
                    currentData = <td onClick={handleClick(data)}>{data[i][headers[j].key]}</td>;
                } else {
                    currentData = <td></td>;
                }
                currentRow.push(currentData);
            }
            rows.push(<tr>{currentRow}</tr>);
        }
        let headerRow = [];
        for(let i=0 ; i<headers.length ; i++){
            headerRow.push(<th>{headers[i].key}</th>);
        }
        return(
            <table>
                <thead>
                    <tr className="headerRow">
                        {headerRow}
                    </tr>
                </thead>
                <tbody>
                   {rows}
                </tbody>
            </table>
        )
    }
}