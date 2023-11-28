import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/Common";
import User from "./pages/User/User";
import Login from "./pages/auth/Login/Login";
import Company from "./firebase-curd/components/Company";
import ProtectedRouter from "./Routes/ProtectedRouter";
import TurnBackRouter from "./Routes/TurnBackRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TurnBackRouter/>}>
          <Route path="/signin" element={<Login />}>
          </Route>
        </Route>
        <Route element={<ProtectedRouter />}>
          <Route path="/users" element={<User />} />
          <Route path="/companies" element={<Company />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
