import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./components/Common"
import User from "./pages/User/User"
import Login from "./pages/auth/Login/Login"
import Company from "./firebase-curd/components/Company"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<Login/>}/>
        <Route path="users" element={<User/>}/>
        <Route path="companies" element={<Company/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
