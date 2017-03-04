import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

let app = express();

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// function setupCORS(req, res, next) {
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
//     res.header('Access-Control-Allow-Origin', '*');
//     if (req.method === 'OPTIONS') {
//         res.status(200).end();
//     } else {
//         next();
//     }
// }
//
// app.use('/*', setupCORS);
//app.options('*', cors());

app.use(cors()); //enabled allCORS Requests

//import routes
import index_routes from './routes/index';
import users_routes from './routes/users';
import auth_routes from './routes/auth';

const PORT= process.env.PORT ? process.env.PORT : 3001;
const API_PREFIX = "/api/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(API_PREFIX, index_routes)
app.use(`${API_PREFIX}user`, users_routes)
app.use(`${API_PREFIX}auth`,auth_routes)

app.listen(PORT, () => {
  console.log('Api server running on port '+PORT);
});
