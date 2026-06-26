import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log("Token check:", token ? "Token found" : "No token")
        if(!token){
            setIsAuthorized(false)
        } else {
            setIsAuthorized(true)
        }
    }, [])

    if(isAuthorized === null) {
        return <div>Loading...</div>
    }

    if(!isAuthorized){
        return <Navigate to="/login" replace/>
    }

    return children
}

export default ProtectedRoutes
