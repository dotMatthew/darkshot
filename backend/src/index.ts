import express from 'express';
import environment from './environment';
import { MainRouter } from './router';

const app = express();

app.use("/", MainRouter);

app.listen(environment.port, () => {
    console.log(`Darkshot server started... ${new Date()}`);
});