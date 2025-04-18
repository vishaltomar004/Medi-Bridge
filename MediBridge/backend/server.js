import express from 'express';
import cors from 'cors';
import 'dotenv/config';


// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.get('/', (req, res) => {
  res.send('API Working great')
})

app.listen(port, () => 
  console.log('Server started on port', port));
