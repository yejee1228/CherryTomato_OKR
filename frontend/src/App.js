import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/account/Login';
import Join from './components/account/Join';
import FindAccount from './components/account/Account';
import Main from './components/main/Main';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Join/>} />
                <Route path="/account" element={<FindAccount/>} flag={'findPw'}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;