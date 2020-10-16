// higher order component - a component that renders another component
//reuse code 
// render hijacking
// prop manipulation
// abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Tthis is priveate info please don share</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated == true ? <p>welcom user!</p> : <p>please log in</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)
const AdminInfo = withAdminWarning(Info)


// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail" />, document.getElementById('app'))
ReactDOM.render(<AdminInfo isAuthenticated={true} isAdmin={true} info="This is the detail" />, document.getElementById('app'))