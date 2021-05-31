import express from 'express';
import { MainRouter } from './router';

const app = express();

app.use("/", MainRouter);

app.listen(8080, () => {
    console.log(`Darkshot server started... ${new Date()}`);
});