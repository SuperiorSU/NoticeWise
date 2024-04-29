const express = require('express');
const app = express();
const cors = require('cors');

require("dotenv").config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const routes = require('./routes/route');
app.use('/api/v1',routes);

const dbConnect = require('./config/database');
dbConnect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

