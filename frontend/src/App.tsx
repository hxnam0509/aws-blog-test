import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ArticlePage from './components/ArticlePage';
import ArticlesList from './components/ArticlesList';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NotFoundPage from './components/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div id="page-body">
                    <Switch>
                        <Route component={HomePage} path="/" exact />
                        <Route component={AboutPage} path="/about" />
                        <Route component={ArticlesList} path="/article-list" />
                        <Route component={ArticlePage} path="/article/:name" />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
