import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponenent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is Private Info.Please don't share! </p>}
      <WrappedComponenent {...props} />
    </div>
  )
}
const requireAuthentication = (WrappedComponenent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponenent {...props} />
      ) : (
        <p> Please login to view the Info</p>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(
  <AdminInfo isAdmin={true} info="THis is the details" />,
  document.getElementById('app')
)

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="THis is the details" />,
  document.getElementById('app')
)
