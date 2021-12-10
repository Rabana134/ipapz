import React from "react"
import { Route, useNavigate,Routes } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  const history = useNavigate()

  return (
    <Routes>
      <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : history("/login")
      }}
    ></Route>
    </Routes>
    
  )
}