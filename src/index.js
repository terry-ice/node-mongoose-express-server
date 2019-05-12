import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import routes from './core/routes';
import mock from './routes';
import mongodb from './core/mongodb';
import config from './config';
import models from './models';

const app = express();

mongodb.connect();
app.use(cors());

app.set('port', config.APP.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', mock.session);
app.use('/users', mock.user);
app.use('/messages', mock.message);

// Routes
routes(app);

// Start

app.listen(app.get('port'), () =>
  console.log(
    `NodePress Run！port at ${app.get('port')}, env: ${
      process.env.NODE_ENV
    }`,
  ),
);
