import express from 'express';
import 'dotenv/config';
import userRoutes from './src/routes/userRoutes.js';
import postRoutes from './src/routes/postRoutes.js';
import commentRoutes from './src/routes/commentRoutes.js';

const app = express();
const port = process.env.PORT;

app.use(express.json());


app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/users`);
});