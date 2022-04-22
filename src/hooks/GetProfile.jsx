import React, {useState, createContext} from 'react';
import Cookies from 'universal-cookie';

export const ProfileContext = createContext();

const ContextGetProfile = (props) => {
    const cookies = new Cookies()
    const [profile, setProfile] = useState(cookies.get('profile', [true]));

    const GetProfile = () => {
        setProfile(cookies.get('profile', [true]))
    }

    const value = {
        profile,
        GetProfile
    };

    return (
        <ProfileContext.Provider value={value}>
            {props.children}
        </ProfileContext.Provider>
    );
};

export default ContextGetProfile;