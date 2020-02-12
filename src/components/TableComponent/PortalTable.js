import React, { Component } from 'react';
import './PortalTable.css';


export default class PortalTable extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        //headers - array of the headers that this table should show
        //data - array of all the row's data, not only what's in the specific header
        //handleClick - calling the function that handles a click on a row
        const { headers, data ,handleClick} = this.props;
        let headerRow = [];
        for(let i=0 ; i<headers.length ; i++){
            headerRow.push(<th key={i}>{headers[i].header}</th>);
        }
        let rows = [];
        for(let i=0 ; i<data.length ; i++){
            let currentRow = [];
            for(let j=0 ; j<headers.length ; j++){
                let currentData;
                if(data[i][headers[j].key]) {
                    currentData = <td key={j}>{data[i][headers[j].key]}</td>;
                } else {
                    currentData = <td key={j}></td>;
                }
                currentRow.push(currentData);
            }
            rows.push(<tr key={i} className="tableRow" onClick={() => handleClick(data[i])}>{currentRow}</tr>);
        }
        return(
            <table className="mainTable">
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