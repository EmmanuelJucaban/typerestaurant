import express from 'express';
import routes from './routes';
const app = express();
// const PORT: number = 3000;
const PORT = 3000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// '/'
app.use(routes);
app.listen(3000, () => {
  console.log('Server started listening on http://localhost:3000');
});

