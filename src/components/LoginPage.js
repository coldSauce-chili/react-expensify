import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

// class LoginPage extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button>my button</button>
//             </div>
//         )
//     }
// }

export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>my button</button>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(LoginPage)