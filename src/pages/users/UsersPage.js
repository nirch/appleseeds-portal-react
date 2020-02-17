import React, {useContext, useState} from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import {Redirect} from 'react-router'
import PortalTable from "../../components/TableComponent/PortalTable";
import PortalSearchPager from '../../components/search/PortalSearchPager'

const UsersPage = (props) => {
    const {handleLogout} = props;
    const activeUser = useContext(ActiveUserContext);

    //fetch data from db
    //TODO
    const users = [{
        id: "12212",
        fname: "Nir",
        lname: "Channes",
        email: 'emailasd@gmail.com'
    }, {id: "2212", fname: "John", lname: "Doe", email: 'emailasd@gmail.com'}];


    const [data, setData] = useState(users);
    const [headers, setHeaders] = useState([{key: "fname", header: "שם פרטי"}, {
        key: "lname",
        header: "שם משפחה"
    }, {key: 'email', header: 'דוא"ל'}]);



    if (!activeUser) {
        return <Redirect to='/'/>
    }


    //inner functions

    const handleSearch = (searchText) => {
        if (searchText){
            let newData = data.filter(item => {
                return (item.fname.toLowerCase().includes(searchText) ||
                item.lname.toLowerCase().includes(searchText) ||
                item.email.toLowerCase().includes(searchText));
            });
            setData(newData);
        }
        else {
            setData(users);
        }
    };


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