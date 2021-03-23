import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import CommentList from '../components/CommentList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }: RouteComponentProps<{ name: string }>) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const json = await result.json();
            setArticleInfo(json);
        };
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />;

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentList comments={articleInfo.comments} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
};

export default ArticlePage;
