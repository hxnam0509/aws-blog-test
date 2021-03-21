import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }: RouteComponentProps<{ name: string }>) => {
    const name = match.params.name;
    const article = articles.find((article) => article.name === name);

    if (!article) return <NotFoundPage />;

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((para, k) => <p key={k}>{para}</p>)}
        </>
    );
};

export default ArticlePage;
