import React, {useContext, useState, useEffect} from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext';
import {Redirect} from 'react-router';
import PortalTable from "../../components/TableComponent/PortalTable";
import PortalSearchPager from '../../components/search/PortalSearchPager'
import PortalButtonSet from '../../components/navbar/PortalButtonSet'
import server from '../../shared/server'
import {getApiName, getHeaders} from '../../utils/utils'

const UsersPage = (props) => {
    const {handleLogout} = props;
    const apiName = getApiName(props.location.search.substring(1));
    const activeUser = useContext(ActiveUserContext);


    //state
    const [data, setData] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [headers, setHeaders] = useState(getHeaders());
    const [userStatus, setUserStatus] = useState(1);
    const [searchString, setSearchString] = useState("");


    //inner functions
    //fetch data from db
    useEffect(
        () => {
            setData([]);
            const fetchData = async () => {
                await server(activeUser, createPayload(), apiName).then(res => {
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
            fetchData().then(() => console.log('found data')).catch(err => console.log(err));
        }, [userStatus, pageNum, searchString, apiName]);

    if (!activeUser) {
        return <Redirect to='/'/>
    }

    const handleSearch = (searchString) => {
        setSearchString(searchString);
        setPageNum(0);
    };

    const handleUserType = (item) => {
        setUserStatus(item.key);
        setPageNum(0);
        setSearchString("");
    };

    const callPageData = (index) => {
        setPageNum(index);
    };

    const createPayload = () => {
        return {"search": searchString, "sorting": "userid", "desc": false, "userstatus": userStatus, "page": pageNum};
    };

    const clickOnRow = (e) => {
        props.history.push({
            pathname: `/users/${e.userid}`,
            state: {userid: e.userid}
        });
    };


    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>משתמשים</h1>
            <PortalSearchPager placeholder='חיפוש משתמש' handleSearch={(e) => handleSearch(e)} pages={data.pages}
                               pageChange={(index) => callPageData(index)} currentPage={pageNum}/>
            <PortalTable headers={headers} data={data.users} handleClick={(e) => clickOnRow(e)}>blah</PortalTable>
            <PortalButtonSet buttons={[{key: 1, label: 'פעילים'}, {key: 0, label: 'לא פעילים'}]}
                             handleClick={(item) => handleUserType(item)} activeKey={userStatus}/>
        </div>
    );
};

export default UsersPage;