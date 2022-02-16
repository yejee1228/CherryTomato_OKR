import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/account/login';
import Join from './components/account/Join';
import FindId from './components/account/findId';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/account/signup" element={<Join/>}/>
                <Route path="/account/findid" element={<FindId/>}/>
                <Route path="/account/passwd" element={<FindId/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;