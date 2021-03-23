import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NavBar from './pages/NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div id="page-body">
                    <Switch>
                        <Route component={HomePage} path="/" exact />
                        <Route component={AboutPage} path="/about" />
                        <Route component={ArticlesListPage} path="/article-list" />
                        <Route component={ArticlePage} path="/article/:name" />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
