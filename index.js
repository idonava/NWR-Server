const express = require('express');
const app = express();
const PORT =    process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send({ bye: '1234232323' });
})
app.listen(PORT);