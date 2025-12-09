import express from 'express';
import GuiaControler from '../../controlers/guiasControler.js';

const routes = express.Router();

routes.get('/sobre', GuiaControler.guiaCaminho('/templates/informacoes/sobre.html'));
routes.get('/quemsomos', GuiaControler.guiaCaminho('/templates/informacoes/quemsomos.html'));

routes.get('/cadastro/login', GuiaControler.guiaCaminho('/templates/cadastro/login.html'));
routes.get('/cadastro/novousuario', GuiaControler.guiaCaminho('/templates/cadastro/novaconta.html'));
routes.get('/cadastro/mudarsenha', GuiaControler.guiaCaminho('/templates/cadastro/mudarsenha.html'));

routes.get('/livros', GuiaControler.guiaCaminho('/templates/biblioteca/livros.html'));

export default routes