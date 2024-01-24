import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import Home from './pages/Home.js';
import NavigationBar from './components/NavigationBar.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';
import './assets/App.css';
import './assets/NavigationBar.css';
import './assets/Landing.css';
import './assets/Projects.css';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    return (
        <div className="App" data-theme={theme}>
            <NavigationBar theme={theme} setTheme={setTheme}/>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home theme={theme}/>}/>
                    </Routes>
                </Router>
        </div>
    );
}

export default App;
