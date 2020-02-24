import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import './PortalTabView.css'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../shared/activeUserContext'

// this function get  prop of Object with two keys
//1. header - the name of the TAB
//2. view - page in JSX of the selected TAB


const PortalTabView = (props) => {
    const { tabsObj } = props;
    const [indexOfTab, setActiveTab] = useState(0);
   /*  const tabsObj = [{
        header: "פרופיל",
        view: <p>I'm profile page</p>
    },
    {
        header: "קורסים",
        view: <p>I'm courses page</p>
    },
    {
        header: "עובדים",
        view: <p>I'm employees page</p>
    },
    {
        header: "דיווח",
        view: <p>I'm report page</p>
    }];

*/

    let tabView = null;
    const tabContent = tabsObj[indexOfTab].view;
    if (tabsObj.length > 0) {
        tabView = tabsObj.map(function (tabObj, index) {
            let classOfNav = "nav-item nav-link";
            classOfNav += indexOfTab === index ? " active" : ""
            const tabNav = <a className={classOfNav} data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => setActiveTab(index)}>{tabObj.header}</a>
            return tabNav
        })
    }

    return (
        <div className="c_portalTabView">


            <section id="tabs" class="project-tab">

                <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        {tabView}

                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    {tabContent}
                </div>
            </section>







        </div>
    );

}
export default PortalTabView;