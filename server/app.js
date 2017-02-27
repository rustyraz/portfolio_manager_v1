import express from 'express';
import bodyParser from 'body-parser';

let app = express();

//omport routes
import index_routes from './routes/index';
import users_routes from './routes/users';

const PORT= process.env.PORT ? process.env.PORT : 3001;
const API_PREFIX = "/api/";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(API_PREFIX, index_routes)
app.use(`${API_PREFIX}user`, users_routes)

app.listen(PORT, () => {
  console.log('Api server running on port '+PORT);
});
