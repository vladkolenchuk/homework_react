import React from 'react';

import css from './User.module.css'

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div>
            <div className={css.wrap}>
                <div>{id} - {name}</div>
                <button onClick={ () => getUser(user) }>Details</button>
            </div>

        </div>
    );
};

export default User;