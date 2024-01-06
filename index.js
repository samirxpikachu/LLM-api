const express = require('express');
const apiRouter = require('./router/main');

const app = express();
const port = 3000;

app.use(express.static('public'))

app.use(apiRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});