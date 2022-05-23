import * as functions from 'firebase-functions';
import * as express from 'express';
import { Express } from 'express';
import { PostRouter } from './routers';
import * as cors from 'cors';

const app: Express = express();

app.use(
  cors({
    origin: '*',
    // credentials: true,
  })
);
app.use('/posts', PostRouter);

exports.api = functions.region('asia-northeast3').https.onRequest(app);
