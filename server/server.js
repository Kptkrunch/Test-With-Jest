const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('public'));


const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
    console.log(`Listening on port: ${process.env.PORT} in ${process.env.DEV_MODE} mode`);
});