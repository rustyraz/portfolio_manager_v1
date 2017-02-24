import express from 'express';
import bodyParser from 'body-parser';

let app = express();

//omport routes
import index_routes from './routes/index';
import users_routes from './routes/users';

const PORT= process.env.PORT ? process.env.PORT : 3000;
const API_PREFIX = "/api/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(API_PREFIX, index_routes)
app.use(`${API_PREFIX}users`, users_routes)

app.listen(PORT, () => {
  console.log('Api server running on port 3000');
});
