import { Outlet, useNavigate } from "react-router-dom"

const ProtectedRouter = () => {
  const isLoggedIn = localStorage.getItem('access_token')
  const navigate = useNavigate()
  if(!isLoggedIn){  
    navigate('/signin')
  }
  return (
    <Outlet/>
  )
}

export default ProtectedRouter
