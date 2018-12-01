const express = require('express');
const app = express();
const PORT =    process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send({ bye: '123423' });
})
app.listen(PORT);