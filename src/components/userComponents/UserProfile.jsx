import React from 'react';
import PortalInput from "../PortalInput";

function UserProfile(props) {
    return (
        <div>
            <PortalInput inputTitle={'שם פרטי בעברית'} inputPlaceholder={'placeholder'} handleChange={() => console.log('blag')}/>
            <PortalInput inputTitle={'שם משפחה בעברית'} inputPlaceholder={'placeholder'} handleChange={() => console.log('blag')}/>
            <PortalInput inputTitle={'שם פרטי בערבית'} inputPlaceholder={'placeholder'} handleChange={() => console.log('blag')}/>
            <PortalInput inputTitle={'שם משפחה בערבית'} inputPlaceholder={'placeholder'} handleChange={() => console.log('blag')}/>
        </div>
    );
}

export default UserProfile;