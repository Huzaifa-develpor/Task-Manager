import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Signin from '../Signin'
import AddTask from '../AddTask'
import ViewTasks from '../ViewTasks'
import ProtectedRoutes from './ProtectedRoutes'
const AppRouter = () => {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
            <Route path="/AddTask" element={
              <ProtectedRoutes>
              <AddTask />
              </ProtectedRoutes>} />
            <Route path="/ViewTasks" element={
              <ProtectedRoutes>
              <ViewTasks />
              </ProtectedRoutes>} />
        </Routes>
      </Router>
    </div>
  )
}


export default AppRouter
