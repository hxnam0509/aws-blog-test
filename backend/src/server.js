import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
    },
    'learn-node': {
        upvotes: 0,
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
    },
}

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello!'));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name} from POST`));
app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;
    const article = articlesInfo[articleName];
    if (article) {
        article.upvotes += 1;
        res.status(200).send(`${articleName} now has ${article.upvotes} upvotes`)
    }
});

app.listen(8000, () => console.log('Listening on port 8000'));
