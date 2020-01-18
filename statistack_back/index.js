const express = require("express");
const app = express();

app.get('', (req, res) => {
    res.send("Hello, world!");
});

const PORT = 5000;
app.listen(PORT, console.log(`statistack_back listening on port ${PORT}`));