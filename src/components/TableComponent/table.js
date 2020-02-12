import React, { Component } from 'react';


export default class Table extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const { headers, data, handleClick } = this.props;
        let rows = [];
        for(i=0 ; i<data.length ; i++){
            let currentRow = [];
            for(j=0 ; j<headers.length ; j++){
                let currentData;
                if(data[i][headers][j].key) {
                    currentData = <td onClick={handleClick(data)}>{data[i][headers][j].key}</td>
                } else {
                    currentData = <td></td>;
                }
                currentRow.push(data[i][headers][j].key);
            }
            rows.push(<tr>{currentRow}</tr>);
        }
        let headerRow = [];
        for(i=0 ; i<headers.length ; i++){
            headerRow.push(<td>{headers[i].key}</td>);
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