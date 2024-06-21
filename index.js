const express = require("express");
const app = express();
//const cors = require("cors");

const path = require("path");
app.use(express.json());
//app.use(cors);

app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/home.html'))
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

app.get('/customers/:id', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/customer.html'))
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});