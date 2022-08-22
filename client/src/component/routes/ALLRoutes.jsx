import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Notice } from '../notice/Notice';
import { Login } from '../login/Login';
export const ALLRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/notice/:username' element={<Notice/>}/>
        </Routes>
    </div>
  )
}
