function getApiName(userType) {
    const mappedApi = {
        'staff': 'SearchStaffUnderMe',
        'newUsers': 'SearchNewUsers',
        'students': 'SearchStudentsUnderMe'
    };
    debugger
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

export {getApiName,getHeaders};