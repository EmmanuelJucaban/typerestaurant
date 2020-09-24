import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import routes from './routes';

const app = express();
// const PORT: number = 3000;


console.log(process.env.manny);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// '/'
app.use(routes);
app.listen(process.env.PORT, () => {
  console.log('Server started listening on http://localhost:3000');
});

