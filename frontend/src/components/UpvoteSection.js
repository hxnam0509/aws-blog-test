import React from 'react';

const UpvoteSection = ({articleName, upvotes, setArticleInfo}) => {
    async function upvote() {
        const result = await fetch(`/api/articles/${articleName}/upvote`, { method: 'POST' });
        const article = await result.json();
        setArticleInfo(article);
    }
    return (
        <div id="upvotes-section">
            <button onClick={upvote}>Upvote</button>
            <p>This post has been upvoted {upvotes} times</p>
        </div>
    );
};

export default UpvoteSection;
