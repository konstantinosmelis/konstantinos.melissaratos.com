import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.js';

import NavigationBar from './components/NavigationBar.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

function App() {
    const [links, setLinks] = useState([
        // {name: "Home", path: "/"},
        // {name: "Contact", path: "/contact"}
    ]);

    return (
        <div className="App">
            <Router>
                <NavigationBar navLinks={links}/>
                <Routes>
                    <Route exact path="/" exact element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;