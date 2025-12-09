import 'dotenv/config';
import app from './api/app.js';

const PORT = 3000;

app.listen(PORT, '0.0.0.0',() => {
    console.log('Servidor escutando')
})