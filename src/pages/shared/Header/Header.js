import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {user.displayName}
        </div>
    );
};

export default Header;