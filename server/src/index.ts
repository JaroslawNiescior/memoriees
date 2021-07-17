import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts';

const app = express();

app.use('/posts', postRoutes);

app.use(
  express.json({
    limit: '30mb',
  }),
);

app.use(
  express.urlencoded({
    limit: '30mb',
    extended: true,
  }),
);

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://jaroslawniescior:jaroslaw.niescior123@cluster0.udedr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
)
.catch(
  (error) => console.log(error.message) 
)

mongoose.set('useFindAndModify', false);