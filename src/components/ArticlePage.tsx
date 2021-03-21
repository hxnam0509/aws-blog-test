import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = ({ match }: RouteComponentProps<{ name: string }>) => {
    const name = match.params.name;
    const article = articles.find((article) => article.name === name);

    if (!article) return <h1>Not found</h1>;

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((para, k) => <p key={k}>{para}</p>)}
        </>
    );
};

export default ArticlePage;
