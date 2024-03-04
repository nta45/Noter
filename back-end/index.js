const express = require('express');
app = express();

const cors = require('cors');
app.use(cors());

app.get('/add', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});