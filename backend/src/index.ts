import express from 'express';
import mongoose, { Connection } from 'mongoose';
import environment from './environment';
import { MainRouter } from './router';

const app = express();
let connection: Connection;

try {
  connection = mongoose.createConnection(environment.mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connecting to the mongo database...');
} catch { }

connection.on('connected', () => console.log('Connected to the mongo database!'));

connection.on('error', () => {
  console.log("Couldn't connect to the network database!");
  process.exit(1);
});

export const MongoConnection: Connection = connection;

app.use(express.json());
app.use('/', MainRouter);

app.listen(environment.port, () => {
  console.log(`Darkshot server started at ${new Date()} on https://localhost:${environment.port}`);
});
