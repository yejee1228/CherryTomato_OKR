import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/member/login';
import Join from './components/member/Join';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/join" element={<Join/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;