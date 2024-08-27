import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: false,
        name: ''
    };
    const [user, setUser] = useState(initialState);

    const login = (name = '') => {
        setUser({
            logged: true,
            name: name
        })

    }

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    )

}
