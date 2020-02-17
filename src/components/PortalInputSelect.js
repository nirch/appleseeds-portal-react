import React from 'react'
import '../components/PortalInputSelect.css'

import React from 'react'


// <PortalInputSelect /> props:
//  - inputTitle (String) - will be rendering the Title Lable  - *not Required
//  - options[] - array of  Obj option{key : value} 
//  - optionsKey (String) - Renders the value for this key
//  - handleSelection( ) - callback function. sends the object of the selected option.


const PortalInputSelect = (props) => {
    const { inputTitle, options, optionsKey } = props;

    return (
        <div className="c-portal-input-select">
            
        </div>
    )
}

export default PortalInputSelect;