import express from "express";
import helmet from "helmet";
import dotenv from 'dotenv';
dotenv.config();

import routes from './app/config/routes'

const app = express();

app.use(helmet());

app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
