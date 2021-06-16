const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

module.exports = app;
