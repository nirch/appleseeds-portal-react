import React, {useContext, useState, useEffect} from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import {Redirect} from 'react-router'
import PortalTable from "../../components/TableComponent/PortalTable";
import PortalSearchPager from '../../components/search/PortalSearchPager'
import server from '../../shared/server'

const UsersPage = (props) => {
    const {handleLogout} = props;
    const activeUser = useContext(ActiveUserContext);


    const [data, setData] = useState([]);


    const [headers, setHeaders] = useState([{key: "firstname", header: "שם פרטי"}, {
        key: "lastname",
        header: "שם משפחה"
    }, {key: 'email', header: 'דוא"ל'}]);


    //inner functions
    //fetch data from db
    //TODO
    let payload = {"search": "", "sorting": "userid", "desc": false, "userstatus": 1, "page": -1};

    useEffect(() => {
        const fetchData = async () => {
            let ans = await server(activeUser, payload, "SearchStaffUnderMe").then(res => {
                console.log(res);
                if (res.data.error) {
                    alert("error in login");
                } else {
                    console.log(res.data);
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
                return (item.fname.toLowerCase().includes(searchText) ||
                    item.lname.toLowerCase().includes(searchText) ||
                    item.email.toLowerCase().includes(searchText));
            });
            setData(newData);
        } else {
            setData(data);
        }
    };

    debugger

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>משתמשים</h1>
            <PortalSearchPager placeholder='חיפוש משתמש' handleSearch={(e) => handleSearch(e)}>search
                bar</PortalSearchPager>
            <PortalTable headers={headers} data={data} handleClick={(e) => console.log(e.target)}>blah</PortalTable>
        </div>
    );
};

export default UsersPage;