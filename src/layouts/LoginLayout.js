import React from 'react'

const LoginLayout = props => {
    return (
        <div>
            <div className="main">
                {props.children}
            </div>
        </div>
    )
}

export default LoginLayout