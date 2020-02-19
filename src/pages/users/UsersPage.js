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
    const apiName = getApiName(props.match.params.userType);
    const activeUser = useContext(ActiveUserContext);

    //state
    const [data, setData] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [headers, setHeaders] = useState(getHeaders());
    const [userStatus, setUserStatus] = useState(0);
    const [searchString, setSearchString] = useState("");


    //inner functions
    //fetch data from db
    useEffect(
        () => {
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
            fetchData().then(() => console.log('found data')).catch( err => console.log(err));
        }, [userStatus,pageNum,searchString]);

    if (!activeUser) {
        return <Redirect to='/'/>
    }

    const handleSearch = (searchString) => {
        console.debug('search string '+searchString);
        setSearchString(searchString);
        setPageNum(0);
    };

    const handleUserType = (item) => {
        console.debug('i am hunduru ro event ' + item.key);
        setUserStatus(item.key);
    };

    const callPageData = (index) => {
        console.debug('go to page '+index);
        setPageNum(index);
    };

    const createPayload = () => {
        return {"search": searchString, "sorting": "userid", "desc": false, "userstatus": userStatus, "page": pageNum};
    };

    // let num = data;
    // debugger
    if (!data.users && pageNum >= 0){
        //hack -- need to verify implementation
        return <div></div>
    }
    // debugger

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>משתמשים</h1>
            <PortalSearchPager placeholder='חיפוש משתמש' handleSearch={(e) => handleSearch(e)} pages={data.pages}
                               pageChange={(index) => callPageData(index)} currentPage={pageNum+1}>search
                bar</PortalSearchPager>
            <PortalTable headers={headers} data={data.users} handleClick={(e) => console.log(e.target)}>blah</PortalTable>
            <PortalButtonSet buttons={[{key: 0, label: 'פעילים'}, {key: 1, label: 'לא פעילים'}]}
                             handleClick={(item) => handleUserType(item)} activeKey={'0'}>blah</PortalButtonSet>
        </div>
    );
};

export default UsersPage;