import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ArticlePage from './components/ArticlePage';
import HomePage from './components/HomePage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div id="page-body">
                    <Route component={HomePage} path="/" exact />
                    <Route component={AboutPage} path="/about" />
                    <Route component={ArticlePage} path="/article" />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
