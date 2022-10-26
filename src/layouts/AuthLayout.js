import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div>
            Auth Layout
            <hr />
            <Outlet />

        </div>
    )
}

export default AuthLayout