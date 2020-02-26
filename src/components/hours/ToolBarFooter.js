import React from 'react';
import './ToolBarFooter.css'
import PlusButtonTool from "./PlusButtonTool";


const ToolBarFooter = (props) => {
    const {report} = props;


    return (
        <div class="c-toolbar-footer">
        <PlusButtonTool/>
        </div>    
    );
}

export default ToolBarFooter;