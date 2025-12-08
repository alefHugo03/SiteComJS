import express from 'express';
import routes from './routes/index.js';
import conectaNaDataBase from './config/db_conect.js';

const conexao = await conectaNaDataBase();

conexao.on('error', (erro) => {
    console.error('Erro de Conexão', erro)
});

conexao.once('open', () => {
    console.log('COnexão com o banco feita com sucesso')
})

const app = express();

routes(app);

export default app;