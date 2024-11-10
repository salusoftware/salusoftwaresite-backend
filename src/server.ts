import express from "express";
import dotenv from 'dotenv';
dotenv.config();

import routes from './app/config/routes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(routes)
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
