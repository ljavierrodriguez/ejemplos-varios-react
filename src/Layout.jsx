import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import injectContext, { Context } from './store/AppContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Examples from './pages/examples/Examples';
import Example1 from './pages/examples/Example1';
import Example2 from './pages/examples/Example2';
import Example3 from './pages/examples/Example3';
import Example4 from './pages/examples/Example4';
import Example5 from './pages/examples/Example5';
import Example6 from './pages/examples/Example6';
import Example7 from './pages/examples/Example7';

const Layout = () => {
    const { store, actions } = useContext(Context);
    return (
        <BrowserRouter>
            <Navbar currentUser={store.currentUser} login={actions.login} logout={actions.logout} />
            <Routes>
                <Route path='dashboard' element={<ProtectedRoute currentUser={store.currentUser} redirectPath={'/'} />}>
                    <Route index element={<Dashboard />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
                <Route path='examples' element={<ProtectedRoute currentUser={store.currentUser} redirectPath={'/'} />}>
                    <Route index element={<Examples />} />
                    <Route path='1' element={<Example1 />} />
                    <Route path='2' element={<Example2 />} />
                    <Route path='3' element={<Example3 />} />
                    <Route path='4' element={<Example4 />} />
                    <Route path='5' element={<Example5 />} />
                    <Route path='6' element={<Example6 />} />
                    <Route path='7' element={<Example7 />} />
                </Route>
                <Route path='/examples' element={<Examples />} />
                <Route index element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes >
            <ToastContainer />
        </BrowserRouter >
    )
}

export default injectContext(Layout)