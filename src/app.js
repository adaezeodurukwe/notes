import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import routes from '../src/routes/routes';

dotenv.config();

// Instantiate express app
const app = express();

// Enable logger
app.use(logger('combined'));

// Parse POST data
app.use(bodyParser.json());

// Set up index route
app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Ready to write notes?'
  });
});

app.use('/api/v1', routes);


const port = process.env.PORT;

app.listen(port);

export default app;
