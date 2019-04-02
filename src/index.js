import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
// import models from './models';
import routes from './core/routes';
import mongodb from './core/mongodb';
import config from './config'


const app = express();

// data server
mongodb.connect();
// redis.connect();

// Application-Level Middleware

app.use(cors());

app.set('port', config.APP.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1],
//   };
//   next();
// });

// Routes
routes(app);

// Start

app.listen(app.get('port'), () =>
  console.log(`NodePress Run！port at ${app.get('port')}, env: ${process.env.NODE_ENV}`)
);
