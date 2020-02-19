import React, {useContext, useState, useEffect} from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import {Redirect} from 'react-router'
import PortalTable from "../../components/TableComponent/PortalTable";
import PortalSearchPager from '../../components/search/PortalSearchPager'
import PortalButtonSet from '../../components/navbar/PortalButtonSet'
import server from '../../shared/server'
import {getApiName, getHeaders} from '../../utils/utils'

const UsersPage = (props) => {
    const {handleLogout} = props;

    const apiName = getApiName(props.match.params.userType);

    // debugger
    const activeUser = useContext(ActiveUserContext);

    const [data, setData] = useState([]);

    const [pageNum, setPageNum] = useState(0);

    const [headers, setHeaders] = useState(getHeaders());

    const [userStatus, setUserStatus] = useState();


    //inner functions
    //fetch data from db
    //TODO
    useEffect(
        () => {
            const fetchData = async () => {
                await server(activeUser, createPayload(pageNum), apiName).then(res => {
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
            fetchData().then(() => console.log('found data')).catch( err => console.log(err));
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

    const handleUserType = (item) => {
        console.log('i am hunduru ro event ' + item.label);
    };

    const callPageData = (index) => {
        setPageNum(index);
    };

    const createPayload = () => {
        return {"search": "", "sorting": "userid", "desc": false, "userstatus": 1, "page": pageNum};
    };

    let num = data;
    if (!data.users){
        //hack -- need to verify implementation
        return <div></div>
    }
    debugger
    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>משתמשים</h1>
            <PortalSearchPager placeholder='חיפוש משתמש' handleSearch={(e) => handleSearch(e)} pages={data.pages}
                               pageChange={(index) => callPageData(index)}>search
                bar</PortalSearchPager>
            <PortalTable headers={headers} data={data.users} handleClick={(e) => console.log(e.target)}>blah</PortalTable>
            <PortalButtonSet buttons={[{key: 0, label: 'פעילים'}, {key: 1, label: 'לא פעילים'}]}
                             handleClick={(item) => handleUserType(item)} activeKey={'0'}>blah</PortalButtonSet>
        </div>
    );
};

export default UsersPage;