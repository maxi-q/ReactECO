import React from 'react';
import {
    MDBFooter
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-dark' href='http://127.0.0.1:5000/StartWindow'>
                    ReactECO.com
                </a>
            </div>
        </MDBFooter>
    );
};

export default Footer;