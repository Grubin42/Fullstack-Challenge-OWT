const express = require('express');//minimalist framework for application web

const app = express();
const port = 3000;

app.get('/', (req,res) => res.send('hello toi'));

app.listen(port, () => console.log(`go : http://localhost:${port}`));