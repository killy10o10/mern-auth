import  express  from "express";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => res.send('API running'));

app.listen(port, () => console.log(`Server started on port ${port}. Enter http://127.0.0.1:${port} in your browser`));