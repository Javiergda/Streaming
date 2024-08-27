import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({ logged: false });

    const login = (name = '') => {
        setUser({
            logged: true,
            name: name
        })
        localStorage.setItem('user', JSON.stringify(name)); // Guardamos en local storage  
    }

    const logout = () => {
        setUser({
            logged: false
        })
        localStorage.removeItem('user'); // Eliminamos local storage
    }


    if (JSON.parse(localStorage.getItem('user'))) {

    } else {

    }



    console.log(JSON.parse(localStorage.getItem('user')));



    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}
