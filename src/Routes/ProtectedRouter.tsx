import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const ProtectedRouter = () => {
  // const isLoggedIn = localStorage.getItem('access_token')
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/signin')
  //   }
  // }, [isLoggedIn, navigate])
  return (
    <Outlet />
  )
}

export default ProtectedRouter
