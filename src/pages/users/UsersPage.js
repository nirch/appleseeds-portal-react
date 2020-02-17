import React, {useContext, useState, useEffect} from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import {Redirect} from 'react-router'
import PortalTable from "../../components/TableComponent/PortalTable";
import PortalSearchPager from '../../components/search/PortalSearchPager'
import {PortalButtonSet} from '../../components/navbar/PortalButtonSet'
import server from '../../shared/server'

const UsersPage = (props) => {
    const {handleLogout} = props;
    const activeUser = useContext(ActiveUserContext);

    const [data, setData] = useState([]);

    const [headers, setHeaders] = useState([{key: "userid", header: "מס' מזהה"}, {
        key: "firstname",
        header: "שם פרטי"
    }, {
        key: "lastname",
        header: "שם משפחה"
    }, {key: 'email', header: 'דוא"ל'}]);

    //inner functions
    //fetch data from db
    let payload = {"search": "", "sorting": "userid", "desc": false, "userstatus": 1, "page": -1};

    useEffect(() => {
        const fetchData = async () => {
            let ans = await server(activeUser, payload, "SearchStaffUnderMe").then(res => {
                console.log(res);
                if (res.data.error) {
                    alert("error in login");
                } else {
                    setData(res.data);
                }
            }, err => {
                console.error(err);
            });
        };
        fetchData();
    }, []);

    if (!activeUser) {
        return <Redirect to='/'/>
    }

    const handleSearch = (searchText) => {
        if (searchText) {
            let newData = data.filter(item => {

                return (item.firstname.toLowerCase().includes(searchText) ||
                    item.lastname.toLowerCase().includes(searchText) ||
                    item.email.toLowerCase().includes(searchText));
            });
            setData(newData);
        } else {
            setData(data);
        }
    };

    const handleUserType = () => {
        console.log('i am hunduru ro event');
    };

    const callPageData = (index) => {
        console.log('page index '+index);
    };

    const numOfPages = (data.length % 10 + 1);
    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>משתמשים</h1>
            <PortalSearchPager placeholder='חיפוש משתמש' handleSearch={(e) => handleSearch(e)} pages={numOfPages} pageChange={(index)=> callPageData(index)}>search
                bar</PortalSearchPager>
            <PortalTable headers={headers} data={data} handleClick={(e) => console.log(e.target)}>blah</PortalTable>
            <PortalButtonSet buttons={[{key: 0, label: 'פעילים'}, {key: 1, label: 'לא פעילים'}]}
                             handleClick={(item) => handleUserType(item)}>blea</PortalButtonSet>
        </div>
    );
};

export default UsersPage;