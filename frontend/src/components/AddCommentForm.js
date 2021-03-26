import React, { useState } from 'react';

const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'POST',
            body: JSON.stringify({username, text}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const articleInfo = await result.json();
        setArticleInfo(articleInfo);
        setUsername('');
        setText('');
    }
    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={text} onChange={(event) => setText(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    );
};

export default AddCommentForm;
