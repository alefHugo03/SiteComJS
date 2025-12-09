import express from 'express';
import GuiaControler from '../../controlers/guiasControler.js';

const routes = express.Router();

routes.get('/sobre', GuiaControler.guiaCaminho('/templates/informacoes/sobre.html'));
routes.get('/quemsomos', GuiaControler.guiaCaminho('/templates/informacoes/quemsomos.html'));

routes.get('/livros', GuiaControler.guiaCaminho('/templates/biblioteca/livros.html'));

export default routes