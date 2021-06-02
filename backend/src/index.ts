import express from 'express';
import mongoose from 'mongoose';
import environment from './environment';
import { MainRouter } from './router';

const app = express();

mongoose
  .connect(environment.mongodb_uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

app.use(express.json());
app.use('/', MainRouter);

process.on("SIGINT", () => {
  try {
    mongoose.disconnect().then();
  } catch { }
  process.exit(0);
});

app.listen(environment.port, () => {
  console.log(`Darkshot server started at ${new Date()} on https://localhost:${environment.port}`);
});
