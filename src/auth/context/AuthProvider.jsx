import React, { useEffect, useState } from 'react'
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

    useEffect(() => {
        const userName = JSON.parse(localStorage.getItem('user'))
        if (userName) { // Comprobamos si el usuario esta en el local storage
            setUser({
                logged: true,
                name: userName
            })
        }
    }, [])


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
