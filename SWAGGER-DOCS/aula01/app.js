import express from 'express';
import 'dotenv/config';
import swaggerUI from "swagger-ui-express";
import { swaggerSpec } from './src/docs/swagger.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});