import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: false,
        name: ''
    };


    const [user, setUser] = useState(initialState);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )

}
