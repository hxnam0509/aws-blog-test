import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ArticlePage from './components/ArticlePage';
import ArticlesList from './components/ArticlesList';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div id="page-body">
                    <Route component={HomePage} path="/" exact />
                    <Route component={AboutPage} path="/about" />
                    <Route component={ArticlesList} path="/article-list" />
                    <Route component={ArticlePage} path="/article/:name" />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
