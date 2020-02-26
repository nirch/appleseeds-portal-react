function getApiName(userType) {
    const mappedApi = {
        'staff': 'SearchStaffUnderMe',
        'newUsers': 'SearchNewUsers',
        'students': 'SearchStudentsUnderMe'
    };
    return mappedApi[userType] == null ? mappedApi['staff'] : mappedApi[userType];
}


function getHeaders() {
    return [{key: "userid", header: "מס' מזהה"}, {
        key: "firstname",
        header: "שם פרטי"
    }, {
        key: "lastname",
        header: "שם משפחה"
    }, {key: 'email', header: 'דוא"ל'}]
}

function getUserDetailsProfileAPIs() {
    return ['GetUserProfileById','GetManagedUsersByUserId','GetUserProjects']
}


export {getApiName,getHeaders};