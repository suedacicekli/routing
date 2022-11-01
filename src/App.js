import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Dashboard/Home";
import Users from "./pages/Dashboard/Users";
import Contact from "./pages/Dashboard/Contact";
import UserDetail from "./pages/Dashboard/UserDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Error404 from './pages/Error404';
//Menu'yü Dashboard layotuta altığımız için artık kaldırabiliriz.
//import Menu from "./components/Menu";
//layouts
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import AuthLayout from "./layouts/Auth/AuthLayout";


function App() {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" index element={<Register />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
