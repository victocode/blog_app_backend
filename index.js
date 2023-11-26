const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from victocode! this is blog app');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
