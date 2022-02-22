import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/account/login';
import Join from './components/account/Join';
import FindAccount from './components/account/findAccount';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/account/signup" element={<Join/>}/>
                <Route path="/account/findAccount" element={<FindAccount/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;